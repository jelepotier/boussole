document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('toggleAbout');
  const aboutSection = document.getElementById('about');

  if (toggleBtn && aboutSection) {
    toggleBtn.addEventListener('click', function () {
      aboutSection.classList.toggle('hidden');
    });
  }
});
