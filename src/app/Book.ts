export class Book {
  //  I think I'll keep an id for now. I may need it for ordering the books.

  id: number;
  name: string;
  description: string;
  author: string;
  image: string;
  alt: string;

  constructor(id: number, name: string, description: string, author: string, image: string, alt: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.author = author;
    this.alt = alt;
    this.image = image;
  }
}
