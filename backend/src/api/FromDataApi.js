import express from "express";
import { prisma } from "../server.js";

export const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { name, email, phone, apartmentType, message } = req.body;

        if (!name || !email || !phone || !apartmentType || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const formData = await prisma.fromData.create({
            data: {
                name,
                email,
                phone,
                apartmentType,
                message,
            },
        });

        return res.status(201).json({
            success: true,
            message: "Form data submitted successfully",
            data: formData,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to submit lead",
            error: error.message,
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const formData = await prisma.fromdata.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return res.status(200).json({
            success: true,
            message: "Form data fetched successfully",
            data: formData,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Failed to fetch form data",
            error: error.message,
        });
    }
});