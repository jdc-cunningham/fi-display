import { checkTablesExist, checkDbExists, initTables } from "./storage.ts";
import { askInitCommand, welcomeMsg } from "./messages.ts";

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
welcomeMsg();
askInitCommand();
