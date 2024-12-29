-- Crear la base de datos (opcional, si no existe)
CREATE DATABASE ts_api_rest;

-- Seleccionar la base de datos
\c ts_api_rest;

-- Crear la tabla de usuarios
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS subjects (
    id SERIAL PRIMARY KEY,
    subject_code INT CHECK (subject_code BETWEEN 100 AND 999) NOT NULL UNIQUE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    max_students INT CHECK (max_students >= 0) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS grades (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    subject_id INT NOT NULL REFERENCES subjects(id) ON DELETE CASCADE,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    grade DECIMAL(5, 2) CHECK (grade >= 0 AND grade <= 10) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
