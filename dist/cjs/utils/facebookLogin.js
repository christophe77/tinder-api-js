"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_1 = __importDefault(require("puppeteer"));
const db_1 = require("../db/db");
const delay = async (ms) => {
    return new Promise((res, _rej) => {
        setTimeout(() => {
            res(() => {
                console.log("delay ends");
            });
        }, ms);
    });
};
function checkUrlForToken(url) {
    if (url.includes("long_lived_token")) {
        const splittedUrl = url.split("&");
        splittedUrl.forEach(async (urlPart) => {
            if (urlPart.includes("long_lived_token")) {
                const longLivedToken = urlPart.split("=")[1];
                await (0, db_1.updateLoginDatas)({ long_lived_token: longLivedToken });
            }
        });
    }
}
async function checkPageSourceForUserId(source) {
    const hasUserId = source.includes("USER_ID");
    if (hasUserId) {
        const part = source.substring(source.lastIndexOf('"USER_ID":') + 1, source.lastIndexOf('"NAME":'));
        const userId = part
            .replace('USER_ID":"', "")
            .replace('"', "")
            .replace(",", "");
        if (userId !== "0") {
            await (0, db_1.updateLoginDatas)({ user_id: userId });
        }
    }
}
async function facebookLogin(credentials) {
    await (0, db_1.createDb)();
    const browser = await puppeteer_1.default.launch({
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    const login = async () => {
        await page.goto("https://facebook.com", {
            waitUntil: "networkidle2",
        });
        // watch url change
        page.on("framenavigated", async (frame) => {
            const url = frame.url();
            checkUrlForToken(url);
            const source = await page.content();
            checkPageSourceForUserId(source);
        });
        // bypass cookie alert
        await page.keyboard.press("Enter");
        await delay(1000);
        // fill form
        await page.waitForSelector("#email");
        await page.type("#email", credentials.email);
        await page.type("#pass", credentials.password);
        await delay(500);
        // login
        await page.click("#loginbutton");
        await page.waitForNavigation();
    };
    const getToken = async () => {
        await page.goto("https://www.facebook.com/dialog/oauth?client_id=464891386855067&redirect_uri=https://www.facebook.com/connect/login_success.html&scope=basic_info,email,public_profile,user_about_me,user_activities,user_birthday,user_education_history,user_friends,user_interests,user_likes,user_location,user_photos,user_relationship_details&response_type=token", {
            waitUntil: "networkidle2",
        });
    };
    await login();
    await getToken();
    await browser.close();
}
exports.default = facebookLogin;
