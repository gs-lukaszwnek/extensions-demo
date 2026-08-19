document.addEventListener("DOMContentLoaded", () => {
  console.log("[demo] Welcome to the community!");

  // Adobe Spectrum scopes its tokens under .spectrum.spectrum--light.spectrum--medium.
  // Activating those classes on <body> makes --spectrum-* variables available document-wide.
  document.body.classList.add(
    "spectrum",
    "spectrum--light",
    "spectrum--medium",
  );

  const badge = document.createElement("div");
  badge.textContent = "hello from js";
  badge.style.cssText =
    "position:fixed;top:16px;left:16px;" +
    "background:#2680eb;color:white;" +
    "padding:12px 20px;border-radius:8px;" +
    "font-family:sans-serif;font-size:18px;font-weight:600;" +
    "box-shadow:0 4px 12px rgba(0,0,0,0.15);z-index:9999";
  document.body.appendChild(badge);
});
