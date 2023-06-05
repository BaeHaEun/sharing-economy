import Footer from 'Footer';

document.addEventListener("DOMContentLoaded", () => {
  const FooterEl = document.querySelector("footer");
  FooterEl.innerHTML = Footer.render();
  document.body.appendChild(FooterEl);
})