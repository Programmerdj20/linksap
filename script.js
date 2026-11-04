// =========================================================
// EDITAR AQUÍ: mensaje y enlace que se compartirán por
// WhatsApp / Telegram y con el botón de compartir nativo.
// =========================================================
const SHARE_CONFIG = {
  message: "Mira todo el contenido de OneTV 📺",
  url: "https://onetv.example.com", // reemplazar por el link real a compartir
};
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const { message, url } = SHARE_CONFIG;

  const whatsappLink = document.getElementById("share-whatsapp");
  const telegramLink = document.getElementById("share-telegram");

  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/?text=${encodeURIComponent(`${message} ${url}`)}`;
  }

  if (telegramLink) {
    telegramLink.href = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`;
  }
});
