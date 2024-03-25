import { BigMoneyGame, Answer } from "../types/types";

export const init = (): BigMoneyGame => {
  return {
    round: 1,
    answers1: [],
    answers2: [],
  };
};

export const correctAnswer = (
  game: BigMoneyGame,
  answer: Answer,
  questionLength: number
): BigMoneyGame => {
  let answers = game[`answers${game.round}`];
  let round = game.round;
  if (answers.length === questionLength) {
    if (game.round === 2) {
      return game;
    }
    round = 2;
    answers = game.answers2;
  }
  answers.push(answer);
  return {
    ...game,
    round,
    [`answers${round}`]: answers,
  };
};

export const getQuestionNumber = (
  game: BigMoneyGame,
  questionLength: number
): number => {
  return game[`answers${game.round}`].length < questionLength
    ? game[`answers${game.round}`].length
    : 0;
};
