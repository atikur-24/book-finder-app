import { useState } from "react";
import "./App.css";
import Books from "./books/Books";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./header/Header";
import data from "/public/booksData.json";

export default function App() {
  const [books, setBooks] = useState(data);

  function handleSearch(searchTerm) {
    console.log(searchTerm);
    const filteredBooks = books.filter((book) => book.book_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setBooks([...filteredBooks]);
  }

  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header handleSearch={handleSearch} />
        <Books booksData={books} />
      </main>
      <Footer />
    </>
  );
}
