let intervalId;
function getRandomColor() {
const hex = '0123456789ABCDEF';
let color = '#';
for(let i = 0;i<6;i++){
    color+=hex[Math.floor(Math.random()*16)];
}
return color;
}

const changeColor = function(clr){
    document.querySelector('body').style.backgroundColor = clr;
}

document.querySelector('#start').addEventListener('click',function(){
    if(!intervalId){
        intervalId = setInterval(()=>{
            changeColor(getRandomColor())
        },1000,)
    }
})
document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(intervalId);
    intervalId = null;
})