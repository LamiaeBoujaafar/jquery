$(document).ready(function()
{
    
    $("#title").click(function()
        {$(".par2").toggle(1000,function(){
            $(".par3").toggle(1000); 
        });
        });
    $(".par1").mouseenter(function(){$(".par5").hide(); });
    $(".par1").mouseleave(function(){$(".par5").show();});
    $(".par2").hover(function(){
           $(".par5").hide();
    },function(){$(".par5").show();});
    $(".par5").on({
        mouseenter : function(){$(".par3").hide();},
        mouseleave : function(){$(".par3").show();}
    });
    $("#button").click(function(){
        $("#div").animate({left:'600px',height : "100px",width : "100px",opacity : 0.2},3000,function(){
             $("#div").slideUp(3000).slideDown(3000);
        });
         $("#stop").click(function(){
             $("#div").stop(true);
         })
        
        
    })
    $("#button1").click(function(){
        $("#p1").append("hello");//remove ,empty,prepend,after,before
        var x = $("#p1").attr("style");
        console.log(x);
    })

});
