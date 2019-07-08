"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var leapyear_1 = __importDefault(require("../leapyear"));
describe('Leap Year', function () {
    it('says leap year', function () {
        expect(leapyear_1.default()).toEqual('Leap Year!');
    });
});
//# sourceMappingURL=test.js.map