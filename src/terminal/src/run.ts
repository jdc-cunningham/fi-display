import { checkTablesExist, checkDbExists, initTables } from "./storage.ts";
import { askInitCommand, welcomeMsg } from "./messages.ts";
import {
  processChoiceAsset, processChoiceCash, processChoiceCreditCard, processChoiceLoan,
  processChoiceViewAllData, processChoiceHelp
} from "./process.ts";

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
const choice = await askInitCommand();

const choiceMap = [
  processChoiceHelp,
  processChoiceViewAllData,
  processChoiceCash,
  processChoiceCreditCard,
  processChoiceLoan,
  processChoiceAsset
];

choiceMap[choice];
