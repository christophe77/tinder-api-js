import yajdb from "yajdb";
const { database, table } = yajdb;
const dbName = "facebook";
const tableName = "login_datas";
const tableStructure = [
    { name: "id", type: "string" },
    { name: "user_id", type: "string" },
    { name: "long_lived_token", type: "string" },
];
const defaultValues = [{ id: "1", user_id: "0", long_lived_token: "0" }];
export async function createDb() {
    try {
        await database.createAsync(dbName);
        await table.createAsync(dbName, tableName, tableStructure);
        await table.insertAsync(dbName, tableName, defaultValues);
        return true;
    }
    catch (_a) {
        return false;
    }
}
export async function updateLoginDatas(updatePayload) {
    const searchPayload = { id: "1" };
    try {
        await table.updateAsync(dbName, tableName, searchPayload, updatePayload);
        return true;
    }
    catch (_a) {
        return false;
    }
}
export async function getAuthDatas() {
    const searchPayload = { id: "1" };
    try {
        const response = await table.selectAsync(dbName, tableName, searchPayload);
        const { long_lived_token, user_id } = JSON.parse(response.message)[0];
        return {
            token: long_lived_token,
            facebook_id: user_id,
        };
    }
    catch (_a) {
        return {
            token: "0",
            facebook_id: "0",
        };
    }
}
