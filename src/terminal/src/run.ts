import { checkTablesExist, checkDbExists, initTables } from "./storage.ts";

if (await checkDbExists()) {
  console.log("yes");
} else {
  console.log("no");
}
