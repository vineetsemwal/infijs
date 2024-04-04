var ServiceImpl = /** @class */ (function () {
    function ServiceImpl() {
    }
    ServiceImpl.prototype.add = function (num1, num2) {
        var result = num1 + num2;
        return result;
    };
    return ServiceImpl;
}());
var service = new ServiceImpl();
var result = service.add(1, 5);
console.log("result=" + result);
