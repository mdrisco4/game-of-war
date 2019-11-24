// Hammad's Walkthrough

class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        this.cards = []
        
        let ranks = [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14
        ]

        let suits = [
            "spade",
            "heart",
            "diamond",
            "club"
        ]

        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < suits.length; j++) {

                let rank = ranks[i]
                let suit = suits[j]

                this.cards.push(new Card(rank, suit))
                }
            }
        }
    } 
    const deck = new Deck ()







function shuffle(freshDeck) {
    var changingDeck = freshDeck.length, temp, index;

// While there are elements in the array
    while (changingDeck > 0) {
// Pick a random index
        index = Math.floor(Math.random() * changingDeck);
// Decrease ctr by 1
        changingDeck--;
// And swap the last element with it
        temp = freshDeck[changingDeck];
        freshDeck[changingDeck] = freshDeck[index];
        freshDeck[index] = temp;
    }
    return freshDeck;
}
myArray = deck.cards;
shuffle(myArray);



player1 = myArray.splice(26,52);
player2 = myArray.splice(0,26);
console.log(player1);
console.log(player2);


function war() {
    let card3 = player1.shift();
    console.log(card1);
    console.log(player1);
    let card4 = player2.shift();
    console.log(card2);
    console.log(player2);
    if (card3.rank > card4.rank) {
        console.log("Player one wins!");
        player1.push(card1, card2, card3, card4)
        console.log(player1);
        console.log(player2)
    } else if (card3.rank < card4.rank) {
        console.log("Player two wins!")
        player2.push(card1, card2, card3, card4)
        console.log(player1);
        console.log(player2);    
    } else {console.log("Tie!")
}
}



playWar()
function playWar() {
    let card1 = player1.shift();
    console.log(card1);
    console.log(player1);
    let card2 = player2.shift();
    console.log(card2);
    console.log(player2);
    if (card1.rank > card2.rank) {
        console.log("Player one wins!");
        player1.push(card1, card2)
        console.log(player1);
        console.log(player2)
    } else if (card1.rank < card2.rank) {
        console.log("Player two wins!")
        player2.push(card1, card2)
        console.log(player1);
        console.log(player2);    
    } else {console.log("Tie!")
    war()}
}
playWar()


