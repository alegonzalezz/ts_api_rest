import { getUserById , insertUser, getAllUsers, checkUserExists, getUsersWithSomeSubject, getUsersWithAllSubjects, unionQuery} from "../repository/userRepository";

export class UserService {
    constructor() {
    }

    async getUserById(userId: number) {
        // Puedes agregar lógica adicional aquí en caso necesario
        const users: any[] = await getUserById(userId);
        if(users.length == 0){
            return null
        }else {
            return users[0]
        }
    }

    async createUser(name: string, email:string) {
        const user = await insertUser(name, email)
        return user
    }
    async getAllUsers(){
        return await getAllUsers()
    }

    async verifyUserExists(email:string){
        return await checkUserExists(email);
    }
     async  fetchUsersWithSomeSubject(subjectId: number) {
        return await getUsersWithSomeSubject(subjectId);
    }
     async fetchUsersWithAllSubjects() {
        return await getUsersWithAllSubjects();
    }
    
     async fetchUnionQuery() {
        return await unionQuery();
    }
}
