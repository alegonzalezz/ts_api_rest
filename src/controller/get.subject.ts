import  { Request, Response } from "express";
import { SubjectService } from "../services/subject.service";

const service = new SubjectService();

export async function getSubjectControllerRequest(req: Request, res: Response) : Promise<any>{
    const subjectId = parseInt(req.params.subjectId, 10);

    if (isNaN(subjectId)) {
        return res.status(400).json({ message: "Invalid subjectId parameter. Must be an integer." });
    }

    try {
        const user = await service.getSubjectById(subjectId);
        if (!user) {
            return res.status(404).json({ message: "Subject not found" });
        }
        return res.json(user);
    } catch (error) {
        console.error("Error fetching subject:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}