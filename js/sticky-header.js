const header = document.querySelector(".header");
sticky = header.offsetTop;


window.onscroll = () => {
    if (window.pageYOffset > sticky) {
    header.classList.add("header--sticky");
  } else {
    header.classList.remove("header--sticky");
  }
}

