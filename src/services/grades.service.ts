import { getGradesByUserId } from "../repository/grades.repository";

export class GradesService {
    constructor() {
    }

    async getGradesByUserId(userId: number) {
        return await getGradesByUserId(userId);
        
    }
}