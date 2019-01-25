const burgerBtn = document.querySelector(".burger-btn");
const circleBG = document.querySelector(".circleBG");
const menu = document.querySelector(".menu");
const avatar = document.querySelector(".avatar");

let showMenu = false;
burgerBtn.addEventListener("click", toggleMenu);

//Scroll to different sections
$(document).ready(function() {
  $(".nav-item").click(function() {
    toggleMenu();

    let page_id = $(this)
      .children("a")
      .attr("href");

    $("section").each(function() {
      let section_id = $(this).attr("id");

      if (page_id == "#" + section_id) {
        $("html, body").animate(
          {
            scrollTop: $(this).offset().top
          },
          500
        );
      }
    });
  });
});

//Toggle the menu button
const navHome = document.querySelector("#navHome");
const navSkills = document.querySelector("#navSkills");
const navWorks = document.querySelector("#navWorks");
const navEdu = document.querySelector("#navEdu");
const navExp = document.querySelector("#navExp");
const gallery = document.querySelector("#gallery");
const navContact = document.querySelector("#navContact");
const navItems = document.querySelectorAll(".nav-item");

function toggleMenu() {
  if (!showMenu) {
    burgerBtn.classList.add("close");
    menu.classList.add("show");
    circleBG.setAttribute("style", "width: 500vw; height: 500vw;");

    setTimeout(function() {
      avatar.setAttribute("style", "width: 50vw; height: 50vw; opacity: 1;");

      navHome.classList.add("scale");

      setTimeout(function() {
        navSkills.classList.add("scale");
      }, 50);

      setTimeout(function() {
        navWorks.classList.add("scale");
      }, 100);

      setTimeout(function() {
        navEdu.classList.add("scale");
      }, 150);

      setTimeout(function() {
        navExp.classList.add("scale");
      }, 200);

      setTimeout(function() {
        gallery.classList.add("scale");
      }, 250);

      setTimeout(function() {
        navContact.classList.add("scale");
      }, 300);
    }, 200);

    showMenu = true;
  } else {
    avatar.setAttribute("style", "width: 100px; height: 100px; opacity: 0;");

    navContact.classList.remove("scale");

    setTimeout(function() {
      gallery.classList.remove("scale");
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
      menu.classList.remove("show");
      circleBG.setAttribute("style", "width: 1px; height: 1px;");
    }, 300);

    showMenu = false;
  }
}

//Skills Section
$(document).ready(function() {
  $(window).scroll(function() {
    const max = $(window).height() * 0.3;
    const min = max - $(window).height();
    let distance = $("#skills").offset().top - $(window).scrollTop();

    if (distance >= min && distance <= max) {
      setTimeout(function() {
        $("#jsSkill").addClass("popUp");
      }, 300);
      setTimeout(function() {
        $("#reactSkill").addClass("popUp");
      }, 400);
      setTimeout(function() {
        $("#htmlSkill").addClass("popUp");
      }, 500);
    } else {
      $(".skill").each(function() {
        $(this).removeClass("popUp");
      });
    }
  });
});
