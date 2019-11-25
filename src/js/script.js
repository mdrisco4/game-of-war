class Card {
    constructor(rank, suit, actualCard) {
        this.rank = rank;
        this.suit = suit;
        this.actualCard = actualCard;
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

// HAVE NOT FOUND A WAY TO LOOP THIS THAT WORKS YET
deck.cards[0].actualCard = "2";
deck.cards[1].actualCard = "2";
deck.cards[2].actualCard = "2";
deck.cards[3].actualCard = "2";
deck.cards[4].actualCard = "3";
deck.cards[5].actualCard = "3";
deck.cards[6].actualCard = "3";
deck.cards[7].actualCard = "3";
deck.cards[8].actualCard = "4";
deck.cards[9].actualCard = "4";
deck.cards[10].actualCard = "4";
deck.cards[11].actualCard = "4";
deck.cards[12].actualCard = "5";
deck.cards[13].actualCard = "5";
deck.cards[14].actualCard = "5";
deck.cards[15].actualCard = "5";
deck.cards[16].actualCard = "6";
deck.cards[17].actualCard = "6";
deck.cards[18].actualCard = "6";
deck.cards[19].actualCard = "6";
deck.cards[20].actualCard = "7";
deck.cards[21].actualCard = "7";
deck.cards[22].actualCard = "7";
deck.cards[23].actualCard = "7";
deck.cards[24].actualCard = "8";
deck.cards[25].actualCard = "8";
deck.cards[26].actualCard = "8";
deck.cards[27].actualCard = "8";
deck.cards[28].actualCard = "9";
deck.cards[29].actualCard = "9";
deck.cards[30].actualCard = "9";
deck.cards[31].actualCard = "9";
deck.cards[32].actualCard = "10";
deck.cards[33].actualCard = "10";
deck.cards[34].actualCard = "10";
deck.cards[35].actualCard = "10";
deck.cards[36].actualCard = "Jack";
deck.cards[37].actualCard = "Jack";
deck.cards[38].actualCard = "Jack";
deck.cards[39].actualCard = "Jack";
deck.cards[40].actualCard = "queen";
deck.cards[41].actualCard = "queen";
deck.cards[42].actualCard = "queen";
deck.cards[43].actualCard = "queen";
deck.cards[44].actualCard = "King";
deck.cards[45].actualCard = "King";
deck.cards[46].actualCard = "King";
deck.cards[47].actualCard = "King";
deck.cards[48].actualCard = "Ace";
deck.cards[49].actualCard = "Ace";
deck.cards[50].actualCard = "Ace";
deck.cards[51].actualCard = "Ace";

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
    console.log("Player one plays the" + " " + card1.actualCard + " " + "of" + " " + card1.suit + "s")
    // console.log(card1);
    // console.log(player1);
    let card2 = player2.shift();
    console.log("Player two plays the" + " " + card2.actualCard + " " + "of" + " " + card2.suit + "s")
    // console.log(card2);
    // console.log(player2);
    if  (card1.rank == undefined || card2.rank == undefined) {
        console.log("Game over!");
    } else if (card1.rank > card2.rank) {
        console.log("Player one wins!");
        player1.push(card1, card2);
        // console.log(player1);
        console.log("Player 1 has" + " " + player1.length + " " + "cards")
        console.log("Player 2 has" + " " + player2.length + " " + "cards")
        // console.log(player2);
        return;
    } else if (card1.rank < card2.rank) {
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
        console.log("plays the" + " " + card6.actualCard + " " + "of" + " " + card6.suit + "s")
        let card7 = player2.shift();
        let card8 = player2.shift();
        let card9 = player2.shift();
        let card10 = player2.shift();
        // console.log(player2);
        // console.log(card10);
        console.log("Player two lays three cards facedown and")
        console.log("plays the" + " " + card10.actualCard + " " + "of" + " " + card10.suit + "s")
        if  (card3.rank == undefined || card4.rank == undefined || card5.rank == undefined || card6.rank == undefined || card7.rank == undefined || card8.rank == undefined || card9.rank == undefined || card10.rank == undefined) {
            console.log("Game over!");
        } else if (card6.rank > card10.rank) {
            console.log("Player one wins!");
            player1.push(card1, card2, card3, card4, card5 ,card6 ,card7 ,card8 ,card9 ,card10);
            // console.log(player1);
            console.log("Player 1 has" + " " + player1.length + " " + "cards")
            console.log("Player 2 has" + " " + player2.length + " " + "cards")
            // console.log(player2);
            return;
        } else if (card6.rank < card10.rank) {
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



