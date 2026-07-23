import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import UserForm from "./components/UserForm";
import Question from "./components/Question";
import Results from "./components/Results";

const questions = [
  {
    question: "What's your favorite color?",
    options: ["Red 🔴", "Blue 🔵", "Green 🟢", "Yellow 🟡"],
  },
];

const keywords = {
  Fire: "fire",
  Water: "water",
  Earth: "earth",
  Air: "air",
};

const elements = {
  "Red 🔴": "Fire",
  "Blue 🔵": "Water",
  "Green 🟢": "Earth",
  "Yellow 🟡": "Air",
};

export default function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [element, setElement] = useState("");
  const [artwork, setArtwork] = useState(null);

  function handleAnswer(answer) {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  function determineElement(selectedAnswers) {
    const counts = {};

    selectedAnswers.forEach((answer) => {
      const mappedElement = elements[answer];
      if (mappedElement) {
        counts[mappedElement] = (counts[mappedElement] || 0) + 1;
      }
    });

    const elementKeys = Object.keys(counts);
    return elementKeys.length > 0
      ? elementKeys.reduce((topElement, currentElement) =>
          counts[topElement] >= counts[currentElement] ? topElement : currentElement
        )
      : "Fire";
  }

  function fetchArtwork(selectedElement) {
    const keyword = keywords[selectedElement];

    fetch(`https://api.artic.edu/api/v1/artworks/search?q=${keyword}`)
      .then((response) => response.json())
      .then((data) => {
        const artworkSummary = data.data?.[0];

        if (!artworkSummary?.id) {
          setArtwork(null);
          return;
        }

        return fetch(`https://api.artic.edu/api/v1/artworks/${artworkSummary.id}`)
          .then((detailResponse) => detailResponse.json())
          .then((detailData) => {
            const artworkData = detailData.data;
            const imageId = artworkData?.image_id;
            const imageUrl = imageId
              ? `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`
              : null;

            setArtwork({
              title: artworkData?.title || "Mystic Artwork",
              primaryImage: imageUrl,
              artistDisplayName: artworkData?.artist_display || "Unknown artist",
              objectDate: artworkData?.date_display || artworkData?.date_start || "Unknown date",
            });
          });
      })
      .catch(() => {
        setArtwork(null);
      });
  }

  useEffect(() => {
    if (currentQuestionIndex === questions.length) {
      const selectedElement = determineElement(answers);
      setElement(selectedElement);
      fetchArtwork(selectedElement);
    }
  }, [answers, currentQuestionIndex]);

  return (
    <Routes>
      <Route path="/" element={<UserForm />} />
      <Route
        path="/quiz"
        element={
          currentQuestionIndex < questions.length ? (
            <Question
              question={questions[currentQuestionIndex].question}
              options={questions[currentQuestionIndex].options}
              onAnswer={handleAnswer}
            />
          ) : (
            <Results element={element} artwork={artwork} />
          )
        }
      />
    </Routes>
  );
}

