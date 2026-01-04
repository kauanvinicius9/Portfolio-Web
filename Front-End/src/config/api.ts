import { data } from "react-router-dom";

export const API_URL = "https://portfolio-v2-qsxb.onrender.com"

fetch(`${API_URL}/contacts/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});