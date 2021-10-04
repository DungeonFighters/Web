
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
    $("dd").click(function(){
      alert("Hello world!");
    });

    $("span#primeiro").click(function(){
      alert("Hello world!");
    });

    $("div.big").click(function(){
      //alert("Hello world!");
    });

    $("div").click(function(){
      // $(this).css("background-color","blue");
    });
});
