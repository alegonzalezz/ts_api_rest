import  { Request, Response } from "express";
import { UserService } from "../services/user.service";

const service = new UserService();
export async function unionQuery(_req: Request, res: Response) {
    const data = await service.fetchUnionQuery();
    return res.status(200).json(data);
}