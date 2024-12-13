"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const example_1 = __importDefault(require("./routes/example"));
const app = (0, express_1.default)();
const PORT = 3000;
// Middleware
app.use(express_1.default.json());
// Rutas
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});
app.use('/api', example_1.default);
// Escuchar en el puerto
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
