// Defining the Function;
// function newRandomColor(e){
// Array of colors;
    let colors = ['blue', 'black', 'yellow', 'green', 'white', 
    'salmon', 'pink', 'grey', 'darkmagenta', 'aqua', 'brown', 'cyan', 'violet', 'chocolate',
    'indigo', 'orange', 'khaki', 'gold', 'darkpink', 'darkred', 'crimson', 'lime', 'ivory']
    
    function newRandomColor(){
        let newColor = parseInt(Math.random()*colors.length);
        return colors[newColor];
    }
    
    
    
    let button = document.querySelectorAll('.myButton');
    for(let i = 0; i < button.length; i++) {
        button[i].onclick = function(e){
            e.target.style.backgroundColor = newRandomColor();
        } 
 }
  
