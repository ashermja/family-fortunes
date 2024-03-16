"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { questions } from "./data/questions";
import * as gameController from "./controllers/game";
import { useCallback, useEffect, useState } from "react";
import { Answer, Game } from "./types/types";

export default function Home() {
  const [game, setGame] = useState<Game>(gameController.newGame());

  const handleUserKeyPress = useCallback(
    (event: any) => {
      const { keyCode } = event;
      switch (keyCode) {
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
          const answer: number = +keyCode - 49;
          setGame(
            gameController.correctAnswer(
              game,
              answer,
              questions[game.round - 1].answers[answer].count
            )
          );
          break;
        case 78:
          setGame(gameController.newGame());
          break;
        case 87:
          setGame(gameController.incorrectAnswer(game));
          break;
        case 39:
          setGame(gameController.nextRound(game, questions.length));
          break;
      }
    },
    [game]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const renderAnswer = (answer: Answer, answered: boolean, index: number) => {
    if (answered) {
      return (
        <li key={index}>
          <span style={{ float: "left" }}>{answer.answer}</span>
          <span style={{ float: "right" }}>{answer.count}</span>
        </li>
      );
    }
    return (
      <li key={index}>
        <span style={{ float: "left" }}>----------------------------</span>
        <span style={{ float: "right" }}>**</span>
      </li>
    );
  };

  const renderWrong = (lives: number, initialLives: number) => {
    const rows: Array<JSX.Element> = [];
    if (lives === initialLives) {
      rows.push(<span style={{ width: 160 }} />);
    }
    for (let i = initialLives; i > lives; i--) {
      rows.push(
        <span key={i} style={{ width: 160 }}>
          X
        </span>
      );
    }
    return rows;
  };

  const total = (game: Game) => {
    return (
      <>
        <span style={{ float: "right" }}>{game.currentRound.total}</span>
        <span style={{ float: "right", marginRight: "20px" }}>Total</span>
      </>
    );
  };
  return (
    <main className={styles.main}>
      <div className={styles.score}>{game.teamA.score}</div>
      <div className={styles.surveyContainer}>
        <div className={styles.wrong}>
          {renderWrong(game.teamA.lives, game.teamA.initialLives)}
        </div>
        <div
          className={styles.description}
          style={{ width: "840px", marginTop: "40px" }}
        >
          <ol style={{ fontSize: 70, width: "82%" }}>
            {questions[game.round - 1].answers.map((answer, index: number) =>
              renderAnswer(answer, game.currentRound.answered[index], index)
            )}
          </ol>
        </div>
        <div className={styles.wrong}>
          <div className={styles.wrong}>
            {renderWrong(game.teamB.lives, game.teamB.initialLives)}
          </div>
        </div>
        <span className={styles.total}>{total(game)}</span>
      </div>
      <div className={styles.score}>{game.teamB.score}</div>
    </main>
  );
}
