import  { Request, Response } from "express";
import { UserService } from "../services/user.service";

const service = new UserService();

export async function getUsersWithSomeSubject(req: Request, res: Response) {
    const subjectId = parseInt(req.params.subjectId, 10);
    if (isNaN(subjectId) || subjectId <= 0) {
        return res.status(400).json({ message: 'Invalid subject ID' });
    }

    const data = await service.fetchUsersWithSomeSubject(subjectId);
    return res.status(200).json(data);
}