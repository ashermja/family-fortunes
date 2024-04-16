import { BigMoneyQuestion, Question } from "../types/types";

export const bigMoneyQuestions: Array<BigMoneyQuestion> = [
  {
    question: "Disney princess",
    answers: [
      { answer: "Cinderella", count: 60, isTopAnswer: true },
      { answer: "Ariel", count: 12, isTopAnswer: false },
      { answer: "Jasmine", count: 11, isTopAnswer: false },
      { answer: "Snow White", count: 10, isTopAnswer: false },
      { answer: "Belle", count: 5, isTopAnswer: false },
      { answer: "Pocahontas", count: 2, isTopAnswer: false },
    ],
  },
  {
    question: "Top toys in the 90s",
    answers: [
      { answer: "Gameboy", count: 30, isTopAnswer: false },
      { answer: "Tamagotchi", count: 20, isTopAnswer: true },
      { answer: "Furby", count: 18, isTopAnswer: false },
      { answer: "Barbie", count: 15, isTopAnswer: false },
      { answer: "Polly Pocket", count: 10, isTopAnswer: false },
      { answer: "Beanie Babies", count: 7, isTopAnswer: false },
    ],
  },
  {
    question: "Something that you have 2 of",
    answers: [
      { answer: "eyes", count: 56, isTopAnswer: true },
      { answer: "hands", count: 23, isTopAnswer: false },
      { answer: "feet", count: 10, isTopAnswer: false },
      { answer: "ears", count: 6, isTopAnswer: false },
      { answer: "legs", count: 3, isTopAnswer: false },
      { answer: "arms", count: 2, isTopAnswer: false },
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
      { answer: "Watch TV", count: 48, isTopAnswer: true },
      { answer: "Listen to a CD", count: 20, isTopAnswer: false },
      { answer: "Read a book", count: 14, isTopAnswer: false },
      { answer: "Video games", count: 10, isTopAnswer: false },
      { answer: "Drink", count: 5, isTopAnswer: false },
      { answer: "Take a nap", count: 3, isTopAnswer: false },
    ],
  },
];
