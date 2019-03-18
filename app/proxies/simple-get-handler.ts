import { console } from "console";

const dislikes = {
  pickles: true,
  mayo: true,
  mustard: true
};

const joshLikes: any = new Proxy(dislikes, {
  get: function (target, property, receiver) {
    return target[property] ? 'no' : 'yes';
  }
});

console.log('Does Josh Like:');
console.log(`pickles: ${joshLikes.pickles}`);
console.log(`cats: ${joshLikes.cats}`);
console.log(`mustard: ${joshLikes.mustard}`);
console.log(`kids: ${joshLikes.kids}`);
console.log(`long walks on the beach: ${joshLikes.longWalksOnTheBeach}`);




