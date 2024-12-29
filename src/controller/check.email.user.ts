import  { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export async function checkUserEmailControllerRequest(req: Request, res: Response) {
    const email = req.params.email;
    if (!email) return res.status(400).json({ message: 'Email is required' });

    const exists = await service.verifyUserExists(email);
    return res.status(200).json({ exists });
}