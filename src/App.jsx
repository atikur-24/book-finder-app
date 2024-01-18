import "./App.css";
import Books from "./books/Books";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Header from "./header/Header";
import data from "/public/booksData.json";

export default function App() {
  const booksData = data;

  return (
    <>
      <Navbar />
      <main className="my-10 lg:my-14">
        <Header />
        <Books booksData={booksData} />
      </main>
      <Footer />
    </>
  );
}
