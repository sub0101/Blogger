import { allowedOrigins } from "../config/allowedOrigins.js";

const credentials = (req, res, next) => {
    console.log("Credentials")

    const origin = req.headers.origin;

    if (allowedOrigins.includes(origin)) {
        console.log("allowed")
        res.header('Access-Control-Allow-Credentials', true);
    }
    next();
}

export default credentials;