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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = void 0;
var UserModel_1 = __importDefault(require("../models/UserModel"));
var signup_1 = require("../zod/signup");
var bcrypt_1 = __importDefault(require("bcrypt"));
var createAccount = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, password, signupSchemaResult, userDocument, hashPassword, newUser, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                signupSchemaResult = signup_1.signupSchema.safeParse({ name: name_1, email: email, password: password });
                if (!signupSchemaResult.success) {
                    res.status(400).send(signupSchemaResult.error.issues[0].message);
                    return [2 /*return*/];
                }
                return [4 /*yield*/, UserModel_1.default.findOne({ email: email })];
            case 1:
                userDocument = _b.sent();
                if (userDocument) {
                    res.status(400).send("User already exists");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
            case 2:
                hashPassword = _b.sent();
                if (!hashPassword) {
                    res.status(500).send("Error hashing password");
                    return [2 /*return*/];
                }
                newUser = new UserModel_1.default({ name: name_1, email: email, password: hashPassword });
                return [4 /*yield*/, newUser.save()];
            case 3:
                _b.sent();
                res.status(201).send({ message: "Account created successfully" });
                return [2 /*return*/];
            case 4:
                error_1 = _b.sent();
                console.error("Error creating account:", error_1);
                res.status(500).send("Error creating account");
                return [2 /*return*/];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.createAccount = createAccount;