import { DatabaseSync } from "node:sqlite";
import { existsSync } from "node:fs";
import { access } from "node:fs/promises";

const dbPath: string = "./fi-display.db";
const db: DatabaseSync = new DatabaseSync(dbPath);

// going to use TEXT for numbers too since can't do decimals
// and storing just 2 digits like a monthly payment could be
// confused for cents by an automatic 2 decimal places
// these will be integers or decimals but no symbols
export const initTables = () => {
  // credit cards
  db.exec(`
    CREATE TABLE IF NOT EXISTS credit_cards (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      balance TEXT NOT NULL,
      min_due TEXT NOT NULL,
      due_date INTEGER NOT NULL,
      is_closed INTEGER NOT NULL,
      apr TEXT NOT NULL,
      credit_limit TEXT NOT NULL
    )
  `);

  // loans
    db.exec(`
    CREATE TABLE IF NOT EXISTS loans (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount TEXT NOT NULL,
      balance TEXT NOT NULL,
      min_due TEXT NOT NULL,
      due_date INTEGER NOT NULL,
      is_closed INTEGER NOT NULL,
      apr TEXT NOT NULL
    )
  `);

  // cash
  db.exec(`
    CREATE TABLE IF NOT EXISTS cash (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      amount TEXT NOT NULL
    )
  `);

  // assets
  db.exec(`
    CREATE TABLE IF NOT EXISTS assets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      value TEXT NOT NULL
    )
  `);
};

export const checkDbExists = async (): Promise<boolean> => {
  try {
    await access(dbPath);
    return true;
  } catch {
    return false;
  }
};

// lazy since table creation above is all in one
export const checkTablesExist = (): boolean => {
  const tables: string[] = ["credit_cards", "loans", "cash", "assets"];

  const missingTable: boolean = tables.some((table: string) => {
    const row = db.prepare(
      "SELECT name FROM sqlite_master WHERE type = 'table' AND name = ?"
    )
    .get(table);

    return row;
  });

  return !missingTable;
};
