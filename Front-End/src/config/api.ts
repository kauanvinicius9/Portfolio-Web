import { data } from "react-router-dom";

export const API_URL = "https://back-end.onrender.com"

fetch(`${API_URL}/contacts/`, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});