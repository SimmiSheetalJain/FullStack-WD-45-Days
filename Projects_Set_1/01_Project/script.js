const btns = document.querySelectorAll('.button');
const bdy = document.querySelector('body');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (clk){
    console.log(clk);
    console.log(clk.target);

    if (clk.target.id === 'grey'){
      bdy.style.backgroundColor = clk.target.id;
    }
    if (clk.target.id === 'white'){
      bdy.style.backgroundColor = clk.target.id;
    }
    if (clk.target.id === 'blue'){
      bdy.style.backgroundColor = clk.target.id;
    }
    if (clk.target.id === 'yellow'){
      bdy.style.backgroundColor = clk.target.id;
    }
    if (clk.target.id === 'pink'){
      bdy.style.backgroundColor = clk.target.id;
    }
  });
});
