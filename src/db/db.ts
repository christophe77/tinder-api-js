import yajdb from "yajdb";
import { StringMap } from "yajdb/dist/esm/types/operations";
import { AuthData } from "../types/auth";
const { database, table } = yajdb;

const dbName = "facebook";
const tableName = "login_datas";
const tableStructure = [
  { name: "id", type: "string" },
  { name: "user_id", type: "string" },
  { name: "long_lived_token", type: "string" },
];
const defaultValues = [{ id: "1", user_id: "0", long_lived_token: "0" }];
const searchPayload = { id: "1" };

export async function createDb(): Promise<boolean> {
  try {
    await database.createAsync(dbName);
    await table.createAsync(dbName, tableName, tableStructure);
    const response = await table.selectAsync(dbName, tableName, searchPayload);
    if (response.message === "[]" || response.message === "table is empty") {
      await table.insertAsync(dbName, tableName, defaultValues);
    }
    return true;
  } catch {
    return false;
  }
}
export async function updateLoginDatas(
  updatePayload: StringMap
): Promise<boolean> {
  try {
    await table.updateAsync(dbName, tableName, searchPayload, updatePayload);
    return true;
  } catch {
    return false;
  }
}
export async function getAuthDatas(): Promise<AuthData> {
  try {
    const response = await table.selectAsync(dbName, tableName, searchPayload);
    const { long_lived_token, user_id } = JSON.parse(response.message)[0];
    return {
      token: long_lived_token,
      facebook_id: user_id,
    };
  } catch {
    return {
      token: "0",
      facebook_id: "0",
    };
  }
}
