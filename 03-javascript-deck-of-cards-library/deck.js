
// Library for a deck of cards

module.exports = class Deck {
	constructor() {
		this.deck = [];
		this.dealt_cards = [];
	}

	generate_deck() {

		let card = (suit, value) => {
			return {name: value + ' OF ' + suit, suit: suit, value: value}
		};

		let values = ['ACE', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING'];
		let suits = ['HEARTS', 'DIAMONDS', 'SPADES', 'CLUBS'];

		for (let suit of suits) {
			for (let value of values)
				this.deck.push(card(suit, value));	
		}
	}

	print_deck() {
		if (!this.deck.length)
			console.log('the deck has not been generated');
		else {for (let card of this.deck)
			console.log(card);
		}
	}		

	shuffle() {
		let current_index = this.deck.length;
		let temp_val;
		let rand_index;
		while (0 != current_index) {
			rand_index = Math.floor(Math.random() *current_index);
			current_index -= 1;
			let temp_val = this.deck[current_index];
			this.deck[current_index] = this.deck[rand_index];
			this.deck[rand_index] = temp_val;
	    }
	}

	deal() {
		let dealt_card = this.deck.shift();
		this.dealt_cards.push(dealt_card)
		return dealt_card
	}

	replace() {
		this.deck.unshift(this.dealt_cards.pop())
	}

	clear_deck() {
		this.deck = [];
	}
}

// let yugioh = new Deck();
// yugioh.generate_deck()
// yugioh.shuffle();
// yugioh.deal();
// yugioh.deal();
// console.log(yugioh.dealt_cards);
// console.log(yugioh.deck)
// yugioh.replace();
// console.log(yugioh.deck)



