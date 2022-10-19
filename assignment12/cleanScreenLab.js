$(()=>{

    //function that creates the timer for the circle to enlarge its dimension every 250ms.    
    $("#startButton").click(() => {
        
        const width = $("input[name='widthTF']").val();
        const growthAmount = $("input[name='growthAmountTF']").val();
        const speed = $("input[name='timeIntervalTF']").val();
        const numberOfCircles = $("input[name='numberCircleTF']").val();
        
        const bg_colors = ["red","blue","white","black","purple","gray","lightblue","pink","green","yellow"];
        
       for(let i=1; i<=numberOfCircles; i++){
            let current_bg_color =  bg_colors.shift();  
           
            let circle = $("<div>", {
                            "css":{
                                "width": parseInt(width)+"px",
                                "height": "50px",
                                "margin":"auto",
                                "border-radius": "50%",    
                                "background-color": current_bg_color,
                                "position":"absolute"                                
                            },
                            "click":function(){
                                clearInterval(timerId);
                                circle.hide();
                            },
                            "mouseover":function(){
                                // $(this).fadeTo("slow", 0.33);
                                $(this).fadeTo(0, 0.1).fadeTo(1000, 1);
                            },
                            "mouseleave":function(){
                                $(this).fade.stop().fadeTo('slow',1);
                            } 
                        });

            if(i%2 == 0){
                circle.css("left",(i*100)+"px",)
            }else{
                circle.css("right",(i*100)+"px",)
            }
            
            $("#container").prepend(circle);

            timerId = setInterval(() => {           
                circle
                .css("width", (index,oldElt) =>{
                return parseInt(oldElt) + parseInt(growthAmount) + "px";
                }).css("height", (index,oldElt) =>{
                    return parseInt(oldElt) + parseInt(growthAmount) + "px";
                });        
            },speed);
            bg_colors.push(current_bg_color);// add it back to the array.
       }//end of for-loop
    }); // end of start button   

});