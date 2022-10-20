$(() => { 
    const MAZE = (function(){        
        let wallTouched = false;
        let game = "";
        const defaultBoundaryBGColor = $(".boundary").css("background-color"); 
      
        const start = function() {
            $(".boundary").css("background-color",defaultBoundaryBGColor);
            $(".status").html("");
            wallTouched = false;            
        };  
        const gameStarted = function() {
            game = game ? "" : "Started";
        };   
        const setBGToRed = function() {
            $(this).css("background-color","red");
            $(".status").css("color","red");
            $(".status").html("you lost :[ leave the boundry and start-over ");

            wallTouched = true;
        };   
        const unsetBG=function(){
            $(this).css("background-color","#eeeeee");
            $(".status").html("");
            wallTouched=false;
        } 
        const alertMessage = () => {
           // $(".status").html("you lost");
        };    
        const end = () => {
            if(!game){
                alert("You are coming from wrong direction! Please enter via [S] gate!");
            }else{
                //wallTouched ? $(".status").html("you lost"):alert("You win! :]");
                if(wallTouched== false){
                    $(".status").html(" Congratulations: You win!!! :]");
                    $(".status").css("color","green");
                    game = "";
                }
                
            }  
        };
        return{
            start: start,
            gameStarted:gameStarted,
            setBGToRed: setBGToRed,
            alertMessage: alertMessage,
            unsetBG:unsetBG,
            end: end
        }
    })();
    $("#start").click(MAZE.start);
    $("#start").mouseenter(MAZE.gameStarted);    
    $(".boundary").mouseover(MAZE.setBGToRed);
    $(".boundary").mouseleave(MAZE.unsetBG);
    
   // $(".boundary").mouseleave(MAZE.alertMessage);
    $("#end").mouseover(MAZE.end);    
});