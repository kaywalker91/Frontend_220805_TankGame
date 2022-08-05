$(document).ready(function(){

    var dir; // 캐릭터가 바라 보는 방향

    $(document).keydown(function(event){
        //왼37 위38 오른39 아래40

        var herox = $("#hero").offset().left + 25;
        var heroy = $("#hero").offset().top + 25;

        if(event.keyCode == 38){

            if(heroy >= 50){
                dir = "t";
                $("#hero").css({
                    transform: "rotate(0deg)",
                    top: heroy-50+"px"
                });
            }

        }else if(event.keyCode == 40){

            if(heroy <= 900){

                dir = "b";
                $("#hero").css({
                    transform: "rotate(180deg)",
                    top: heroy+50+"px"
                });

            }

        }else if(event.keyCode == 37){
            
            if(herox >= 50){
                dir = "l";
                $("#hero").css({
                transform: "rotate(270deg)",
                left: herox-75+"px"
                });
            }
            
        }else if(event.keyCode == 39){

            if(herox <= 900){
                dir = "r";
                 $("#hero").css({
                    transform: "rotate(90deg)",
                    left: herox+50+"px"
                });
            }
        }else if(event.keyCode == 32){

            var deg;

            if(dir == "t"){
                deg=0
                
            }else if( dir == "b"){
                deg=180
                
            }else if( dir == "l"){
                deg=270
                
            }else if( dir == "r"){
                deg=90 
            }

            $("#stage").append("<img class='bullet' src='images/bullet_top.png' />");
            $(".bullet").css({
                left: herox+"px",
                top: heroy+"px",
                transform: "rotate(" +deg+ "deg)"
            });

            if(dir == "t"){
                
                $(".bullet").animate({top:"-=800px"}, 1000);
                $(this).remove();
            }else if( dir == "b"){
                
                $(".bullet").animate({top:"+=800px"}, 1000);
                $(this).remove();
            }else if( dir == "l"){
                
                $(".bullet").animate({left:"-=800px"}, 1000);
                $(this).remove();
            }else if( dir == "r"){
                
                $(".bullet").animate({left:"+=800px"}, 1000);
                $(this).remove();
            }

        }
    });

});
