$(()=>{    
    let state;
    let speed;

    $("#start").click(goAnimate);//executes when start button is clicked    
    $("#stop").click(() =>{//executes when stop button is clicked
       state = null; // set the value of go to null, 
       $("#stop").prop("disabled",true);  
       $('#text-area').prop("disabled",false); // text area is enabled when animation stops.     
       $('#animation').prop("disabled",false); // animation combobox should be enabled when animation stops. Modification is allowed after 'Stop' button is clicked.
       $('#start').prop("disabled",false);//"Start" button need to be enabled after animation stops.
    });

    $("#turbo").click(() =>{//executes when turbo button is clicked                
        speed = $("#turbo").is(":checked")? 50 : 250; 
        state = null;
        setTimeout(()=>{
            goAnimate();
        },100);
     });
    
    $('#animation').change(animationFrames);//executes when the animation combobox is changed    
    $("#fontsize").change(fontSize);//executes when the fentsize combobox is changed

    // function goAnimate() animates the animation frames on the text area by the given speed.
    function goAnimate(){ 
        $('#text-area').prop("disabled",true); // text area is disabled when animation starts.Modification is not allowed after 'Start' button is clicked.
        $('#animation').prop("disabled",true); // animation combobox should be disabled when animation starts. Modification is not allowed after 'Start' button is clicked.
        $('#start').prop("disabled",true);//"Start" button need to be disabled after animation starts.

        state = "Go"; 
        speed = (typeof speed === "undefined")? 250 : speed;        
        $("#stop").prop( "disabled", false );  // button 'Stop' will be enabled now.                  
        let allFrames = $('#text-area').val();    

        if(allFrames === null || allFrames == ""){
            $('#text-area').val("\n\n\n**GAME WARNING**: Either there in no data in this text area OR It doesn't meet format of the animation."
            +"\n It needs to have '=====' in it."
            +"\n\n OR you need to choose your animation from the Animation Combobox below.");
            return false;
        }
        
        let chunckFrames = allFrames.split("=====\n");
                
        let interval = setInterval(() => {  
            let currValue = chunckFrames.shift();                    
            $("#text-area").val(currValue);
            chunckFrames.push(currValue);
                       
            speed = $("#turbo").is(":checked")? 50 : 250; 
            if(!state){// state will be evaluated to 'true' if it has any meaningful value.
                clearInterval(interval);
                animationFrames();
            }
        }, speed);
    }// end to goAnimate function.

    // function animation() fetches the animation frames from the animation combo.
    function animationFrames(){
        let animationType = $('#animation').val();            
        switch(animationType.toString().trim()){
            case 'Blank':
                $('#text-area').val(ANIMATIONS["Blank"]);
                break;
            case 'Exercise':
                $('#text-area').val(ANIMATIONS["Exercise"]);
                break;
            case 'Juggler':
                $('#text-area').val(ANIMATIONS["Juggler"]);
                break;
            case 'Bike':
                $('#text-area').val(ANIMATIONS["Bike"]);
                break;
            case 'Dive':
                $('#text-area').val(ANIMATIONS["Dive"]);
                break;
            default:
                $('#text-area').val(ANIMATIONS["YEA, that was fun!"]);
        }// end of switch block
    }// end of animation function.

    // function fontSize() fetches the font-sizes frames from the fontsize combo.
     function fontSize(){
        let fontType = $("#fontsize").val();
        switch(fontType){
            case 'Tiny':
                $("#text-area").css("font-size", "7pt");
                break;
            case 'Small':
                $("#text-area").css("font-size", "10pt");
                break;
            case 'Medium':
                $("#text-area").css("font-size", "12pt");
                break;
            case 'Large':
                $("#text-area").css("font-size", "16pt");
                break;
            case 'Extra Large':
                $("#text-area").css("font-size", "24pt");
                break;
            case 'XXL':
                $("#text-area").css("font-size", "32pt");
                break;
            default:                
                $("#text-area").css("font-size", "12pt");// Initially Medium size is the default.
        }// end of switch block
    }// end of fontSize function
});