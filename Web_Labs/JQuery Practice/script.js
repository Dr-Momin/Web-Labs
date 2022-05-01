
// $ - it is used to access jquery
// selector - html selector
// action


$(document).ready(function (){
    $("h1").click(function(){
        alert("Hi i am clicked");
    })

    $("h2").dblclick(function(){
        alert("Hi i am double clicked");
    })


    $("#name").focus(function (){
        $(this).css("background-color", "grey");
    })

})



