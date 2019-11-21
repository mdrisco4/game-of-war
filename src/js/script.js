const deckOfCards = [
    ace_of_spades = {
        rank: 14,
        suit: "spade"
    },
    ace_of_hearts = {
        rank: 14,
        suit: "heart"
    },
    ace_of_diamonds = {
        rank: 14,
        suit: "diamond"
    },
    ace_of_clubs = {
        rank: 14,
        suit: "club"
    },
    king_of_spades = {
        rank: 13,
        suit: "spade"
    },
    king_of_hearts = {
        rank: 13,
        suit: "heart"
    },
    king_of_diamonds = {
        rank: 13,
        suit: "diamond"
    },
    king_of_clubs = {
        rank: 13,
        suit: "club"
    },
    queen_of_spades = {
        rank: 12,
        suit: "spade"
    },
    queen_of_hearts = {
        rank: 12,
        suit: "heart"
    },
    queen_of_diamonds = {
        rank: 12,
        suit: "diamond"
    },
    queen_of_spades = {
        rank: 12,
        suit: "club"
    },
    jack_of_spades = {
        rank: 11,
        suit: "spade"
    },
    jack_of_hearts = {
        rank: 11,
        suit: "heart"
    },
    jack_of_diamonds = {
        rank: 11,
        suit: "diamond"
    },
    jack_of_clubs = {
        rank: 11,
        suit: "club"
    },
    ten_of_spades = {
        rank: 10,
        suit: "spade"
    },
    ten_of_hearts = {
        rank: 10,
        suit: "heart"
    },
    ten_of_diamonds = {
        rank: 10,
        suit: "diamond"
    },
    ten_of_clubs = {
        rank: 10,
        suit: "club"
    },
    nine_of_spades = {
        rank: 10,
        suit: "spade"
    },
    nine_of_hearts = {
        rank: 10,
        suit: "heart"
    },
    nine_of_diamonds = {
        rank: 10,
        suit: "diamond"
    },
    nine_of_spades = {
        rank: 9,
        suit: "spade"
    },
    nine_of_hearts = {
        rank: 9,
        suit: "heart"
    },
    nine_of_diamonds = {
        rank: 9,
        suit: "diamond"
    },
    eight_of_spades = {
        rank: 8,
        suit: "spade"
    },
    eight_of_hearts = {
        rank: 8,
        suit: "heart"
    },
    eight_of_diamonds = {
        rank: 8,
        suit: "diamond"
    },
    eight_of_clubs = {
        rank: 8,
        suit: "club"
    },
    seven_of_spades = {
        rank: 7,
        suit: "spade"
    },
    seven_of_hearts = {
        rank: 7,
        suit: "heart"
    },
    seven_of_diamonds = {
        rank: 7,
        suit: "diamond"
    },
    seven_of_clubs = {
        rank: 7,
        suit: "club"
    },
    six_of_spades = {
        rank: 6,
        suit: "spade"
    },
    six_of_hearts = {
        rank: 6,
        suit: "heart"
    },
    six_of_diamonds = {
        rank: 6,
        suit: "diamond"
    },
    six_of_spades = {
        rank: 6,
        suit: "club"
    },
    five_of_spades = {
        rank: 5,
        suit: "spade"
    },
    five_of_hearts = {
        rank: 5,
        suit: "heart"
    },
    five_of_diamonds = {
        rank: 5,
        suit: "diamond"
    },
    five_of_clubs = {
        rank: 5,
        suit: "club"
    },
    four_of_spades = {
        rank: 4,
        suit: "spade"
    },
    four_of_hearts = {
        rank: 4,
        suit: "heart"
    },
    four_of_diamonds = {
        rank: 4,
        suit: "diamond"
    },
    four_of_clubs = {
        rank: 4,
        suit: "club"
    },
    three_of_spades = {
        rank: 3,
        suit: "spade"
    },
    three_of_hearts = {
        rank: 3,
        suit: "heart"
        },
    three_of_diamonds = {
        rank: 3,
        suit: "diamond"
    },
    three_of_clubs = {
        rank: 3,
        suit: "club"
    },
    two_of_spades = {
        rank: 2,
        suit: "spade"
    },
    two_of_hearts = {
        rank: 2,
        suit: "heart"
    },
    two_of_diamonds = {
        rank: 2,
        suit: "diamond"
    },
    two_of_clubs = {
        rank: 2,
        suit: "club"
    },
]
function randomCard() {
    let card = [Math.floor((Math.random()*deckOfCards.length))];
    console.log(card);
}
randomCard()