const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".section");
function showFullImage(img) {
    const preview = document.getElementById("fullscreenPreview");
    const previewImg = document.getElementById("fullscreenImg");
  
    previewImg.src = img.src;
    preview.style.display = "flex";
  }
  
  function hideFullImage() {
    document.getElementById("fullscreenPreview").style.display = "none";
  }  

navItems.forEach(item => {
  item.addEventListener("click", e => {
    e.preventDefault();
    const target = item.getAttribute("href").substring(1);

    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === target) {
        sec.classList.add("active");
      }
    });
  });
});
