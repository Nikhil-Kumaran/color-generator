$(document).ready(function(){
    $(window).click(function() {
        $('.cta').removeClass('active');
    });
    $(".cta").click(function(event){
        $(".cta:not(.sent)").addClass("active");
        $("input").focus();
        event.stopPropagation();
    });
    $("input").on('input', function(){
        if($('input').val() != ''){
            $("button").removeAttr("disabled");
        }
        else{
            $("button").attr("disabled",'disabled');
        }
    });
    $("form").submit(function(x){
        x.preventDefault();
        $(".cta").removeClass("active");
        $('body').css({
            'background-color': $('input').val()
        });

    });
    
});

