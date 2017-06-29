$(document).ready(function() {
  var mil = 86400000;
  $("#calc").click(function() {
    var birth = $("#dob").val();
	if(birth===""){
	alert("Please Enter a valid Date of Birth");
	$("#dob").css("border-color","red");
	}
	else {
		$("#hide1").slideDown("slow");
		$("#hide2").slideDown("slow");
	$("#dob").css("border-color","");
    var bday = Date.parse(birth);
    var today_date = Date();
    console.log(today_date);
    var today_days = Date.parse(today_date);
    console.log(today_days);
    var days = Math.floor((today_days - bday) / mil);
    $("#days_output").html(days);
    var i, big_moment;
    for (i = 10000;; i += 10000) {
      if (days < i) {
        big_moment = i;
        break;
      };
    };
    $("#big_moment").html(big_moment);
    var big_moment_date = new Date(bday + mil * big_moment);
    $("#big_moment_days").html(big_moment_date.toUTCString().substring(0, 16));
    var small_moment_array = [
      1000,
      1111,
      2000,
      2222,
      3000,
      3333,
      4000,
      4444,
      5000,
      5555,
      6000,
      6666,
      7000,
      7777,
      8000,
      8888,
      9000,
      10000,
      11111,
      12000,
      12345,
      15000,
      19000,
      22222,
      25000,
      29000,
      35000,
      45000,
    ];
    var small_moment;
    for (i = 0; i <= 14; i++) {
      if (days < small_moment_array[i]) {
        small_moment = small_moment_array[i];
        break;
      };
    };
    $("#small_moment").html(small_moment);
    var small_moment_date = new Date(bday + mil * small_moment);
    $("#small_moment_days").html(small_moment_date.toUTCString().substring(0, 16));
	}//else
  });
});
