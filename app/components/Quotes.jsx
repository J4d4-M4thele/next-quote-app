import Link from "next/link";

async function getQuotes() {
    const res = await fetch("http://localhost:3000/api/quotes");
    const json = await res.json();
    return json;
}

const Quotes = async () => {
  return (
    <div>
      
    </div>
  )
}

export default Quotes
