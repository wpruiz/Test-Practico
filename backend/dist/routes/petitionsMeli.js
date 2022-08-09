"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petitionsMeli_1 = require("../controllers/petitionsMeli");
const router = (0, express_1.Router)();
router.get('/items', petitionsMeli_1.getItems);
router.get('/items/:id', petitionsMeli_1.getItem);
exports.default = router;
//# sourceMappingURL=petitionsMeli.js.map