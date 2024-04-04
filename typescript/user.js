var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var user = new User(10, "asutosh");
var userId = user.getId();
console.log("user id=", userId, "name=" + user.getName());
