const { isNullOrUndefined, isString, isNumber } = require("util");
function isNotEmptyAndIsString(value) {
 return !isNullOrUndefined(value) && isString(value);
}
function isNotEmptyAndIsNumber(value) {
 return !isNullOrUndefined(value) && isNumber(value);
}
exports.body = (req, res, next) => {
 let method = req.method;
 if (method == "POST" || method == "PUT") {
 let data = req.body;
 if (
 (method == "POST"
 ? isNullOrUndefined(data.id)
 : isNotEmptyAndIsNumber(data.id)) &&
 isNotEmptyAndIsString(data.name) &&
 isNotEmptyAndIsString(data.description) &&
 isNotEmptyAndIsString(data.category) &&
 isNotEmptyAndIsNumber(data.price)
 ) {
 next();
 } else {
 res.status(400).send({
 error: { status: 400, description: "Invalid object format." },
 });
 }
 } else {
 next();
 }
};