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
exports.getUserControllerRequest = getUserControllerRequest;
const user_service_1 = require("../services/user.service");
const userService = new user_service_1.UserService();
function getUserControllerRequest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const userId = parseInt(req.params.userId, 10);
        if (isNaN(userId)) {
            return res.status(400).json({ message: "Invalid userId parameter. Must be an integer." });
        }
        try {
            const user = yield userService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
            return res.json(user);
        }
        catch (error) {
            console.error("Error fetching user:", error);
            return res.status(500).json({ message: "Internal server error" });
        }
    });
}
