import {Book} from './Book';
const imageRoot = 'assets/images/';
export const TOP_FIVE_BOOKS: Book[] = [
  {id: 1, name: 'Eyes of the Dragon', description: 'The first fantasy I really enjoyed.',
    author: 'Stephen King', image: imageRoot + 'eyes-of-the-dragon.png', alt: 'Eyes of the Dragon by Stephen King'},
  {id: 2, name: 'Artemis Fowl', description: 'A great middle grade book', author: 'Eoin Colfer', image: imageRoot + 'artemis-fowl.png',
  alt: 'Artemis Fowl by Eoin Colfer'},
  {id: 3, name: 'Dune', description: 'The first in the saga of Paul Atreides.', author: 'Frank Herbert', image: imageRoot + 'dune.png',
    alt: 'Dune by Frank Herbert'},
  {id: 4, name: 'The Hitchhikers Guide to the Galaxy', description: 'One of the funniest books I have ever read.',
    author: 'Douglas Adams', image: imageRoot + 'hitch-hikers-guide.png', alt: 'The Hitchhikers Guide to the Galaxy by Douglas Adams'},
  {id: 5, name: 'Shogun', description: 'The Epic Novel of Japan',
    author: 'James Clavell', image: imageRoot + 'shogun.png', alt: 'Shogun by James Clavell'}
];
