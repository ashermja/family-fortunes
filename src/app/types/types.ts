export type Answered = [boolean, boolean, boolean, boolean, boolean, boolean];

export type TeamNames = "A" | "B";

export type Team = {
  score: number;
  lives?: number;
  initialLives?: number;
};

export type TeamsStatus = {
  activeTeam: {
    id: TeamNames;
    name: string;
    team: Team;
  };
  inActiveTeam: {
    id: TeamNames;
    name: string;
    team: Team;
  };
};

export type CurrentRound = {
  inControl?: TeamNames;
  total: number;
  answered: Answered;
  roundComplete: boolean;
  stealAttempt: "none" | "attempt" | "success";
};

export type Game = {
  round: number;
  teamA: Team;
  teamB: Team;
  currentRound: CurrentRound;
  gameComplete: boolean;
};

export type Answer = {
  answer: string;
  count: number;
};

export type Question = {
  question: string;
  answers: Array<Answer>;
};

export type BigMoneyGame = {
  round: 1 | 2;
  answers1: Array<BigMoneyAnswer>;
  answers2: Array<BigMoneyAnswer>;
};

export type BigMoneyAnswer = Answer & {
  isTopAnswer: boolean;
};

export type BigMoneyQuestion = {
  question: string;
  answers: Array<BigMoneyAnswer>;
};
