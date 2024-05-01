$(function(){
    //jq will execute this function after page load
    $("#addbutton").click(handlebtnclick);
    //$("#todos li").click(removeMe);
    $("#todos").on("click", "li", removeMe);
    
    });
    function handlebtnclick()
    {
       // alert("btn clicked");
       var newtodo = $("#newtodo").val();
       if(!newtodo){
        $("#newtodo").addClass("error");
        return;
       }
       $("#newtodo").removeClass("error");
       //$("#newtodo").val("");
       $("#todos").append("<li>" + newtodo + "</li>");
       //$("#todos li").click(removeMe);
    }
    function removeMe(){
        $(this).remove();
        //$(this).fadeOut();
    }