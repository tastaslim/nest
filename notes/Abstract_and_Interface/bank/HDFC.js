"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.HDFC = void 0;
var Bank_1 = require("./Bank");
var HDFC = /** @class */ (function (_super) {
    __extends(HDFC, _super);
    function HDFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HDFC.prototype.loanCriteria = function () {
        console.log("HDFC bank loan criteria");
        return 9000;
    };
    return HDFC;
}(Bank_1.Bank));
exports.HDFC = HDFC;
