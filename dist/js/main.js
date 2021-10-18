const burgerBtn = document.querySelector(".burger-btn");
const circleBG = document.querySelector(".circleBG");
const menu = document.querySelector(".menu");
const menuAvatar = document.querySelector(".menu-avatar");
const menuNav = document.querySelector(".menu-nav");
const avatar = document.querySelector(".avatar");

//Scroll to different sections
$(document).ready(function () {
  $(".nav-item a").click(function () {
    toggleMenu();

    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      500
    );
  });
});

let showMenu = false;
burgerBtn.addEventListener("click", toggleMenu);

//Toggle the menu button
const body = document.querySelector("body");
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
    menuAvatar.classList.add("show");
    menuNav.classList.add("show");
    circleBG.setAttribute("style", "width: 500vw; height: 500vw;");

    setTimeout(function () {
      avatar.setAttribute("style", "width: 50vw; height: 50vw; opacity: 1;");

      navHome.classList.add("scale");

      setTimeout(function () {
        navSkills.classList.add("scale");
      }, 50);

      setTimeout(function () {
        navWorks.classList.add("scale");
      }, 100);

      setTimeout(function () {
        navEdu.classList.add("scale");
      }, 150);

      setTimeout(function () {
        navExp.classList.add("scale");
      }, 200);

      // setTimeout(function() {
      //   gallery.classList.add("scale");
      // }, 250);

      setTimeout(function () {
        navContact.classList.add("scale");
      }, 250);
    }, 200);

    showMenu = true;
  } else {
    avatar.setAttribute("style", "width: 100px; height: 100px; opacity: 0;");

    // navContact.classList.remove("scale");

    setTimeout(function () {
      // gallery.classList.remove("scale");
      navContact.classList.remove("scale");
    }, 50);

    setTimeout(function () {
      navExp.classList.remove("scale");
    }, 100);

    setTimeout(function () {
      navEdu.classList.remove("scale");
    }, 150);

    setTimeout(function () {
      navWorks.classList.remove("scale");
    }, 200);

    setTimeout(function () {
      navSkills.classList.remove("scale");
    }, 250);

    setTimeout(function () {
      navHome.classList.remove("scale");
    }, 300);

    setTimeout(function () {
      burgerBtn.classList.remove("close");
      menu.classList.remove("show");
      menuAvatar.classList.remove("show");
      menuNav.classList.remove("show");

      circleBG.setAttribute("style", "width: 1px; height: 1px;");
    }, 300);

    showMenu = false;
  }
}

//Skills Section
$(document).ready(function () {
  $(window).scroll(function () {
    const max = $(window).height() * 0.3;
    const min = max - $(window).height();
    let distance = $("#skills").offset().top - $(window).scrollTop();

    if (distance >= min && distance <= max) {
      $(".firstRow").addClass("popUp");
      $(".secondRow").addClass("popUp");
      $(".thirdRow").addClass("popUp");

      setTimeout(function () {
        $("#htmlSkill").addClass("popUp");
        $("#jsSkill").addClass("popUp");
        $("#wordpressSkill").addClass("popUp");
      }, 500);

      setTimeout(function () {
        $("#cssSkill").addClass("popUp");
        $("#tsSkill").addClass("popUp");
        $("#psSkill").addClass("popUp");
        $("#muiSkill").addClass("popUp");
        $("#reactSkill").addClass("popUp");
        $("#phpSkill").addClass("popUp");
      }, 650);

      setTimeout(function () {
        $("#bootstrapSkill").addClass("popUp");
        $("#nodeSkill").addClass("popUp");
        $("#awsSkill").addClass("popUp");
        $("#jquerySkill").addClass("popUp");
        $("#reduxSkill").addClass("popUp");
        $("#mysqlSkill").addClass("popUp");
      }, 800);

      setTimeout(function () {
        $("#webpackSkill").addClass("popUp");
        $("#ajaxSkill").addClass("popUp");
        $("#sassSkill").addClass("popUp");
        $("#mongoSkill").addClass("popUp");
        $("#expressSkill").addClass("popUp");
        $("#gitSkill").addClass("popUp");
        $("#nextSkill").addClass("popUp");
        $("#githubSkill").addClass("popUp");
      }, 950);
    } else {
      $(".skill").each(function () {
        $(this).removeClass("popUp");
      });
    }
  });
});

//Works Section
$(document).ready(function () {
  $(window).scroll(function () {
    const max = $(window).height() * 0.3;
    const min = max - $(window).height();
    let distance = $("#works").offset().top - $(window).scrollTop();

    if (distance >= min && distance <= max) {
      $(".works").addClass("slideUp");

      setTimeout(function () {
        $("#workOne").addClass("slideUp");
      }, 500);

      setTimeout(function () {
        $("#workTwo").addClass("slideUp");
      }, 650);

      setTimeout(function () {
        $("#workThree").addClass("slideUp");
      }, 800);

      setTimeout(function () {
        $("#workFour").addClass("slideUp");
      }, 950);
    } else {
      $(".work").each(function () {
        $(this).removeClass("slideUp");
      });
    }
  });

  $(".work").each(function () {
    $(this).hover(
      function () {
        $(this).find(".workOverlay").addClass("showWorkOverlay");
        $(this).find(".workDetail").addClass("showWorkDetail");
      },
      function () {
        $(this).find(".workOverlay").removeClass("showWorkOverlay");
        $(this).find(".workDetail").removeClass("showWorkDetail");
      }
    );
  });
});

