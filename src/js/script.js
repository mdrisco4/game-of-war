//Model to create class for the cards below 
/*class Deck {
    constructor(card) {
        this.deckOfCards[] = card
    }
    shuffleDeck() {
        let shuffledCard = [Math.floor((Math.random()*deckOfCards.length))];
        deckOfCards.push[shuffledCard];
        newDeck = this.deckOfCards -
    }
}
class Card {
    constructor(rank, suit, cardIDnum) {
        this.rank = rank;
        this.suit = suit;
        this.cardIDnum = cardIDnum
    }
    draw() {
        let card = [Math.floor((Math.random()*deckOfCards.length))];
        drawnCard = card
    }
}*/


/*
const deckOfCards = [
    ace_of_spades = {
        rank: 14,
        suit: "spade",
        cardIDnum: 1
    },
    ace_of_hearts = {
        rank: 14,
        suit: "heart",
        cardIDnum: 2
    },
    ace_of_diamonds = {
        rank: 14,
        suit: "diamond",
        cardIDnum: 3
    },
    ace_of_clubs = {
        rank: 14,
        suit: "club",
        cardIDnum: 4
    },
    king_of_spades = {
        rank: 13,
        suit: "spade",
        cardIDnum: 5
    },
    king_of_hearts = {
        rank: 13,
        suit: "heart",
        cardIDnum: 6
    },
    king_of_diamonds = {
        rank: 13,
        suit: "diamond",
        cardIDnum: 7
    },
    king_of_clubs = {
        rank: 13,
        suit: "club",
        cardIDnum: 8
    },
    queen_of_spades = {
        rank: 12,
        suit: "spade",
        cardIDnum: 9
    },
    queen_of_hearts = {
        rank: 12,
        suit: "heart",
        cardIDnum: 10
    },
    queen_of_diamonds = {
        rank: 12,
        suit: "diamond",
        cardIDnum: 11
    },
    queen_of_spades = {
        rank: 12,
        suit: "club",
        cardIDnum: 12
    },
    jack_of_spades = {
        rank: 11,
        suit: "spade",
        cardIDnum: 13
    },
    jack_of_hearts = {
        rank: 11,
        suit: "heart",
        cardIDnum: 14
    },
    jack_of_diamonds = {
        rank: 11,
        suit: "diamond",
        cardIDnum: 15
    },
    jack_of_clubs = {
        rank: 11,
        suit: "club",
        cardIDnum: 16
    },
    ten_of_spades = {
        rank: 10,
        suit: "spade",
        cardIDnum: 17
    },
    ten_of_hearts = {
        rank: 10,
        suit: "heart",
        cardIDnum: 18
    },
    ten_of_diamonds = {
        rank: 10,
        suit: "diamond",
        cardIDnum: 19
    },
    ten_of_clubs = {
        rank: 10,
        suit: "club",
        cardIDnum: 20
    },
    nine_of_spades = {
        rank: 10,
        suit: "spade",
        cardIDnum: 21
    },
    nine_of_hearts = {
        rank: 10,
        suit: "heart",
        cardIDnum: 22
    },
    nine_of_diamonds = {
        rank: 10,
        suit: "diamond",
        cardIDnum: 23
    },
    nine_of_clubs = {
        rank: 9,
        suit: "club",
        cardIDnum: 24
    },
    eight_of_spades = {
        rank: 8,
        suit: "spade",
        cardIDnum: 25
    },
    eight_of_hearts = {
        rank: 8,
        suit: "heart",
        cardIDnum: 26
    },
    eight_of_diamonds = {
        rank: 8,
        suit: "diamond",
        cardIDnum: 27
    },
    eight_of_clubs = {
        rank: 8,
        suit: "club",
        cardIDnum: 28
    },
    seven_of_spades = {
        rank: 7,
        suit: "spade",
        cardIDnum: 29
    },
    seven_of_hearts = {
        rank: 7,
        suit: "heart",
        cardIDnum: 30
    },
    seven_of_diamonds = {
        rank: 7,
        suit: "diamond",
        cardIDnum: 31
    },
    seven_of_clubs = {
        rank: 7,
        suit: "club",
        cardIDnum: 32
    },
    six_of_spades = {
        rank: 6,
        suit: "spade",
        cardIDnum: 33
    },
    six_of_hearts = {
        rank: 6,
        suit: "heart",
        cardIDnum: 34
    },
    six_of_diamonds = {
        rank: 6,
        suit: "diamond",
        cardIDnum: 35
    },
    six_of_spades = {
        rank: 6,
        suit: "club",
        cardIDnum: 36
    },
    five_of_spades = {
        rank: 5,
        suit: "spade",
        cardIDnum: 37
    },
    five_of_hearts = {
        rank: 5,
        suit: "heart",
        cardIDnum: 38
    },
    five_of_diamonds = {
        rank: 5,
        suit: "diamond",
        cardIDnum: 39
    },
    five_of_clubs = {
        rank: 5,
        suit: "club",
        cardIDnum: 40
    },
    four_of_spades = {
        rank: 4,
        suit: "spade",
        cardIDnum: 41
    },
    four_of_hearts = {
        rank: 4,
        suit: "heart",
        cardIDnum: 42
    },
    four_of_diamonds = {
        rank: 4,
        suit: "diamond",
        cardIDnum: 43
    },
    four_of_clubs = {
        rank: 4,
        suit: "club",
        cardIDnum: 44
    },
    three_of_spades = {
        rank: 3,
        suit: "spade",
        cardIDnum: 45
    },
    three_of_hearts = {
        rank: 3,
        suit: "heart",
        cardIDnum: 46
        },
    three_of_diamonds = {
        rank: 3,
        suit: "diamond",
        cardIDnum: 47
    },
    three_of_clubs = {
        rank: 3,
        suit: "club",
        cardIDnum: 48
    },
    two_of_spades = {
        rank: 2,
        suit: "spade",
        cardIDnum: 49
    },
    two_of_hearts = {
        rank: 2,
        suit: "heart",
        cardIDnum: 50
    },
    two_of_diamonds = {
        rank: 2,
        suit: "diamond",
        cardIDnum: 51
    },
    two_of_clubs = {
        rank: 2,
        suit: "club",
        cardIDnum: 52
    },
]
function randomCard() {
    let card1 = [Math.floor((Math.random()*deckOfCards.length))];
    console.log(card1);
    let chosenCard1 = deckOfCards[card1];
    console.log(chosenCard1);
    let card2 = [Math.floor((Math.random()*deckOfCards.length))];
    console.log(card2);
    let chosenCard2 = deckOfCards[card2];
    console.log(chosenCard2);
    if (deckOfCards[card1].rank > deckOfCards[card2].rank) {
        console.log("Player 1 wins!")
    } else if (deckOfCards[card1].rank < deckOfCards[card2].rank) {
        console.log("Player 2 wins!")
    } else {
        console.log("Tie!")
    };
}
randomCard()
*/









