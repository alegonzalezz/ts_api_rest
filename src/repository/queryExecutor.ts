import pool from '../config/database';
import { QUERIES } from '../constants/queries';

export class QueryExecutor {
    /**
     * Ejecuta una consulta SQL definida en QUERIES con los parámetros dados.
     * @param queryKey Clave de la consulta en QUERIES.
     * @param params Parámetros para la consulta.
     * @returns Resultado de la consulta.
     */
    static async execute(queryKey: keyof typeof QUERIES, params: any[] = []): Promise<any> {
        try {
            const query = QUERIES[queryKey];
            if (!query) {
                throw new Error(`Query not found for key: ${queryKey}`);
            }

            const result = await pool.query(query, params);
            return result.rows;
        } catch (error) {
            console.error(`Error executing query: ${queryKey}`, error);
            throw error;
        }
    }
}

export default QueryExecutor;
