import { QueryExecutor } from "./queryExecutor";

export async function getSubjectById(subjectId: number): Promise<any[]> {
    return QueryExecutor.execute('GET_SUBJECT_BY_ID', [subjectId]);
}