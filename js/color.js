// Select Effect

let effect = document.getElementById('filter-effect');

let blueBtn = document.getElementById('blue');
let greenBtn = document.getElementById('green');
let orangeBtn = document.getElementById('orange');
let purpleBtn = document.getElementById('purple');
let redBtn = document.getElementById('red');

blueBtn.addEventListener('click', function(){
      effect.src = "img/filter-effect/blue.png";
});

greenBtn.addEventListener('click', function(){
      effect.src = "img/filter-effect/green.png";
});

orangeBtn.addEventListener('click', function(){
      effect.src = "img/filter-effect/orange.png";
});

purpleBtn.addEventListener('click', function(){
      effect.src = "img/filter-effect/purple.png";
});

redBtn.addEventListener('click', function(){
      effect.src = "img/filter-effect/red.png";
});
