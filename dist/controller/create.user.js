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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserControllerRequest = createUserControllerRequest;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
function createUserControllerRequest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, email } = req.body;
        if (!name || typeof name !== "string") {
            return res.status(400).json({ message: "Invalid or missing 'name' parameter." });
        }
        if (!email || typeof email !== "string") {
            return res.status(400).json({ message: "Invalid or missing 'email' parameter." });
        }
        try {
            const newUser = yield userService.createUser(name, email);
            return res.status(201).json(newUser); // Devuelve el usuario creado con status 201
        }
        catch (error) {
            console.error("Error creating user:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    });
}
