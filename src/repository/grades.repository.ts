import { QueryExecutor } from "./queryExecutor";

export async function getGradesByUserId(userId: number): Promise<any[]> {
    return QueryExecutor.execute('GET_GRADES_BY_USER_ID', [userId]);
}