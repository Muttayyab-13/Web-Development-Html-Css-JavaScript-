$(" div#ab h1 ").css("color","black");

$(" h1").on("mouseover",function(event){

    $("h1").css("color","blue");

    setTimeout(function(){
        $("h1").css("color","black")
    },500);


})