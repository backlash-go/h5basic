export  let months = ['jan','feb','mar']

export const  YEAR = 2021


export class User {
    constructor(name) {
        this.name = name;
    }
}

import {sayBye,obj} from "./say.js";

sayBye("01-js")
console.log(obj)
obj.name = "ksadk"