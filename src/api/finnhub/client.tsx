import { API_KEY } from "./consts";

const finnhub = require("finnhub");

const apiKey = finnhub.ApiClient.instance.authentications["api_key"];
apiKey.apiKey = API_KEY;

export const finnhubClient = new finnhub.DefaultApi();
