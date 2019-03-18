'use strict';

{
  const words = [
    'self',
    'mountain',
    'banana',
    'great',
    'peach',
    'speed',
    'divide'
  ];
  let word = 'apple';
  let loc = 0;
  let score = 0;
  let miss = 0;
  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  target.textContent = word;

  function nextWord(){
    word= words[Math.floor(Math.random()*word.length)];
    target.textContent = word;
    loc = 0;
  }

  function updateTarget(){
    let placeholder = '';
    for(let i = 0;i < loc; i++){
      placeholder += '_';
    }
    target.textContent = placeholder + word.substring(loc);
  }

  window.addEventListener('keyup', e =>{
    if(e.key === word[loc]){
      loc ++;
      score++;
      scoreLabel.textContent = score;
      updateTarget();
      if(word.length===loc){
        nextWord();
      }
    }else{
      miss++;
      missLabel.textContent = miss;
    }
  });
}
