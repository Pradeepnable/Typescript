"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
// Is there any inference in type in terms of variables then thats ok 
// but in case of function its is not ok
addTwo(5);
