document.addEventListener('DOMContentLoaded',() =>{
    //card options
    const cardsArray = [
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        },
        {
            name: "cheeseburger",
            img: "src/images/cheeseburger.png"
        },
        {
            name: "fries",
            img: "src/images/fries.png"
        },
        {
            name: "hotdog",
            img: "src/images/hotdog.png"
        },
        {
            name: "ice-cream",
            img: "src/images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "src/images/milkshake.png"
        },
        {
            name: "pizza",
            img: "src/images/pizza.png"
        }
    ];

    cardsArray.sort(() => 0.5 - Math.random());
    console.log(cardsArray);
    
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardChosen = [];
    let cardChosenIds = [];
    let cardsWon = [];
    function createBoard(){
        for(let i=0; i < cardsArray.length; i++){
            const card = document.createElement('img');
            card.setAttribute('src', 'src/images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);


            grid.appendChild(card);

        }
    }
    
    function flipCard(){
        let cardId = this.getAttribute('data-id');
        cardChosen.push(cardsArray[cardId].name);
        cardChosenIds.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        if(cardChosen.length === 2){
            setTimeout(checkForMatch, 500);
        }
    }
    function checkForMatch(){
        const cards = document.querySelectorAll('img');
        const optOneId = cardChosenIds[0];
        const optTwoId = cardChosenIds[1];
        

        if(optOneId == optTwoId){
            alert('You clicked the same image!')
            cards[optOneId].setAttribute('src', 'src/images/blank.png');
            cards[optTwoId].setAttribute('src', 'src/images/blank.png');
        }else if(cardChosen[0] == cardChosen[1]){
            alert('You have found a match!');
            cards[optOneId].setAttribute('src', 'src/images/white.png');
            cards[optTwoId].setAttribute('src', 'src/images/white.png');
            cards[optOneId].removeEventListener('click',flipCard);
            cards[optTwoId].removeEventListener('click',flipCard);
            cardsWon.push(cardChosen);
        }else{
            cards[optOneId].setAttribute('src', 'src/images/blank.png');
            cards[optTwoId].setAttribute('src', 'src/images/blank.png');
            alert('Sorry, Try Again!')
        }
        cardChosen = [];
        cardChosenIds = [];
        resultDisplay.textContent = cardsWon.length;
        if(cardsWon.length == cardsArray.length / 2){
            resultDisplay.textContent = 'Congratulations! You have won!';    
        }

    }

    createBoard();
})