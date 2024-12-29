import { getSubjectById } from "../repository/userRepository";

export class SubjectService {
    constructor() {
    }

    async getSubjectById(subjectId: number) {
        // Puedes agregar lógica adicional aquí en caso necesario
        const subjects: any[] = await getSubjectById(subjectId);
        if(subjects.length == 0){
            return null
        }else {
            return subjects[0]
        }
    }
}