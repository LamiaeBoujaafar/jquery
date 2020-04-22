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

});
