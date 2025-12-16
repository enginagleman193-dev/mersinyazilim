"use client";

export function WhatsAppFloating() {
  const href =
    "https://wa.me/905318410347?text=Merhaba%2C%20mersinyazilim.com%20%C3%BCzerinden%20yaz%C4%B1yorum.%20Bilgi%20almak%20istiyorum.";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 rounded-full bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-gray-800"
      aria-label="WhatsApp ile iletişime geç"
    >
      WhatsApp
    </a>
  );
}
