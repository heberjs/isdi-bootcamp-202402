import Logger from "./Logger.mjs";

const logger = new Logger();

function showFeedback(error) {
  console.error(error);

  alert(error.message);
}

export { logger, Logger, showFeedback };
