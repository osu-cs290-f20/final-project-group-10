/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name: Jacob Bean
 * Email: Beanj@oregonstate.edu
 */

var cards = document.getElementsByClassName('post');
var deck = document.getElementById('deck');
var clickCount = 0;
var card1;
var card2;
var score = 0;

function sleep(ms){
 return new Promise( resolver => setTimeout(resolver, ms));
};
/* new buttons for Final project
***********************************************************************************/
var turnPostButton = document.getElementsByClassName("post-image-container");
for(var i = 0; i < turnPostButton.length; i++){
  turnPostButton[i].addEventListener('click', turnPost);
}

var person;

function turnPost(event){

  //console.log(event.target);
  // if there is trun-card class -> if card is not opened
  if(event.target.classList.contains('turn-card')){

    event.target.classList.toggle('turn-card');

    clickCount +=1;

  	if(clickCount == 1){
  		card1 = event.target.parentElement.parentElement.parentElement
  		//console.log(card1.attributes[1].textContent)
  	}
  	if(clickCount == 2){

  		card2 = event.target.parentElement.parentElement.parentElement
  		//console.log(card2.attributes[1].textContent)

  		if(card1.attributes[1].textContent == card2.attributes[1].textContent){
  			score = score +1;
  			console.log(score);

  		}

  		else{
  			for(var i = 0; i < turnPostButton.length; i++){
  				turnPostButton[i].removeEventListener('click', turnPost);
  			}
  			sleep(2000).then(()=>{
  				card1.children[0].children[0].children[0].classList.add('turn-card')
  				card2.children[0].children[0].children[0].classList.add('turn-card')
  				for(var i = 0; i < turnPostButton.length; i++){
  					turnPostButton[i].addEventListener('click', turnPost);
  				}
  			})
  		}

  		clickCount = 0;

  	}

  	if(score == 8){
      sleep(2000).then(()=>{
			console.log("you win!");

			document.getElementById("you-win").children[0].classList.remove("hidden")
			person = prompt("Please enter your name to be added to winner's list", "Your name")
			console.log("== person", person);
			createWinner(person, totalSeconds);

      })
  	}
  }

}
function createWinner(name, score){
	var winnerContent = {
		name: name,
		score: score
	};
	var winnerHtml = Handlebars.templates.winner(winnerContent);
	console.log("== winnerHTML", winnerHtml);
	var winnerContainer = document.querySelector(".names");
	winnerContainer.insertAdjacentHTML('beforeend', winnerHtml);

}


// timer
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
  ++totalSeconds;
  secondsLabel.innerHTML = pad(totalSeconds % 60);
  minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
}
function resetTimer(){
	totalSeconds = 0;
}

function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}

// this is going to get turned into the GAME GO BUTTON, it will shuffle the divs
function startGame() {
  score = 0;
  clickCount = 0;
	var currentIndex = cards.length;
	var tempvalue;
	var randomIndex;
	document.getElementById("you-win").children[0].classList.add("hidden")

	while(0 !== currentIndex){
		randomIndex = Math.floor(Math.random()*currentIndex);
		currentIndex -=1;

		tempvalue = cards[currentIndex];
		cards[currentIndex] = cards[randomIndex];
		cards[randomIndex] = tempvalue;
		cards[randomIndex].children[0].children[0].children[0].classList.add('turn-card')
		deck.appendChild(cards[randomIndex]);
	}
}
//we need a counter, and after 2 clicks if the match is wrong flip back over, if the back is right, dont flip and add to score

document.getElementById("game-start-button").addEventListener("click", startGame)
document.getElementById("game-start-button").addEventListener("click", resetTimer)
