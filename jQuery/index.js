// alert("Working")

// $ is used instead of start jQuery()

$("h1");
$("button").click(function () {
    $("h1").css("color","purple");
});


// $("input").keypress(function (event){
//     console.log(event.key);
// });

$(document).keypress(function(event){
    $("h1").text(event.key);
});

