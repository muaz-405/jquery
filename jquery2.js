$(function(){
    // jQuery will execute this function after page load
    $("#addbutton").click(handlebtnclick);
    $("#todos").on("click", "td", removeMe);
});

function handlebtnclick() {
    var newtodo = $("#newtodo").val();
    if (!newtodo) {
        $("#newtodo").addClass("error");
        return;
    }
    $("#newtodo").removeClass("error");
    // Add the new to-do item to a new <td> inside the first <tr>
    $("#todos tr").append("<td>" + newtodo + "</td>");
}

function removeMe() {
    $(this).remove();
}