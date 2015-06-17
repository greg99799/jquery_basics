//prevent spoiler from being seen
//hide spoilers and reveal them through user 

//hide spoiler
$(".spoiler span").hide();
//add button
$(".spoiler").append("<button>Reveal Spoiler!</button>")
//when button pressed
$("button").click(function() {
  //show spoiler *****NEXT TO BUTTON CLICKED****
  $( this ).prev().show();
  // $(".spoiler span").show();
  //get rid of button
  $( this ).remove();
});
  //****MY ATTEMPT - needed to show span in line 16
                    //and unneccessary brackets in line 18
// $("button").click(function() {
//   $(".spoiler").show();
//   $("<button>").hide(); --this changed to 'remove'
// });