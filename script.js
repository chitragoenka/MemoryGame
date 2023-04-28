
// Grabbing few elements
const section = document.querySelector("section");
const playerMovesCount = document.querySelector("#movesCount");

let playerMoves = 0;
let firstClick = 0;
let seconds = 00; 
let minutes = 00;
let appendMinutes = document.getElementById("minutes");
let appendSeconds = document.getElementById("seconds");

//Link text to moves
playerMovesCount.textContent = playerMoves;

let Interval 

//Generate the objects
const getData = () => [
    { imgSrc: "./images/banana.jpg", name: "banana" },
    { imgSrc: "./images/blackberry.jpg", name: "blackberry" },
    { imgSrc: "./images/coconut.jpg", name: "coconut" },
    { imgSrc: "./images/grapes.jpg", name: "grapes" },
    { imgSrc: "./images/greenapple.jpg", name: "greenapple" },
    { imgSrc: "./images/kiwi.jpg", name: "kiwi" },
    { imgSrc: "./images/mango.jpg", name: "mango" },
    { imgSrc: "./images/orange.jpg", name: "orange" },
    { imgSrc: "./images/peach.jpg", name: "peach" },
    { imgSrc: "./images/pear.jpg", name: "pear" },
    { imgSrc: "./images/pineapple.jpg", name: "pineapple" },
    { imgSrc: "./images/pomegranate.jpg", name: "pomegranate" },
    { imgSrc: "./images/raspberry.jpg", name: "raspberry" },
    { imgSrc: "./images/strawberry.jpg", name: "strawberry" },
    { imgSrc: "./images/watermelon.jpg", name: "watermelon" },
    { imgSrc: "./images/banana.jpg", name: "banana" },
    { imgSrc: "./images/blackberry.jpg", name: "blackberry" },
    { imgSrc: "./images/coconut.jpg", name: "coconut" },
    { imgSrc: "./images/grapes.jpg", name: "grapes" },
    { imgSrc: "./images/greenapple.jpg", name: "greenapple" },
    { imgSrc: "./images/kiwi.jpg", name: "kiwi" },
    { imgSrc: "./images/mango.jpg", name: "mango" },
    { imgSrc: "./images/orange.jpg", name: "orange" },
    { imgSrc: "./images/peach.jpg", name: "peach" },
    { imgSrc: "./images/pear.jpg", name: "pear" },
    { imgSrc: "./images/pineapple.jpg", name: "pineapple" },
    { imgSrc: "./images/pomegranate.jpg", name: "pomegranate" },
    { imgSrc: "./images/raspberry.jpg", name: "raspberry" },
    { imgSrc: "./images/strawberry.jpg", name: "strawberry" },
    { imgSrc: "./images/watermelon.jpg", name: "watermelon" },
   ];
 
   //Randomize
   const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
   };
    
 // card generator function

const cardGenerator = () => {
    const cardData = randomize();
    // Generate the HTML
    
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = "card";
        face.classList = "face";
        back.classList = "back";

        //Attach the info to the cards
        face.src = item.imgSrc;
       card.setAttribute("name", item.name);

        // Attach the cards to the section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

//Check cards
const checkCards = (e) => {

    if (firstClick == 0) {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 1000);
        firstClick = 1
    }
    

    console.log(e);
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard');
    console.log(flippedCards);
    

    //logic
    if (flippedCards.length === 2) {
        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.getElementsByClassName.pointerEvents = "none";
            });
        } else {
            console.log("wrong");
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
        }
        playerMoves++;
        playerMovesCount.textContent = playerMoves;
    }

    //Run a check to see if player won the game
    if(toggleCard.length === 30) {
        document.getElementsByClassName('modal-box')[0].style.visibility = 'visible';
        firstClick = 0;
        clearInterval(Interval);
    }
};

// Restart
 const restart = () => {

    document.getElementsByClassName('modal-box')[0].style.visibility = 'hidden';
    clearInterval(Interval);
    firstClick = 0;
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";
    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');

        //Randomize
       setTimeout(()=> {
        cards[index].style.pointerEvents = "all";
        faces[index].src = item.imgSrc;
        cards[index].setAttribute("name", item.name);
        section.style.pointerEvents = "all";
       }, 1000);
        
    });
    playerMoves = 0;
    playerMovesCount.textContent = playerMoves;
    seconds = 00;
    minutes = 00;
    appendSeconds.innerHTML = 00;
    appendMinutes.innerHTML = 00;
 };

cardGenerator(); 

// timer
function startTimer () {
    seconds++; 
    
    if(seconds <= 9){
      appendSeconds.innerHTML = "0" + seconds;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
      
    } 
    
    if (seconds > 59) {
      console.log("seconds");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
    }
    
    if (minutes > 9){
      appendMinutes.innerHTML = minutes;
    }
  
  }
