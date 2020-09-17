$(function () {
  var pagetop = $("#page_top")
  // ボタン非表示
  pagetop.hide()
  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn()
    } else {
      pagetop.fadeOut()
    }
  })
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500)
    return false
  })
})

$(function () {
  var show = document.getElementById("show")
  var hide = document.getElementById("hide")

  show.addEventListener("click", function () {
    document.body.className = "menu-open"
  })

  hide.addEventListener("click", function () {
    document.body.className = ""
  })
})

window.onload = function () {
  scroll_effect()

  $(window).scroll(function () {
    scroll_effect()
  })

  function scroll_effect() {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll")
      }
    })
  }
}
$(function () {
  $(window).scroll(function () {
    $(".effect-fade2").each(function () {
      var elemPos = $(this).offset().top
      var scroll = $(window).scrollTop()
      var windowHeight = $(window).height()
      if (scroll > elemPos - windowHeight) {
        $(this).addClass("effect-scroll")
      }
    })
  })
})
