$(document).ready(function(){
  $("form#questions").submit(function(event){
      event.preventDefault();

    var question1 = $("select#weather").val();
    var question2 = $("select#activity").val();
    var question3 = $("select#distance").val();
    var question4 = $("select#interests").val();
    var question5 = $("select#comfortLevel").val();
    console.log("#weather:" + question1);
    console.log("#activity:" + question2);
    console.log("#distance:" + question3);
    console.log("#interests:" + question4);
    console.log("#comfortLevel:" + question5);
    var result;
    if (question1 === "hot" && question2 === "surfing" && question3 === "far") {
      $("#vacation1").show();
    } else if (question1 === "cold" && question2 === "skiing" && question4 === "snow")  {
      $("#vacation2").show();
  } else if (question1 === "cool" && question2 === "lounging" || question5 === "fiveStars" && question4 === "homesick") {
      $("#vacation3").show();
  } else {
      $("#vacation3").show();
  }
      $("output").empty();
      $("output").show(result);
  });
});
