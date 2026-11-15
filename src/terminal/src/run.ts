import { checkTablesExist, checkDbExists, initTables } from "./storage.ts";
import { askInitCommand, welcomeMsg } from "./messages.ts";
import {
  processChoiceAsset, processChoiceCash, processChoiceCreditCard, processChoiceLoan,
  processChoiceViewAllData, processChoiceHelp
} from "./process.ts";

// setup DB and tables
if (!await checkDbExists()) {
  throw new Error("Database doesn't exist, see storage.ts");
}

if (!checkTablesExist()) {
  try {
    initTables();
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create tables");
  }
}

// welcome message
// choose 1-5 or help
welcomeMsg();
const choice: number = await askInitCommand();

const choiceMap: Function[] = [
  processChoiceHelp,
  processChoiceViewAllData,
  processChoiceCash,
  processChoiceCreditCard,
  processChoiceLoan,
  processChoiceAsset
];

const userChoice = choiceMap[choice];

if (!userChoice) {
  console.error("Invalid choice");
} else {
  userChoice();
}
