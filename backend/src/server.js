import express from "express";
import cors from "cors";
import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

import { PrismaClient } from "../generated/prisma/client.ts";
import { router as fromDataRouter } from "./api/FromDataApi.js";
import { adminLogin } from "./api/AdminApi.js";
const app = express();

app.use(cors());
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

app.use("/api/from-data", fromDataRouter );
app.use("/api/get-from-data", fromDataRouter );
app.use("/api/admin", adminLogin);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});