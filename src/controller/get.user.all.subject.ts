import  { Request, Response } from "express";
import { UserService } from "../services/user.service";

const service = new UserService();

export async function getUsersWithAllSubjects(_req: Request, res: Response) {
    const data = await service.fetchUsersWithAllSubjects();
    return res.status(200).json(data);
}