// Hammad's Walkthrough

class Card {
    constructor(rank, suit, cardIDnum) {
        this.rank = rank;
        this.suit = suit;
        this.cardIDnum = cardIDnum
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
                let suit = [j]
                let value = i

                this.cards.push(new Card(rank, suit, value))
            }
        // SHUFFLE METHOD HERE
        }
    }
}

const deck = new Deck ()



player1 = deck.cards.splice[0,26]
console.log(player1)



for(let i = 0; i < deck.cards.length; i++) {
    let shuffledCard = [Math.floor((Math.random()*deck.cards.length))];
    deck.cards.splice(i,1);
    console.log(shuffledCard);
    console.log("stop")
    for(let i = 0; i < shuffledCard.length; i++) {
        let shuffledDeck = [];
        shuffledDeck.push(shuffledCard);
        console.log(shuffledDeck)
    }
    // let shuffledDeck = [];
    // freshDeck = shuffledDeck.push(shuffledCard);
// console.log(freshDeck[0])
}
console.log("SPLIT LOOPS")
// j = 0;
// while(j < deck.cards.length) {
//     let shuffledCardw = [Math.floor((Math.random()*deck.cards.length))];
//     deck.cards.splice(j,1);
//     j++;
//     console.log(shuffledCardw);
//     console.log("WAIT")
//     for(let i = 0; i < shuffledCardw.length; i++) {
//         let shuffledDeckw = [];
//         shuffledDeckw.push(shuffledCardw);
//         console.log(shuffledDeckw)
//     }
// }



j = 0;
let shuffledDeckw = [];
while(j < deck.cards.length) {
    let shuffledCardw = [Math.floor((Math.random()*deck.cards.length))];
    deck.cards.splice(j,1);
    // let shuffledDeckw = [];
    shuffledDeckw.push(shuffledCardw[j]);
    j++;
    console.log(shuffledCardw);
    console.log(shuffledDeckw)
    console.log("WAIT")
    // for(let i = 0; i < shuffledCardw.length; i++) {
    //     let shuffledDeckw = [];
    //     shuffledDeckw.push(shuffledCardw);
    //     console.log(shuffledDeckw)
    // }
}











function reDraw() {
    let card3 = [Math.floor((Math.random()*deck.cards.length))];
    console.log(card3);
    let chosenCard3 = deck.cards[card3];
    console.log(chosenCard3);
    let card4 = [Math.floor((Math.random()*deck.cards.length))];
    console.log(card4);
    let chosenCard4 = deck.cards[card4];
    console.log(chosenCard4);
        if (deck.cards[card3].rank > deck.cards[card4].rank) {
            console.log("Player 1 wins!")
        } else if (deck.cards[card3].rank < deck.cards[card4].rank) {
            console.log("Player 2 wins!")
        } else (console.log("Tie!"))
    }


// const deck = new Deck ()




// player1 = deck.slice(26,52);
// player2 = deck.slice(0,26);
// console.log(player1);
// console.log(player2);


// console.log(deck.cards);

function randomCard() {
    let card1 = [Math.floor((Math.random()*deck.cards.length))];
    console.log(card1);
    let chosenCard1 = deck.cards[card1];
    console.log(chosenCard1);
    let card2 = [Math.floor((Math.random()*deck.cards.length))];
    console.log(card2);
    let chosenCard2 = deck.cards[card2];
    console.log(chosenCard2);
    if (deck.cards[card1].rank > deck.cards[card2].rank) {
        console.log("Player 1 wins!")
    } else if (deck.cards[card1].rank < deck.cards[card2].rank) {
        console.log("Player 2 wins!")
    } else {
        reDraw ()
    };
}
randomCard()