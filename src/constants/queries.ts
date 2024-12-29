export const QUERIES = {
    // Users
    GET_USER_BY_ID: 'SELECT * FROM users WHERE id = $1',
    GET_ALL_USERS: 'SELECT * FROM users',
    INSERT_USER: 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',

    // Subjects
    GET_SUBJECT_BY_ID: 'SELECT * FROM subjects WHERE id = $1',

    // Grades
    GET_GRADES_BY_USER_ID: `
        SELECT g.id, g.grade, g.date, s.name AS subject_name
        FROM grades g
        JOIN subjects s ON g.subject_id = s.id
        WHERE g.user_id = $1`,
    CHECK_USER_EXISTS: `SELECT EXISTS (SELECT 1 FROM users WHERE email = $1)`,
    GET_USERS_WITH_SOME_SUBJECT: `
        SELECT u.*
        FROM users u
        WHERE EXISTS (
            SELECT 1
            FROM grades g
            WHERE g.user_id = u.id AND g.subject_id = $1
        )
    `,
    GET_USERS_WITH_ALL_SUBJECTS: `
        SELECT u.*
        FROM users u
        WHERE NOT EXISTS (
            SELECT 1
            FROM subjects s
            WHERE NOT EXISTS (
                SELECT 1
                FROM grades g
                WHERE g.user_id = u.id AND g.subject_id = s.id
            )
        )
    `,
    UNION_QUERY: `
        SELECT id, name, email FROM users
        UNION
        SELECT id, name, NULL AS email FROM subjects
    `,

};
