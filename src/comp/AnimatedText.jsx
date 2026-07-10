import { useEffect, useState } from "react";

const words = [
  "Shivam Bhardwaj",
  "Web Development",
  "Data Science",
  "Generative AI",
];

export default function AnimatedText() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (!deleting && text.length < currentWord.length) {
      // Typing
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length + 1));
      }, 80);
    } else if (!deleting && text === currentWord) {
      // Wait 2 seconds
      timeout = setTimeout(() => {
        setDeleting(true);
      }, 3000);
    } else if (deleting && text.length > 0) {
      // Delete from right to left
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, text.length - 1));
      }, 50);
    } else {
      // Move to next word
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex]);

  return (
    <h1 className="text-xl font-bold text-white">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
}