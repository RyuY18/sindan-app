
const quiz = [
  {
    question: 'ゲーム市場、最も売れたゲーム機は次の打ちどれ？',
    answer: [
       'スーパファミコン',
      'プレイステーション２',
      'ニンテンドースイッチ',
      'ニンテンドーDS'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answer: [
       'MOTHER2',
      'スーパーマリオブラザーズ３',
      'スーパードンキーコング',
      '星のカービィ'
    ],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーIVの主人公の名前は？',
    answer: [
       'フリオニール', 
      'クラウド',
      'ティーダ',
      'セシル'
    ],
    correct:'セシル'
  }
];
const greet = document.getElementById('js-question');
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
const $result = document.getElementById('js-result');

const $rmButton = document.getElementsByClassName('btn-primary');

const $rmRestart = document.getElementById('Restart');

const $twButton = document.getElementById('twBt');

const shareLog = `あなたの点数は${score}点です！すごい！！`
const result = () => {
  if(score === quizLength) {
    $twButton.setAttribute('href',"https://twitter.com/intent/tweet?" + [
"text=" + encodeURIComponent(shareLog),
"url=" + encodeURIComponent('https://www.youtube.com/watch?v=tU6ToAYvz1g'),
"hashtags=" + encodeURIComponent('#UNK')
].join("&"));
  }else{
    console.log('unk');
  }
}

const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0; 
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answer[buttonIndex];
    buttonIndex++;
  }
  
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else{
    window.alert('不正解！');
  }
  quizIndex++;
  
  if(quizIndex < quizLength){
    setupQuiz();
  } else {
    for(let i = 0; i < $rmButton.length;i++){
      $rmButton[i].classList.add("rmBt");
    }
    $rmRestart.classList.remove('rmBt');
    greet.innerHTML = `あなたの点数は${score}です`
    result();
  }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
};


// $button[0].addEventListener('click', (e) => {
//   clickHandler();
// $button[1].addEventListener('click', (e) => {
//   clickHandler();
// });
// $button[2].addEventListener('click', (e) => {
//   clickHandler();
// });
// $button[3].addEventListener('click', (e) => {
//   clickHandler();
// });
