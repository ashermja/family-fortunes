import {
  Answered,
  Game,
  CurrentRound,
  TeamsStatus,
  TeamNames,
} from "../types/types";

export const LIVES = 3;
const STEAL_LIVES = 1;

const getTeamsStatus = (game: Game): TeamsStatus => {
  const activeTeamId = game.currentRound.inControl;
  const inActiveTeamId = game.currentRound.inControl === "A" ? "B" : "A";
  const activeTeamName = `team${activeTeamId}`;
  const inActiveTeamName = `team${inActiveTeamId}`;
  const activeTeam = game[`team${activeTeamId}`];
  const inActiveTeam = game[`team${inActiveTeamId}`];
  return {
    activeTeam: {
      id: activeTeamId,
      name: activeTeamName,
      team: activeTeam,
    },
    inActiveTeam: {
      id: inActiveTeamId,
      name: inActiveTeamName,
      team: inActiveTeam,
    },
  };
};

export const newGame = (inControl: TeamNames = "A"): Game => {
  return {
    round: 1,
    teamA: {
      score: 0,
      lives: LIVES,
      initialLives: LIVES,
    },
    teamB: {
      score: 0,
      lives: STEAL_LIVES,
      initialLives: STEAL_LIVES,
    },
    currentRound: initCurrentRound(inControl),
  };
};

export const nextRound = (game: Game, questionLength: number): Game => {
  if (!game.currentRound.roundComplete || game.round === questionLength) {
    return game;
  }
  const teams = getTeamsStatus(game);

  if (teams.activeTeam.team.lives > 0) {
    teams.activeTeam.team.score += game.currentRound.total;
  } else {
    teams.inActiveTeam.team.score += game.currentRound.total;
  }

  const newRound = initCurrentRound(
    teams.inActiveTeam.team.lives > 0
      ? teams.inActiveTeam.id
      : teams.activeTeam.id
  );
  return {
    ...game,
    round: game.round + 1,
    [teams.activeTeam.name]: {
      score: teams.activeTeam.team.score,
      lives: newRound.inControl === teams.activeTeam.id ? LIVES : STEAL_LIVES,
      initialLives:
        newRound.inControl === teams.activeTeam.id ? LIVES : STEAL_LIVES,
    },
    [teams.inActiveTeam.name]: {
      score: teams.inActiveTeam.team.score,
      lives: newRound.inControl === teams.inActiveTeam.id ? LIVES : STEAL_LIVES,
      initialLives:
        newRound.inControl === teams.inActiveTeam.id ? LIVES : STEAL_LIVES,
    },
    currentRound: newRound,
  };
};

export const initCurrentRound = (inControl: TeamNames): CurrentRound => {
  return {
    inControl,
    total: 0,
    answered: [false, false, false, false, false, false],
    roundComplete: false,
  };
};

export const correctAnswer = (
  game: Game,
  questionIndex: number,
  count: number
): Game => {
  let answered: Answered = [...game.currentRound.answered];
  if (answered[questionIndex] === true) {
    return game;
  }
  answered.splice(questionIndex, 1, true);
  const teams = getTeamsStatus(game);

  return {
    ...game,
    currentRound: {
      ...game.currentRound,
      answered,
      roundComplete:
        !answered.includes(false) || teams.inActiveTeam.team.lives === 0,
      total: game.currentRound.total + count,
    },
  };
};

export const incorrectAnswer = (game: Game): Game => {
  const teams = getTeamsStatus(game);
  const lives = Math.max(0, teams.activeTeam.team.lives - 1);
  let inControl = game.currentRound.inControl;
  let roundComplete = false;
  if (lives === 0 && teams.inActiveTeam.team.lives > 0) {
    inControl = teams.inActiveTeam.id;
  } else if (lives === 0 && teams.inActiveTeam.team.lives === 0) {
    roundComplete = true;
  }
  console.log(lives, "x");
  return {
    ...game,
    currentRound: {
      ...game.currentRound,
      inControl,
      roundComplete,
    },
    [teams.activeTeam.name]: {
      ...teams.activeTeam.team,
      lives,
    },
  };
};

export const total = (game: Game, count: number): Game => {
  const teamName = `team${game.currentRound.inControl}`;
  const activeTeam = game[`team${game.currentRound.inControl}`];
  return {
    ...game,
  };
};
