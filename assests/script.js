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

  if(!mapConsent){
    return;
  }

  const button = mapConsent.querySelector(".map-load-btn");
  const mapSrc = mapConsent.dataset.mapSrc;

  if(!button || !mapSrc){
    return;
  }

  button.addEventListener("click", function(){
    mapConsent.classList.add("map-loaded");

    mapConsent.innerHTML =
      '<iframe src="' + mapSrc + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>';
  });
});
