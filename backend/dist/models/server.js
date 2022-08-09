"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const petitionsMeli_1 = __importDefault(require("../routes/petitionsMeli"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPaths = {
            path: '/api',
        };
        this.app = (0, express_1.default)();
        this.app.use((0, cors_1.default)());
        this.port = process.env.PORT || '8000';
        this.routes();
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.path, petitionsMeli_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor corriendo en puerto ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map