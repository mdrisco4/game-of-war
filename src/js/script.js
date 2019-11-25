class Card {
    constructor(rank, suit, value) {
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = []
        
        let ranks = [
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14"
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
                let value = i

                this.cards.push(new Card(rank, suit, value))
                }
            }
        }
    } 
const deck = new Deck ()
console.log(deck)



function shuffle(freshDeck) {
    var changingDeck = freshDeck.length, temp, index;
    while (changingDeck > 0) {
        index = Math.floor(Math.random() * changingDeck);
        changingDeck--;

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

console.log("Let's Play WAR!!")
function playWar() {
    let card1 = player1.shift();
    console.log("Player one plays the" + " " + card1.value + " " + "of" + " " + card1.suit + "s")
    // console.log(card1);
    // console.log(player1);
    let card2 = player2.shift();
    console.log("Player two plays the" + " " + card2.value + " " + "of" + " " + card2.suit + "s")
    // console.log(card2);
    // console.log(player2);
    if  (player1 == 0 || player2 == 0) {
        console.log("Game over!");
        console.log("Game over!");
        console.log("Game over!");
        console.log("Game over!")
    } else if (card1.value > card2.value) {
        console.log("Player one wins!");
        player1.push(card1, card2);
        // console.log(player1);
        console.log("Player 1 has" + " " + player1.length + " " + "cards")
        console.log("Player 2 has" + " " + player2.length + " " + "cards")
        // console.log(player2);
        return;
    } else if (card1.value < card2.value) {
        console.log("Player two wins!");
        player2.push(card1, card2);
        // console.log(player1);
        console.log("Player 1 has" + " " + player1.length + " " + "cards")
        console.log("Player 2 has" + " " + player2.length + " " + "cards")
        // console.log(player2);
        return;    
    } else {console.log("WAR!");
    war();

    function war() {
        let card3 = player1.shift();
        let card4 = player1.shift();
        let card5 = player1.shift();
        let card6 = player1.shift();
        // console.log(player1);
        // console.log(card6);
        console.log("Player one lays three cards facedown and")
        console.log("plays the" + " " + card6.value + " " + "of" + " " + card6.suit + "s")
        let card7 = player2.shift();
        let card8 = player2.shift();
        let card9 = player2.shift();
        let card10 = player2.shift();
        // console.log(player2);
        // console.log(card10);
        console.log("Player two lays three cards facedown and")
        console.log("plays the" + " " + card10.value + " " + "of" + " " + card10.suit + "s")
        if  (player1 == 0 || player2 == 0) {
            // (card3.value == undefined || card4.value == undefined || card5.value == undefined || card6.value == undefined || card7.value == undefined || card8.value == undefined || card9.value == undefined || card10.value == undefined) {
            console.log("Game over!");
            console.log("Game over!");
            console.log("Game over!");
            console.log("Game over!");
        } else if (card6.value > card10.value) {
            console.log("Player one wins!");
            player1.push(card1, card2, card3, card4, card5 ,card6 ,card7 ,card8 ,card9 ,card10);
            // console.log(player1);
            console.log("Player 1 has" + " " + player1.length + " " + "cards")
            console.log("Player 2 has" + " " + player2.length + " " + "cards")
            // console.log(player2);
            return;
        } else if (card6.value < card10.value) {
            player1.push(card1, card2, card3, card4, card5 ,card6 ,card7 ,card8 ,card9 ,card10);
            // console.log(player1);
            console.log("Player 1 has" + " " + player1.length + " " + "cards")
            console.log("Player 2 has" + " " + player2.length + " " + "cards")
            // console.log(player2);
            return;    
        } else {
            player1.push(card1, card2, card3, card4, card5);
            player2.push(card6, card7, card8, card9, card10);
            console.log("Tie!");
            }
        }
    }
}



