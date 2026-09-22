"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Countup from "react-countup";

export default function Home() {
  const [liveText, setLiveText] = useState(0);
  const [newText, setNewText] = useState(0);
  const [liveWord, setLiveWord] = useState("Welcome");
  const [newWord, setNewWord] = useState("");

  const WORD_LIST = [
    "Hello",
    "World",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Frontend",
    "Backend",
    "Fullstack",
    "Programming",
  ];

  const removeLastCharacter = () => {
    setLiveWord((prev) => prev.slice(0, -1));
  };

  const changeWord = () => {
    if (newWord !== liveWord) {
      for (let i = 0; i < liveWord.length + newWord.length; i++) {
        console.log(
          "i:",
          i,
          "liveWord.length:",
          liveWord.length,
          "newWord.length:",
          newWord.length,
        );
        if (i < liveWord.length) {
          setTimeout(() => {
            if (i === liveWord.length - 1) {
              console.log("Setting liveWord to newWord");
              setLiveWord(newWord.at(0) || "");
            } else {
              removeLastCharacter();
            }
          }, i * 30);
        } else if (i > liveWord.length) {
          setTimeout(() => {
            setLiveWord((prev) => prev + newWord[i - liveWord.length]);
          }, i * 30);
        }
      }
    }
  };

  return (
    <div>
      <Countup
        start={liveText}
        end={newText}
        duration={0.6}
        onEnd={() => setLiveText(newText)}
        preserveValue
      />
      <div
        onClick={() => {
          setNewText(Math.floor(Math.random() * 1000000));
        }}
        style={{ cursor: "pointer", marginBottom: "10px" }}
      >
        <span>Click the box to change the Number</span>
      </div>
      <span>{liveWord}</span>
      <div
        onClick={() => {
          setNewWord(WORD_LIST[Math.floor(Math.random() * WORD_LIST.length)]);
          changeWord();
        }}
        style={{ cursor: "pointer", marginBottom: "10px" }}
      >
        <span>Click the box to change the Word</span>
      </div>
    </div>
  );
}
