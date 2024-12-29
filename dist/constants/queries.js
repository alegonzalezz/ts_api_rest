"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QUERIES = void 0;
exports.QUERIES = {
    GET_USER_BY_ID: 'SELECT * FROM users WHERE id = $1',
    GET_ALL_USERS: 'SELECT * FROM users',
    INSERT_USER: 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
};