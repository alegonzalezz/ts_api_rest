import  { Request, Response } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export async function getAllUsers(_req: Request, res: Response) : Promise<any>{
    const users = await userService.getAllUsers();
    return res.status(200).json(users);
}