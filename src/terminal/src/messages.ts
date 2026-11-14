import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const welcomeMsg = () => {
  console.log("Available commands:");
  console.log("1: view all data");
  console.log("2: cash");
  console.log("3: credit card");
  console.log("4: loan");
  console.log("5: asset");
  console.log("");
};

export const askInitCommand = async (): Promise<number> => {
  const rl = readline.createInterface({ input, output });
  const welcomeUserChoice = await rl.question('Enter command [1-5] or help: ');
  rl.close();

  if (welcomeUserChoice === "help") {
    return 0;
  } else if (welcomeUserChoice in ["1", "2", "3", "4", "5"]) {
    return parseInt(welcomeUserChoice);
  } else {
    console.log("Invalid choice");
    return -1;
  }
};
