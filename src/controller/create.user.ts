import  { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export async function createUserControllerRequest(req: Request, res: Response) : Promise<any>{
    const { name, email } = req.body;

    if (!name || typeof name !== "string") {
        return res.status(400).json({ message: "Invalid or missing 'name' parameter." });
    }

    if (!email || typeof email !== "string") {
        return res.status(400).json({ message: "Invalid or missing 'email' parameter." });
    }

    try {
        const newUser = await userService.createUser(name, email);
        return res.status(201).json(newUser); // Devuelve el usuario creado con status 201
    } catch (error) {
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}