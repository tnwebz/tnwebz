/**
 * Utility to open WhatsApp natively on mobile and desktop apps.
 * Uses whatsapp:// custom URI protocol to launch WhatsApp application directly
 * without staying on wa.me website landing page.
 */
export function openWhatsApp(phone: string, text: string = "") {
  const encodedText = encodeURIComponent(text);
  const isMobile =
    typeof navigator !== "undefined" &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const nativeUrl = `whatsapp://send?phone=${phone}${
    encodedText ? `&text=${encodedText}` : ""
  }`;
  const webUrl = `https://api.whatsapp.com/send?phone=${phone}${
    encodedText ? `&text=${encodedText}` : ""
  }`;

  if (isMobile) {
    // On mobile, opening whatsapp:// protocol launches the native WhatsApp app immediately
    window.location.href = nativeUrl;
  } else {
    // On desktop, try native URI protocol first to launch WhatsApp Desktop app directly
    const start = Date.now();
    window.location.href = nativeUrl;

    // If native app isn't installed/supported after timeout, fallback to web URL
    setTimeout(() => {
      if (Date.now() - start < 1500) {
        window.open(webUrl, "_blank");
      }
    }, 500);
  }
}
