import dns from "node:dns";

import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

import { router as fromDataRouter } from "./api/FromDataApi.js";
import { router as adminRouter } from "./api/AdminApi.js";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

app.use(
    cors({
        origin: [
            "https://biswas-it-firm-real-state-abdur-jhu.vercel.app",
            "http://localhost:5173",
        ],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Real Estate Lead Generation API is running",
    });
});

app.use("/api/from-data", fromDataRouter);
app.use("/api/admin", adminRouter);

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });

export default app;
