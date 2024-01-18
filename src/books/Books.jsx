import BookCard from "./BookCard";

export default function Books({ booksData }) {
  return (
    <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {booksData.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
