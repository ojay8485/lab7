/*global $*/

$(function(){
    
    var visited = [];
    var t = "false";
    var s = "";
        
    $("#lookup").click(function(){
        
        if($('input[name="all"]').is(':checked')){
             t = "true";
        }else{
             s = $('#country').val();
             if(t === "true" || visited.indexOf(s)>=0){
                 s="";
             }
        }
        
        $.ajax({
           url:'world.php',
           method:'GET',
           data:{country:s,all:t},
           success:function(data){
               $('#result').append(data);
               visited.push(s);
               $('#country').val("");
           },
           error:function(){
                alert("Something went wrong");
           }
        });
    });


});