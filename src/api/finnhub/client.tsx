import { API_KEY } from "./consts";

const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = API_KEY;

export const finnhubClient = new finnhub.DefaultApi();
