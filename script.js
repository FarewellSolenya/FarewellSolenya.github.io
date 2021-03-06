
$(function(){
    
    var y = $("#myHeader").innerHeight();
    var offsetTop = $("#myHeader").offset().top;
    $("#myHeader").css('width', ($("#myContent").innerWidth() - 32) + 'px');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= offsetTop) {
            $("#myHeader").addClass("sticky");
            $("#myContent").css('padding-top', y +'px');
            
        } else {
            $("#myHeader").removeClass("sticky");
            $("#myContent").css('padding-top', '0px');
        }
    });

    $(window).resize(function(){
        $("#myHeader").css('width', ($("#myContent").innerWidth() - 32) + 'px');
    });

    $("#myContent").html($("#MainPage").html());

    $("#MainPageButton").click(function(){
        $("#myContent").html($("#MainPage").html());
    });

    $("#InfoPageButton").click(function(){
        $("#myContent").html($("#InfoPage").html());
    });

    $("#ContactPageButton").click(function(){
        $("#myContent").html($("#ContactPage").html());
    });
});
