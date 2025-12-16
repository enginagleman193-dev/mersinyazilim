"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    setError("");

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setState("error");
      setError("Form endpoint tanımlı değil. .env.local dosyanızı kontrol edin.");
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setState("error");
        setError(data?.error || "Form gönderilemedi. Lütfen tekrar deneyin.");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setError("Ağ hatası. Lütfen tekrar deneyin.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border p-6">
      <div className="grid gap-2">
        <label className="text-sm font-medium">Ad Soyad</label>
        <input
          name="name"
          required
          className="rounded-xl border px-4 py-3"
          placeholder="Adınız Soyadınız"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Telefon</label>
        <input
          name="phone"
          required
          className="rounded-xl border px-4 py-3"
          placeholder="+90..."
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">E-posta</label>
        <input
          name="email"
          type="email"
          className="rounded-xl border px-4 py-3"
          placeholder="ornek@mail.com"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">İhtiyaç</label>
        <select name="need" required className="rounded-xl border px-4 py-3">
          <option value="">Seçiniz</option>
          <option>Web Sitesi</option>
          <option>Google Haritalar İşletme Kaydı</option>
          <option>Temel SEO</option>
          <option>Bakım & Destek</option>
        </select>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium">Mesaj</label>
        <textarea
          name="message"
          className="min-h-28 rounded-xl border px-4 py-3"
          placeholder="Kısaca ihtiyacınızı yazın..."
        />
      </div>

      <input type="hidden" name="source" value="mersinyazilim.com" />

      <button
        disabled={state === "loading"}
        className="rounded-xl bg-gray-900 px-5 py-3 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-60"
      >
        {state === "loading" ? "Gönderiliyor..." : "Teklif İste"}
      </button>

      {state === "success" ? (
        <p className="text-sm text-green-700">
          Talebiniz alındı. En kısa sürede dönüş yapacağız.
        </p>
      ) : null}

      {state === "error" ? <p className="text-sm text-red-700">{error}</p> : null}

      <p className="text-xs text-gray-500">
        Gönder butonuna basarak iletişime geçilmesini kabul etmiş olursunuz.
      </p>
    </form>
  );
}
