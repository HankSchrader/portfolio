import {Book} from './Book';
const imageRoot = 'assets/images/';
export const TOP_FIVE_BOOKS: Book[] = [
  {id: 1, name: 'Eyes of the Dragon', description: 'The first fantasy I really enjoyed.',
    author: 'Stephen King', image: imageRoot + 'eyes-of-the-dragon-cover.png', alt: 'Eyes of the Dragon by Stephen King'},
  {id: 2, name: 'Artemis Fowl', description: 'A great middle grade book', author: 'Eoin Colfer', image: imageRoot + 'artemis-fowl.png',
  alt: 'Artemis Fowl by Eoin Colfer'}
];
