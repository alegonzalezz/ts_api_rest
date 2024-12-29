import { QueryExecutor } from "./queryExecutor";

export async function getUserById(userId: number): Promise<any[]> {
    return QueryExecutor.execute('GET_USER_BY_ID', [userId]);
}

export async function getAllUsers(): Promise<any[]> {
    return QueryExecutor.execute('GET_ALL_USERS');
}

export async function checkUserExists(email: string): Promise<boolean> {
    const result = await QueryExecutor.execute('CHECK_USER_EXISTS', [email]);
    return result[0]?.exists || false;
}

export async function insertUser(name: string, email: string): Promise<any> {
    return QueryExecutor.execute('INSERT_USER', [name, email]);
}
export async function getUsersWithSomeSubject(subjectId: number): Promise<any[]> {
    return QueryExecutor.execute('GET_USERS_WITH_SOME_SUBJECT', [subjectId]);
}



export async function getSubjectById(subjectId: number): Promise<any[]> {
    const queryKey = 'GET_SUBJECT_BY_ID';
    const params = [subjectId];
    return QueryExecutor.execute(queryKey, params);
}


export async function getUsersWithAllSubjects(): Promise<any[]> {
    return QueryExecutor.execute('GET_USERS_WITH_ALL_SUBJECTS');
}

export async function unionQuery(): Promise<any[]> {
    return QueryExecutor.execute('UNION_QUERY');
}