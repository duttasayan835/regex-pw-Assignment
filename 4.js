const book = [
  {
    title: "The Namesake",
    author: "Jhumpa Lahiri",
    year: 2010,
  },
  {
    title: "The God of small things",
    author: "Arundhati Roy",
    year: 1997,
  },
  {
    title: "A suitable boy",
    author: "Vikram Seth",
    year: 1993,
  },
  {
    title: "the white Tiger",
    author: "Aravind adiga",
    year: 2018,
  },
  {
    title: "Midnight's Children",
    author: "Salman Rushdie",
    year: 1981,
  },
];

const filteredbook = book.filter((book) => {
  return book.year >= 2010;
});
const result = filteredbook.map((book) => {
  return {
    ...book,
    author: book.author.toUpperCase(),
  };
});

console.log(result);
