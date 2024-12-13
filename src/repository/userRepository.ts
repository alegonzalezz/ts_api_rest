import QueryExecutor from './queryExecutor';

export class UserRepository {
    static async getUserById(userId: number): Promise<any> {
        return QueryExecutor.execute('GET_USER_BY_ID', [userId]);
    }

    static async getAllUsers(): Promise<any[]> {
        return QueryExecutor.execute('GET_ALL_USERS');
    }

    static async insertUser(name: string, email: string): Promise<any> {
        return QueryExecutor.execute('INSERT_USER', [name, email]);
    }
}
