// JavaScript Practice //

// Loop calculation //
const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.getElementById('clearBtn');
const displayAnswer = document.getElementById('displayAnswer');


calculateBtn.onclick = function(){
  
  for(let i = 1; i <= 11; i++){
    
    const newPara = document.createElement('p');
    const calculation = i + " x " + i + " = " + i * i ;

    if(i > 10){
      newPara.textContent = 'Finished!';
    
    }else{
      newPara.textContent = calculation;
    }
    displayAnswer.appendChild(newPara);
  }
}


clearBtn1.onclick = function(){
  displayAnswer.textContent = "";
}


// Countdown Button //
const countdownBtn = document.getElementById('countdownBtn');
const display = document.getElementById('display');


countdownBtn.onclick = function(){  

  for(let i = 10; i >= 0; i--){
    
    const answer = document.createElement('p');
      
    if(i === 10){
      answer.textContent = 'Countdown ' + i;
      
    }else if(i === 0){
      answer.textContent = 'Blast Off!';
      
    }else{
      answer.textContent = i;
    }

    display.appendChild(answer);
  }
}


clearBtn2.onclick = function(){
  display.textContent = "";
}


// Guest List //
const guestListBtn = document.getElementById('guestListBtn');
const clearBtn3 = document.getElementById('clearBtn3');
const admitted = document.getElementById('admitted');
const refused = document.getElementById('refused');

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

guestListBtn.onclick = function(){

  for(const person of people){

    if(person === 'Phil' || person === 'Lola'){
      refused.textContent += person + ', ';
    
    }else{
      admitted.textContent += `${person}, `;
    }
  }

  refused.textContent = refused.textContent.slice(0, -2) + '.';

  admitted.textContent = admitted.textContent.slice(0, -2) + '.';
}


clearBtn3.onclick = function(){
  admitted.textContent = 'Admit: ';
  refused.textContent = 'Refuse: ';
}


// Repeat Until the input is correct //
const inputBtn = document.getElementById('inputBtn');

inputBtn.onclick = function(){

  let userInput;
  do {
    userInput = prompt('What number do you choose?');

    if(userInput >= 100 && userInput){
      alert('Good Job!');
    
    }else{
      alert('That number was NOT greater than 100.  Try again!');
    }
    
  }while(userInput <= 100 && userInput);
}


// Output prime numbers //
const usersInput = document.getElementById('usersInput');
const showPrimesBtn = document.getElementById('showPrimesBtn');
const clearBtn4 = document.getElementById('clearBtn4');
const primeResults = document.getElementById('primeResults');

let isPrime = '';

showPrimesBtn.onclick = function(){

  for(let i = 2; i <= usersInput.value; i++){

    isPrime = 'yes';
    
    for(let j = 2; j < i; j++){

      if(i % j === 0){ 
        isPrime = 'no';
        break;     
      }
    }
    if(isPrime === 'yes'){      
    primeResults.textContent += i + ', ';
    }
  }
  primeResults.textContent = primeResults.textContent.slice(0, -2);
}

clearBtn4.onclick = function(){
  primeResults.textContent = ''
  usersInput.value = '';
}