function hideDesc() {
  $(".hideDesc").hide()
}
function hideMessage() {
  $(".messageSent").hide()
}
function showDesc1() {
  $(".hide1").slideToggle("slow")
}
function showDesc2() {
  $(".hide2").slideToggle("slow")
}
function showDesc3() {
  $(".hide3").slideToggle("slow")
}
function showDesc4() {
  $(".hide4").slideToggle("slow")
}
function showDesc5() {
  $(".hide5").slideToggle("slow")
}
function showDesc6() {
  $(".hide6").slideToggle("slow")
}
function showDesc7() {
  $(".hide7").slideToggle("slow")
}
function showDesc8() {
  $(".hide8").slideToggle("slow")
}
function showDesc9() {
  $(".hide9").slideToggle("slow")
}
function showDesc10() {
  $(".hide10").slideToggle("slow")
}
function showDesc11() {
  $(".hide11").slideToggle("slow")
}
function showDesc12() {
  $(".hide12").slideToggle("slow")
}
function showMessageSent() {
  $(".aboutUs-input").hide()
  $(".messageSent").toggle()
}

$(function () {
  $(".btn1").on("click", function () {
    showDesc1()
  })
  $(".btn2").on("click", function () {
    showDesc2()
  })
  $(".btn3").on("click", function () {
    showDesc3()
  })
  $(".btn4").on("click", function () {
    showDesc4()
  })
  $(".btn5").on("click", function () {
    showDesc5()
  })
  $(".btn6").on("click", function () {
    showDesc6()
  })
  $(".btn7").on("click", function () {
    showDesc7()
  })
  $(".btn8").on("click", function () {
    showDesc8()
  })
  $(".btn9").on("click", function () {
    showDesc9()
  })
  $(".btn10").on("click", function () {
    showDesc10()
  })
  $(".btn11").on("click", function () {
    showDesc11()
  })
  $(".btn12").on("click", function () {
    showDesc12()
  })
  $(".btnSend").on("click", function () {
    showMessageSent()
  })
  $(".btnUpload").on("click", function () {
    alert("Your event is now uploaded to our website")
  })
})
