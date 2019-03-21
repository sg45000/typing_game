'use strict';

{
  const words = [
    'self',
    'mountain',
    'banana',
    'great',
    'peach',
    'speed',
    'divide',
    'height',
    'chicken'
  ];
  let word = 'click to start';
  let loc ;
  let score ;
  let miss ;
  const timeLimit = 10 * 1000;
  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');
  let startTime;
  let isPlaying = false;

  function showResult(){
    const accuracy = score + miss === 0 ? 0 : score/(score + miss) * 100;
    alert(`${score} letters, ${miss} misses ,${accuracy.toFixed(2)}% accuracy`);
  }

  function updateTimer(){
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft/1000).toFixed(2);

    const timeoutId = setTimeout(()=>{
      updateTimer();
    },10)

    if(timeLeft < 0){
      isPlaying= false;
      clearTimeout(timeoutId);
      timerLabel.textContent='0.00';
      setTimeout(()=>{
        showResult();
      },100)

      timerLabel.textContent = '0.00';
      target.textContent = 'click to replay'
    }
  }

  window.addEventListener('click',() => {
    if(isPlaying=== true){
      return;
    }
    isPlaying=true;
    score = 0;
    miss = 0;
    scoreLabel.textContent = score;
    missLabel.textContent = miss;
    nextWord();
    startTime = Date.now();
    updateTimer();
  })
  function nextWord(){
    word= words[Math.floor(Math.random()*words.length)];
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
    if(isPlaying!== true){
      return;
    }
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
