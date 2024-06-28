$(".box2, .box3, .box4").hide();

$(".btns>li:nth-child(1)").click(function(){
  $(".box1").show()
  $(".box1").siblings().hide();
  $(".container").addClass("bg1")
  $(".container").removeClass("bg2")
  $(".container").removeClass("bg3")
  $(".container").removeClass("bg4")
})

$(".btns>li:nth-child(2)").click(function(){
  $(".box2").show()
  $(".box2").siblings().hide();
  $(".container").addClass("bg2")
  $(".container").removeClass("bg3")
  $(".container").removeClass("bg4")
})

$(".btns>li:nth-child(3)").click(function(){
  $(".box3").show()
  $(".box3").siblings().hide();
  $(".container").addClass("bg3")
  $(".container").removeClass("bg4")
})

$(".btns>li:nth-child(4)").click(function(){
  $(".box4").show()
  $(".box4").siblings().hide();
  $(".container").addClass("bg4")
})


