// Hammad's Walkthrough

class Card {
    constructor(rank, suit, actualCard) {
        this.rank = rank;
        this.suit = suit;
        this.actualCard = [];
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


        // this.cards.push(new Card(rank, suit)


        // for (i = 0; i < 52; i++) {
        //     if (rank > 1 && rank < 11) {
        //         let actualCard = rank;
        //     } else if (rank = 11) {
        //         let actualCard = "jack"
        //     } else if (rank = 12) {
        //         let actualCard = "queen"
        //     } else if (rank = 13) {
        //         let actualCard = "king"
        //     } else {let actualCard = "ace"}
        //         }

                this.cards.push(new Card(rank, suit))
                }
                // for (i = 0; i < 52; i++) {
                //     if (Card.rank > 1 && Card.rank < 11) {
                //         let this.cards.actualCard = Card.rank;
                //     } else if (Card.rank = 11) {
                //         let Card.actualCard = "jack"
                //     } else if (rank = 12) {
                //         let Card.actualCard = "queen"
                //     } else if (rank = 13) {
                //         let Card.actualCard = "king"
                //     } else {let Card.actualCard = "ace"}
                //         }
                        
            }
        }
    } 
    const deck = new Deck ()

    console.log(deck.cards[2].suit)
    
function assignCards() {
    for (i = 0; i < deck.cards.length; i++) {
    if (deck.cards.rank > 1 && deck.cards.rank < 11) {
        deck.cards.actualCard = deck.cards.rank;
    } else if (deck.cards.rank == 11) {
        deck.cards.actualCard == "jack"
    } else if (deck.cards.rank == 12) {
        deck.cards.actualCard == "queen"
    } else if (deck.cards.rank == 13) {
        deck.cards.actualCard == "king"
    } else {deck.cards.actualCard == "ace"}
}
}
assignCards();
console.log(deck.cards.actualCard)

 




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




playWar()
function playWar() {
    let card1 = player1.shift();
    console.log(card1);
    // console.log(player1);
    let card2 = player2.shift();
    console.log(card2);
    // console.log(player2);
    if (card1.rank > card2.rank) {
        console.log("Player one wins!");
        player1.push(card1, card2)
        console.log(player1);
        console.log(player2);
        return;
    } else if (card1.rank < card2.rank) {
        console.log("Player two wins!")
        player2.push(card1, card2)
        console.log(player1);
        console.log(player2);
        return;    
    } else {console.log("WAR!")

    function war() {
        let card3 = player1.shift();
        console.log(card3);
        console.log(player1);
        let card4 = player2.shift();
        console.log(card4);
        console.log(player2);
        if (card3.rank > card4.rank) {
            console.log("Player one wins!");
            player1.push(card1, card2, card3, card4)
            console.log(player1);
            console.log(player2);
            return;
        } else if (card3.rank < card4.rank) {
            console.log("Player two wins!")
            player2.push(card1, card2, card3, card4)
            console.log(player1);
            console.log(player2);
            return;    
        } else {console.log("Tie!")
    }
    }
}
}
playWar()


