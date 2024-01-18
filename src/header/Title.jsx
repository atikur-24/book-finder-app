export default function Title({ date, titleContent }) {
  return (
    <>
      <h6 className="mb-2 text-base lg:text-xl">{date}</h6>
      <h2 className="mb-6 font-['Playfair_Display'] text-3xl font-bold lg:text-4xl">{titleContent}</h2>
    </>
  );
}
