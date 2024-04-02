"use client";
import styles from "./page.module.css";
import * as bigMoneyController from "../controllers/bigMoney";
import { useCallback, useEffect, useState } from "react";
import { Answer, BigMoneyAnswer, BigMoneyGame } from "../types/types";
import useSound from "use-sound";
import { useRouter } from "next/navigation";
import { bigMoneyQuestions } from "../data/bigMoneyQuestions";

export default function BigMoney() {
  const router = useRouter();
  const [game, setGame] = useState<BigMoneyGame>(bigMoneyController.init());
  const [correct] = useSound("/sounds/correct.mp3");
  const [topAnswer] = useSound("/sounds/top-answer.mp3");
  const [wrongAnswer] = useSound("/sounds/wrong-answer.mp3");

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
          const questionNumber = bigMoneyController.getQuestionNumber(
            game,
            bigMoneyQuestions.length
          );
          const updatedGame = bigMoneyController.correctAnswer(
            game,
            bigMoneyQuestions[questionNumber].answers[answer],
            bigMoneyQuestions.length
          );
          if (
            game.round === 1 ||
            (game.round === 2 &&
              updatedGame.answers2.length > game.answers2.length)
          ) {
            if (answer === 0) {
              topAnswer();
            } else {
              correct();
            }
          }
          setGame(updatedGame);
          break;
        case 39:
          // setGame(bigMoneyController.nextRound(game, bigMoneyQuestions.length));
          break;
        case 87:
          wrongAnswer();
          setGame(
            bigMoneyController.incorrectAnswer(game, bigMoneyQuestions.length)
          );
          // setGame(bigMoneyController.incorrectAnswer(game));
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

  const renderAnswer = (answers: Array<BigMoneyAnswer>, index: number) => {
    if (answers[index] === undefined) {
      return (
        <li key={index}>
          <span style={{ float: "left" }}>----------------------------</span>
          <span style={{ float: "right" }}>**</span>
        </li>
      );
    }
    const isTopAnswer = answers[index].isTopAnswer;
    return (
      <li key={index}>
        <span style={{ float: "left" }}>{answers[index].answer}</span>
        <span style={{ float: "right" }}>
          {isTopAnswer ? (
            <>
              <span
                className={isTopAnswer ? styles.topAnswer : ""}
                style={{ float: "right", marginRight: "4px" }}
              >
                ↑↑
              </span>
              <span
                className={styles.topAnswerAlt}
                style={{ position: "absolute" }}
              >
                {answers[index].count}
              </span>
            </>
          ) : (
            <span>{answers[index].count}</span>
          )}
        </span>
      </li>
    );
  };

  const total = (game: BigMoneyGame, roundNumber: number) => {
    return (
      <>
        <span style={{ float: "right", marginTop: "40px" }}>
          {bigMoneyController.getTotals(game)[roundNumber - 1]}
        </span>
        <span
          style={{ float: "right", marginTop: "40px", marginRight: "50px" }}
        >
          Total
        </span>
      </>
    );
  };

  return (
    <main className={styles.main}>
      <div className={styles.surveyContainer}>
        <div className={styles.leftAnswers}>
          <ol style={{ fontSize: 50 }}>
            {bigMoneyQuestions.map((question, index: number) =>
              renderAnswer(game.answers1, index)
            )}
            <span>{total(game, 1)}</span>
          </ol>
        </div>
        <div className={styles.rightAnswers}>
          <ol style={{ fontSize: 50 }}>
            {bigMoneyQuestions.map((question, index: number) =>
              renderAnswer(game.answers2, index)
            )}
            <span>{total(game, 2)}</span>
          </ol>
        </div>
      </div>
    </main>
  );
}
