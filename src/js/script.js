// Hammad's Walkthrough

class Card {
    constructor(rank, suit/*, cardIDnum*/) {
        this.rank = rank;
        this.suit = suit;
        // this.cardIDnum = cardIDnum
    }
}

class Deck {
    constructor() {
        this.cards = []
        // let idnum = [
            1,
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
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30,
            31,
            32,
            33,
            34,
            35,
            36,
            37,
            38,
            39,
            40,
            41,
            42,
            43,
            44,
            45,
            46,
            47,
            48,
            49,
            50,
            51,
            52
        // ]
        
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

    // for (let h = 0; h < idnum.length, h++) {
        for (let i = 0; i < ranks.length; i++) {
            for (let j = 0; j < suits.length; j++) {
                // let idnum = idnum[h]
                let rank = ranks[i]
                let suit = suits[j]

                this.cards.push(new Card(/*idnum, */rank, suit))
                }
            }
        }
    } 
    const deck = new Deck ()
//     function shuffleDeck() {
//         for(let i = deck.cards.length - 1; i > 0; i--) {
//           let randomIndex = Math.floor(Math.random() * i);
          
//           let temp = deck.cards[i];
//           deck.cards[i] = deck.cards[randomIndex];
//           deck.cards[randomIndex] = temp;
//           console.log(temp)
//         }
//     }
// shuffleDeck()


// function shuffle(arra1) {
//     var ctr = arra1.length, temp, index;

// // While there are elements in the array
//     while (ctr > 0) {
// // Pick a random index
//         index = Math.floor(Math.random() * ctr);
// // Decrease ctr by 1
//         ctr--;
// // And swap the last element with it
//         temp = arra1[ctr];
//         arra1[ctr] = arra1[index];
//         arra1[index] = temp;
//     }
//     return arra1;
// }






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
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])
// console.log(myArray[3])
// console.log(myArray[4])
// console.log(myArray[5])
// console.log(myArray[6])
// console.log(myArray[7])
// console.log(myArray[8])
// console.log(myArray[9])
// console.log(myArray[10])
// console.log(myArray[11])
// console.log(myArray[12])
// console.log(myArray[13])
// console.log(myArray[14])
// console.log(myArray[15])
// console.log(myArray[16])
// console.log(myArray[17])
// console.log(myArray[18])


player1 = myArray.splice(26,52);
player2 = myArray.splice(0,26);
console.log(player1);
console.log(player2);



function playWar() {
    let card1 = player1[player1.length - 1];
    console.log(card1)
    let card2 = player2[player2.length - 1];
    console.log(card1)
    if (card1.rank > card2.rank) {
        console.log("Player one wins!")
    } else if (card1.rank < card2.rank) {
        console.log("Player two wins!")
    } else {console.log("Tie!")
}
playWar()


