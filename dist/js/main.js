const burgerBtn = document.querySelector(".burger-btn");
const circleBG = document.querySelector(".circleBG");
const avatar = document.querySelector(".avatar");

const navHome = document.querySelector("#navHome");
const navSkills = document.querySelector("#navSkills");
const navWorks = document.querySelector("#navWorks");
const navEdu = document.querySelector("#navEdu");
const navExp = document.querySelector("#navExp");
const navContact = document.querySelector("#navContact");

let showMenu = false;

burgerBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    burgerBtn.classList.add("close");
    circleBG.setAttribute("style", "width: 500vw; height: 500vw;");

    setTimeout(function() {
      avatar.setAttribute("style", "width: 50vw; height: 50vw; opacity: 1;");

      setTimeout(function() {
        navHome.classList.add("scale");
      }, 50);

      setTimeout(function() {
        navSkills.classList.add("scale");
      }, 100);

      setTimeout(function() {
        navWorks.classList.add("scale");
      }, 150);

      setTimeout(function() {
        navEdu.classList.add("scale");
      }, 200);

      setTimeout(function() {
        navExp.classList.add("scale");
      }, 250);

      setTimeout(function() {
        navContact.classList.add("scale");
      }, 300);
    }, 200);

    showMenu = true;
  } else {
    avatar.setAttribute("style", "width: 100px; height: 100px; opacity: 0;");

    setTimeout(function() {
      navContact.classList.remove("scale");
    }, 50);

    setTimeout(function() {
      navExp.classList.remove("scale");
    }, 100);

    setTimeout(function() {
      navEdu.classList.remove("scale");
    }, 150);

    setTimeout(function() {
      navWorks.classList.remove("scale");
    }, 200);

    setTimeout(function() {
      navSkills.classList.remove("scale");
    }, 250);

    setTimeout(function() {
      navHome.classList.remove("scale");
    }, 300);

    setTimeout(function() {
      burgerBtn.classList.remove("close");
      circleBG.setAttribute("style", "width: 1px; height: 1px;");
    }, 300);

    showMenu = false;
  }
}
