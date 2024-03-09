console.log("Hello world");

const sumFile = require('./sum2');

console.log(sumFile.sum(1,2));

let title = document.querySelector("#demo");

    title.innerHTML = `wynik: ${sumFile.sum(1,2)}`;

import style from "./css/index.scss";