//Education Section
$(document).ready(function () {
  $(window).scroll(function () {
    const max = $(window).height() * 0.3;
    const min = max - $(window).height();
    let distance = $("#edu").offset().top - $(window).scrollTop();

    if (distance >= min && distance <= max) {
      $(".educations").addClass("slideIn");

      setTimeout(function () {
        $("#nmit").addClass("slideIn");
        $("#qtu").addClass("slideIn");
      }, 500);

      setTimeout(function () {
        $(".eduOverlay").addClass("showEduOverlay");
      }, 1000);

      setTimeout(function () {
        $(".eduTime").addClass("showEduDetail");
      }, 1300);
      setTimeout(function () {
        $(".eduName").addClass("showEduDetail");
      }, 1500);
      setTimeout(function () {
        $(".eduDegree").addClass("showEduDetail");
      }, 1700);
      setTimeout(function () {
        $(".eduPlace").addClass("showEduDetail");
      }, 1900);
    } else {
      $("#nmit").removeClass("slideIn");
      $("#qtu").removeClass("slideIn");
      $(".eduOverlay").removeClass("showEduOverlay");
      $(".eduTime").removeClass("showEduDetail");
      $(".eduName").removeClass("showEduDetail");
      $(".eduDegree").removeClass("showEduDetail");
      $(".eduPlace").removeClass("showEduDetail");
    }
  });
});

//Experience Section
$(document).ready(function () {
  $(window).scroll(function () {
    const max = $(window).height() * 0.3;
    const min = max - $(window).height();
    let distance = $("#exp").offset().top - $(window).scrollTop();

    if (distance >= min && distance <= max) {
      $(".experiences").addClass("slideIn");

      setTimeout(function () {
        $("#vfh").addClass("slideIn");
        $("#vfh").find(".companyName").addClass("slideIn");
        $("#vfh").find(".expDetail").addClass("slideIn");

        $("#uber").addClass("slideIn");
        $("#uber").find(".companyName").addClass("slideIn");
        $("#uber").find(".expDetail").addClass("slideIn");
      }, 500);

      setTimeout(function () {
        $("#awf").addClass("slideIn");
        $("#awf").find(".companyName").addClass("slideIn");
        $("#awf").find(".expDetail").addClass("slideIn");

        $("#eastern").addClass("slideIn");
        $("#eastern").find(".companyName").addClass("slideIn");
        $("#eastern").find(".expDetail").addClass("slideIn");
      }, 650);

      setTimeout(function () {
        $("#pack").addClass("slideIn");
        $("#pack").find(".companyName").addClass("slideIn");
        $("#pack").find(".expDetail").addClass("slideIn");

        $("#yiyang").addClass("slideIn");
        $("#yiyang").find(".companyName").addClass("slideIn");
        $("#yiyang").find(".expDetail").addClass("slideIn");
      }, 800);

      setTimeout(function () {
        $(".expBottom").addClass("slideIn");
      }, 950);
    } else {
      $(".experience").each(function () {
        $(this).removeClass("slideIn");
        $(".companyName").removeClass("slideIn");
        $(".expDetail").removeClass("slideIn");
        $(".expBottom").removeClass("slideIn");
      });
    }
  });

  //expModal
  $(".ogkCircle").click(function () {
    $(".ogkBG").css({ width: "100vw", opacity: "1" });
    $("body").css("overflow-y", "hidden");

    setTimeout(function () {
      $(".ogkBG").css("height", "100vh");
    }, 650);

    setTimeout(function () {
      $(".modalCompanyName").addClass("showModalText");
      $(".modalExpDetail").addClass("showModalText");
    }, 1200);
  });

  $(".yiyangCircle").click(function () {
    $(".yiyangBG").css({ width: "100vw", opacity: "1" });
    $("body").css("overflow-y", "hidden");

    setTimeout(function () {
      $(".yiyangBG").css("height", "100vh");
    }, 650);

    setTimeout(function () {
      $(".modalCompanyName").addClass("showModalText");
      $(".modalExpDetail").addClass("showModalText");
    }, 1200);
  });

  $(".awfCircle").click(function () {
    $(".awfBG").css({ width: "100vw", opacity: "1" });
    $("body").css("overflow-y", "hidden");

    setTimeout(function () {
      $(".awfBG").css("height", "100vh");
    }, 650);

    setTimeout(function () {
      $(".modalCompanyName").addClass("showModalText");
      $(".modalExpDetail").addClass("showModalText");
    }, 1200);
  });

  $(".ecCircle").click(function () {
    $(".ecBG").css({ width: "100vw", opacity: "1" });
    $("body").css("overflow-y", "hidden");

    setTimeout(function () {
      $(".ecBG").css("height", "100vh");
    }, 650);

    setTimeout(function () {
      $(".modalCompanyName").addClass("showModalText");
      $(".modalExpDetail").addClass("showModalText");
    }, 1200);
  });

  $(".expBG").each(function () {
    $(this).click(function () {
      $(".modalCompanyName").removeClass("showModalText");
      $(".modalExpDetail").removeClass("showModalText");

      setTimeout(function () {
        $(".expBG").css("width", "3px");
      }, 500);

      setTimeout(function () {
        $(".expBG").css({ height: "2px", opacity: "0" });
        $("body").css("overflow-y", "auto");
      }, 1150);
    });
  });
});

$(".emailBG").hover(
  function () {
    $(this).addClass("expand");
    setTimeout(function () {
      $(".emailBG").find(".mediaText").addClass("showMediaText");
    }, 300);
  },
  function () {
    $(".emailBG").find(".mediaText").removeClass("showMediaText");
    $(".emailBG").removeClass("expand");
  }
);

$(".phoneBG").hover(
  function () {
    $(this).addClass("expand");
    setTimeout(function () {
      $(".phoneBG").find(".mediaText").addClass("showMediaText");
    }, 300);
  },
  function () {
    $(".phoneBG").find(".mediaText").removeClass("showMediaText");
    $(".phoneBG").removeClass("expand");
  }
);
