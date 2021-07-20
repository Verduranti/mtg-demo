
const mtg = require('mtgsdk')

mtg.card.find(3)
  .then(result => {
    console.log(result.card.name) // "Black Lotus"
  })

mtg.set.find('AER')
  .then(result => {
    console.log(result.set.name) // "Aether Revolt"
  })

  // card.where({ supertypes: 'legendary', subtypes: 'goblin' })
  //   .then(cards => {
  //     console.log(cards[0].name) // "Squee, Goblin Nabob"
  //   })

// set.where({ block: 'Shadows over Innistrad', border: 'black' })
//   .then(sets => {
//     console.log(sets[0].name) // "Welcome Deck 2016"
//     console.log(sets[1].name) // "Shadows over Innistrad"
//     console.log(sets[2].name) // "Eldritch Moon"
//   })
//
//   card.all({ name: 'Squee', pageSize: 1 })
//     .on('data', card => {
//       console.log(card.name)
//     })

// Will print:
// Squee
// Squee, Goblin Nabob Avatar
// Squee's Toy
// Squeeze
// Squee, Goblin Nabob
// Squee's Embrace
// Squee's Revenge
// Squee, Goblin Nabob
// Squee, Goblin Nabob
// (the duplicates are from different sets)

// set.all({ name: 'limited' })
//   .on('data', set => {
//     console.log(set.name)
//   })

// Will print:
// Limited Edition Alpha
// Limited Edition Beta
// Unlimited Edition
