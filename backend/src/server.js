import express from "express";
import cors from "cors";
import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client.ts";

import { router as fromDataRouter } from "./api/FromDataApi.js";
import { router as adminRouter } from "./api/AdminApi.js";

const app = express();

app.use(
    cors({
        origin: "https://biswas-it-firm-real-state-abdur-jhu.vercel.app",
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());

const adapter = new PrismaMariaDb(process.env.DATABASE_URL);

export const prisma = new PrismaClient({
    adapter,
});

app.get("/", (req, res) => {
    res.json({
        message: "Real Estate Lead Generation API is running",
    });
});

app.use("/api/from-data", fromDataRouter);
app.use("/api/admin", adminRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
