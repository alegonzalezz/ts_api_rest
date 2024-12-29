"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryExecutor = void 0;
const database_1 = __importDefault(require("../config/database"));
const queries_1 = require("../constants/queries");
class QueryExecutor {
    /**
     * Ejecuta una consulta SQL definida en QUERIES con los parámetros dados.
     * @param queryKey Clave de la consulta en QUERIES.
     * @param params Parámetros para la consulta.
     * @returns Resultado de la consulta.
     */
    static execute(queryKey_1) {
        return __awaiter(this, arguments, void 0, function* (queryKey, params = []) {
            try {
                const query = queries_1.QUERIES[queryKey];
                if (!query) {
                    throw new Error(`Query not found for key: ${queryKey}`);
                }
                const result = yield database_1.default.query(query, params);
                return result.rows;
            }
            catch (error) {
                console.error(`Error executing query: ${queryKey}`, error);
                throw error;
            }
        });
    }
}
exports.QueryExecutor = QueryExecutor;
exports.default = QueryExecutor;
