import axios from "axios";
import { getLocalStorage } from "../utils/util"

const localStorage = getLocalStorage("user")
let accessToken = null
if (localStorage) {
    accessToken = localStorage.accessToken;
}
export const http = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api',
    headers: {
        Authorization: `Bearer ${accessToken}`,
        tokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAxMCIsIkhldEhhblN0cmluZyI6IjAxLzA5LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcyNTE0ODgwMDAwMCIsIm5iZiI6MTY5ODY4NTIwMCwiZXhwIjoxNzI1Mjk2NDAwfQ.CPY1b9IiMcklQZ9hjqIzrdiOlQ5YnV4VpzGu_yZr7G0"
    },
    timeout: 30000,
})