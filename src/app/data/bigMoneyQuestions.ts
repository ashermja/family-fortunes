import { BigMoneyQuestion, Question } from "../types/types";

export const bigMoneyQuestions: Array<BigMoneyQuestion> = [
  {
    question: "A word that rhymes with “election.”",
    answers: [
      { answer: "Selection", count: 40, isTopAnswer: true },
      { answer: "Erection", count: 33, isTopAnswer: false },
      { answer: "Perfection", count: 13, isTopAnswer: false },
      { answer: "Detection", count: 6, isTopAnswer: false },
      { answer: "Protection", count: 5, isTopAnswer: false },
      { answer: "Section", count: 3, isTopAnswer: false },
    ],
  },
  {
    question: "a three-letter word that starts with the letter “Z.“",
    answers: [
      { answer: "zoo", count: 40, isTopAnswer: true },
      { answer: "Zip", count: 18, isTopAnswer: false },
      { answer: "Zap", count: 15, isTopAnswer: false },
      { answer: "Zen", count: 13, isTopAnswer: false },
      { answer: "Zit", count: 13, isTopAnswer: false },
      { answer: "zag", count: 1, isTopAnswer: false },
    ],
  },
  {
    question: "Something where on your feet",
    answers: [
      { answer: "shoes", count: 61, isTopAnswer: true },
      { answer: "socks", count: 21, isTopAnswer: false },
      { answer: "slippers", count: 11, isTopAnswer: false },
      { answer: "boots", count: 5, isTopAnswer: false },
      { answer: "skis", count: 3, isTopAnswer: false },
      { answer: "flipper", count: 1, isTopAnswer: false },
    ],
  },
  {
    question: "Name a character in friends",
    answers: [
      { answer: "Rachel", count: 23, isTopAnswer: true },
      { answer: "Joey", count: 19, isTopAnswer: false },
      { answer: "Ross", count: 18, isTopAnswer: false },
      { answer: "Chandler", count: 16, isTopAnswer: false },
      { answer: "Monica", count: 14, isTopAnswer: false },
      { answer: "Phoebe", count: 10, isTopAnswer: false },
    ],
  },
  {
    question: "Something you do when you're bored",
    answers: [
      { answer: "Browse on phone", count: 50, isTopAnswer: true },
      { answer: "Watch TV", count: 30, isTopAnswer: true },
      { answer: "Play video games", count: 10, isTopAnswer: false },
      { answer: "Read a book", count: 5, isTopAnswer: false },
      { answer: "Take a nap", count: 2, isTopAnswer: false },
      { answer: "Drink", count: 3, isTopAnswer: false },
    ],
  },
];
