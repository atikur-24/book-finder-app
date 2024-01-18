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
    const filteredBooks = books.filter((book) => book.book_name.toLowerCase().includes(searchTerm.toLowerCase()));
    setBooks([...filteredBooks]);
  }

  function handleSort(e) {
    let sortedData = [];
    if (e === "name_asc") {
      sortedData = books.sort((a, b) => a.book_name.localeCompare(b.book_name));
    } else if (e === "name_desc") {
      sortedData = books.sort((a, b) => b.book_name.localeCompare(a.book_name));
    } else if (e === "year_asc") {
      sortedData = books.sort((a, b) => a.publication_year - b.publication_year);
    } else if (e === "year_desc") {
      sortedData = books.sort((a, b) => b.publication_year - a.publication_year);
    }
    setBooks([...sortedData]);
  }

  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header handleSearch={handleSearch} handleSort={handleSort} />
        <Books booksData={books} />
      </main>
      <Footer />
    </>
  );
}
