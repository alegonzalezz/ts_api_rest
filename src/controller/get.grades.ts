import  { Request, Response } from "express";
import { GradesService } from "../services/grades.service";

const service = new GradesService();

export async function getGradesControllerRequest(req: Request, res: Response) : Promise<any>{
    const userId = parseInt(req.params.userId, 10);
    if (isNaN(userId) || userId <= 0) return res.status(400).json({ message: 'Invalid user ID' });

    const grades = await service.getGradesByUserId(userId);
    return res.status(200).json(grades);
}