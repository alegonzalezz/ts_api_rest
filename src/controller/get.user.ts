import  { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export async function getUserControllerRequest(req: Request, res: Response) : Promise<any>{
    const userId = parseInt(req.params.userId, 10);

    if (isNaN(userId)) {
        return res.status(400).json({ message: "Invalid userId parameter. Must be an integer." });
    }

    try {
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}