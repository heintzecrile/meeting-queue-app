import man_0 from "./man_0.svg";
import man_1 from "./man_1.svg";
import man_2 from "./man_2.svg";
import man_3 from "./man_3.svg";
import woman_0 from "./woman_0.svg";
import woman_1 from "./woman_1.svg";
import woman_2 from "./woman_2.svg";
import woman_3 from "./woman_3.svg";

const manArray = [man_0, man_1, man_2, man_3];
const womanArray = [woman_0, woman_1, woman_2, woman_3];

const randomElement = array => array[Math.floor(Math.random() * array.length)];

export const man = () => randomElement(manArray);
export const woman = () => randomElement(womanArray);
