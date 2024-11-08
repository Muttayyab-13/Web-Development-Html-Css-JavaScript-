var numberOfButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfButtons;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function ()
{
var innerWord=this.innerHTML;
makesound(innerWord);
buttomAnimation(innerWord);

}
)
}

document.addEventListener("keydown",function(event){
        makesound(event.key);
        buttomAnimation(event.key);
});

function makesound(key){
switch (key) {
        case "w":
            
    
            var audio1=new Audio("sounds/snare.mp3");
            audio1.play();
            break; 
            
            
        case "a":  
            
                var audio1=new Audio("sounds/kick-bass.mp3");
                audio1.play(); 
                break;      
              
    
        case "s":
                
        
                var audio1=new Audio("sounds/tom-1.mp3");
                audio1.play();
                break; 
                
                
        case "d":  
                
                var audio1=new Audio("sounds/tom-2.mp3");
                audio1.play();
                break;       
                  
    
        case "j":
                
            
                var audio1=new Audio("sounds/tom-3.mp3");
                audio1.play();
                break; 
                                
        case "k":  
                
                var audio1=new Audio("sounds/tom-4.mp3");
                audio1.play(); 
                break;     
                
    
        case "l":  
                
                var audio1=new Audio("sounds/tom-4.mp3");
                audio1.play();      
                
                break;
            
    
        default:
            break;
}
    }
     
    function buttomAnimation(currentKey)
    {
        var activeKey=document.querySelector("."+currentKey);
        
        activeKey.classList.add("pressed");
        
        setTimeout(function(){activeKey.classList.remove("pressed");},100);
    }

