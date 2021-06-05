"use strict";
exports.__esModule = true;
exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank() {
        this.currentAmount = 1000;
    }
    Bank.prototype.loanCriteria = function () {
        return 0;
    };
    Bank.prototype.creditMoney = function (amount) {
        return this.currentAmount + amount;
    };
    Bank.prototype.debitMoney = function (amount) {
        return this.currentAmount - amount;
    };
    return Bank;
}());
exports.Bank = Bank;
