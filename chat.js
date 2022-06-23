console.log("hello")
$(document).ready(function () {
    $(".chat_bar_btn").click(function () {
        $(".content").toggle(function () {
            $(".content").css("max-height", "0px");
        }, function () {
            $(".content").css("max-height", "350px");
        })
    })
    $(".chat_bar_btn").click(function () {
        var date = new Date();
        var time = date.getHours() + "-" + date.getMinutes();
        document.getElementById("timecurrent").innerHTML = time;
        // console.log(time)
    })

})
function mainfunc(e, userText) {
    if (e.key == "Enter") {
        if (userText == "txt") {
            var userInput = $("#useript").val()
            $("#userspan").append(userInput+"<br>");

                let botResponse = getBotResponse(userInput);
                let botHTML = '<br><p id="botstart"><span id="botspan">' + botResponse + '</span></p>';
                $("#botspan").append(botHTML);
        }
    }
}