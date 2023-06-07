// document.getElementById('btn').addEventListener('click', function () {
//     document.getElementById('h-1').innerText = "HELLO USER";
// })


$('#btn').click(function(){
    document.getElementById('h-1').innerText = "HELLO USER WE ARE USING JQ";
})

$("#btn").mouseover(function () { 
    document.getElementById('h-1').innerText = "HELLO USER WE ARE USING JQ";
    $("#h-1").css({'color': 'green'});
});


$("#btn").mouseleave(function () { 
    // document.getElementById('h-1').innerText = "BYE USER";
        $("#h-1").html("<h3> WE ARE USING H3 TAG </h3>");
        $("#h-1").css({'color': 'red'});
        $(".h1").fadeIn();
});

$("#btn").click(function () { 
    
    $(".h1").fadeOut(2000);    
});