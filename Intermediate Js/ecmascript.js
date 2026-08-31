// Define object here 💖
const goodreadsInfo = {
  currentlyReading: [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien"
    }
  ],

  wantToRead: [
    {
      title: "The Art of Language Invention",
      author: "David Peterson"
    }
  ]
};
// Define addBooks() function here 💖
const addNewBooks = (books, ...additionalBookObjects ) => {
  return [...books, ...additionalBookObjects];
};

goodreadsInfo.currentlyReading = addNewBooks(goodreadsInfo.currentlyReading, 
  {title: "The Two Towers", author: "J.R.R. Tolkien"},
  {title: "The MOM Test", author: "Rob Fitzpatrick"}
);

goodreadsInfo.wantToRead = addNewBooks(goodreadsInfo.wantToRead,
  {title: "Looking for Alaska", author: "John Green"}
);
// Define showGoodreadsInfo() function here 💖
const showGoodreadsInfo = (info) => {
  //Inside, create two variables representing the reading list arrays from the info parameter.
  const currentlyReading = info.currentlyReading;
  const wantToRead = info.wantToRead;

  console.log("Currently Reading:");
  for (let book of currentlyReading) {
    console.log(`- ${book.title} by ${book.author}`);
  };

  console.log("\nWant to Read:");
  for (let book of wantToRead) {
    console.log(`- ${book.title} by ${book.author}`);
  }
};

showGoodreadsInfo(goodreadsInfo);