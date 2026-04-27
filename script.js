const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

document.addEventListener("DOMContentLoaded", function(){
  const mapConsent = document.querySelector(".map-consent");

  if(mapConsent){
    const button = mapConsent.querySelector(".map-load-btn");
    const mapSrc = mapConsent.getAttribute("data-map-src");

    button.addEventListener("click", function(){
      const iframe = document.createElement("iframe");

      iframe.src = mapSrc;
      iframe.loading = "lazy";
      iframe.referrerPolicy = "no-referrer-when-downgrade";
      iframe.allowFullscreen = true;

      mapConsent.innerHTML = "";
      mapConsent.appendChild(iframe);
    });
  }
});
