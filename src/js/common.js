const nav = document.querySelector("#gnb");
const header = document.querySelector("header");

nav.addEventListener("mouseenter", () => {
	header.style.height = 320 + "px";
  header.style.boxShadow = `2px 2px 3px rgba(0,0,0,.15)`
})

nav.addEventListener("mouseleave", () => {
	header.style.height = 90 + "px";
  header.style.boxShadow = `none`
})