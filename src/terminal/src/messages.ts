import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import type { CreditCard } from "./models.ts";

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

export const enterCreditCardInfo = async (): Promise<CreditCard> => {
  // there's no validation being done here assumes straight shot values are good
  console.log("Enter credit card info:");
  const rl = readline.createInterface({ input, output });
  const cardName = await rl.question("Name: ");
  const cardBalance = await rl.question("Balance (0,000.00): $");
  const cardMinDue = await rl.question("Mininum Due: $");
  const cardDueDate = await rl.question("Due Date (00): ");
  const cardIsClosed = await rl.question("Is Closed (y/n): ");
  const cardAPR = await rl.question("apr (00.00): ");
  const cardLimit = await rl.question("limit (0,000.00): ");
  rl.close();

  const cardInfo: CreditCard = {
    name: cardName,
    balance: parseFloat(cardBalance),
    minDue: parseInt(cardMinDue),
    dueDate:  parseInt(cardDueDate),
    isClosed: cardIsClosed === "y" ? 1 : 0,
    apr: parseFloat(cardAPR),
    limit: parseInt(cardLimit)
  };

  console.log(cardInfo);

  return cardInfo;
};
