const clk = document.getElementById('clock');
setInterval(function(){
    let date = new Date();
    clk.innerHTML = `<span>${date.toLocaleTimeString()}</span>`;    
},1000)

setTimeout(function(){
    console.log('I am a Python Programmer.');
},10000)