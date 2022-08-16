import photo_4 from "./4.png";
import photo_6 from "./6.png";
import photo_9 from "./9.png";
import photo_12 from "./12.png";
import photo_13 from "./13.png";
import photo_15 from "./15.png";
import photo_17 from "./17.png";
import photo_20 from "./20.png";
import photo_22 from "./22.png";
// import photo_25 from "./25.png";
import photo_27 from "./27.png";
import photo_31 from "./31.png";
import photo_33 from "./33.png";
import photo_35 from "./35.png";
import photo_36 from "./36.png";
import photo_38 from "./38.png";
// import photo_44 from "./44.png";
import photo_45 from "./45.png";
import photo_47 from "./47.png";
import photo_50 from "./50.png";
import photo_54 from "./54.png";
import photo_58 from "./58.png";
import Manisha from "./Manisha.png";
import photo_67 from "./67.png";
// import photo_70 from "./70.png";
import Grace from "./Grace.jpg";
import QiShan from "./QiShan.png";
import Udaykant from "./Uday.png";
import Duleendra from "./Duleendra.jpeg";
import Fabian from "./Fabian.png";
import Ian from "./Ian.png";
import Miko from "./Miko.png";
import Sharaf from "./Sharaf.png";
import Sherry from "./Sherry.png";
import Sowmya from "./Sowmya.jpeg";
import Steven from "./Steven.png";
import Kenan from "./Kenan.jpeg";
import Preeti from "./Preeti.jpg";
import Shruti from "./Shruti.jpeg";
import JM from "./JM.jpg";
import Loki from "./Loki.png";
import Ben from "./Ben.jpg";
import Nick from "./Nick.jpg";
import Nicholas from "./Nicholas.png";
import Mizu from "./Mizu.png";
import Ostin from "./ostin.png";
import Johannes from "./johannes.png";
import Abhishek from "./abhishek.png";
import Sheldon from "./Sheldon.png";
import Narmeet from "./Narmeet.png";
import Szehan from "./Szehan.png";

import { man, woman } from "./avatar";

const TEAM = {
  MARKETING: "marketing team",
  SALES: "sales team",
  INVESTMENTS: "investments team",
  UX: "ui/ux team",
  DEVELOPMENT: "development team",
  FINANCE: "finance team",
  TESTING: "testing team",
  BA: "b.a. team",
  PM: "p.m. team",
  SUPPORT: "support team",
  DESIGN: "design team",
  MANAGEMENT: "management team",
  HR: "hr team",
  OPERATIONS: "operations team",
};

const employees = [
  {
    content: "Pierre",
    image: photo_38,
    team: TEAM.INVESTMENTS,
  },
  {
    content: "Madeline",
    image: photo_31,
    team: TEAM.UX,
  },
  {
    content: "Hui Min",
    image: photo_22,
    team: TEAM.UX,
  },
  {
    content: "Ajay",
    image: photo_4,
    team: TEAM.SALES,
  },

  {
    content: "Shekhar",
    image: photo_47,
    team: TEAM.TESTING,
  },
  {
    content: "Azman",
    image: photo_12,
    team: TEAM.DESIGN,
  },
  {
    content: "Kruthika",
    image: photo_27,
    team: TEAM.BA,
  },
  {
    content: "Nithin",
    image: photo_36,
    team: TEAM.DEVELOPMENT,
  },
  // {
  //   content: "Dani",
  //   image: photo_44,
  //   team: TEAM.MARKETING,
  // },
  {
    content: "Manisha",
    image: Manisha,
    team: TEAM.TESTING,
  },
  {
    content: "Dan",
    image: photo_17,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Yusuf",
    image: photo_54,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Tony",
    image: photo_50,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Maris",
    image: photo_9,
    team: TEAM.BA,
  },
  {
    content: "Heintze",
    image: photo_58,
    team: TEAM.HR,
  },
  {
    content: "Haja",
    image: photo_20,
    team: TEAM.MANAGEMENT,
  },
  {
    content: "Mellisa",
    image: photo_33,
    team: TEAM.MANAGEMENT,
  },
  {
    content: "Carina",
    image: photo_15,
    team: TEAM.SALES,
  },
  {
    content: "Basanti",
    image: photo_13,
    team: TEAM.TESTING,
  },
  {
    content: "Sneha",
    image: woman(),
    team: TEAM.TESTING,
  },
  {
    content: "Santosh",
    image: photo_45,
    team: TEAM.TESTING,
  },
  {
    content: "David",
    image: photo_67,
    team: TEAM.UX,
  },
  {
    content: "Sowmya",
    image: Sowmya,
    team: TEAM.PM,
  },
  {
    content: "Miko",
    image: Miko,
    team: TEAM.UX,
  },
  {
    content: "Ian",
    image: Ian,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Johannes",
    image: Johannes,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Kenan",
    image: Kenan,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Shruti",
    image: Shruti,
    team: TEAM.TESTING,
  },
  {
    content: "Preeti",
    image: Preeti,
    team: TEAM.TESTING,
  },
  {
    content: "Geeta",
    image: woman(),
    team: TEAM.TESTING,
  },
  {
    content: "Qi Shan",
    image: QiShan,
    team: TEAM.DESIGN,
  },
  // {
  //   content: "Phil",
  //   image: photo_70,
  //   team: TEAM.PM,
  // },
  {
    content: "Steven",
    image: Steven,
    team: TEAM.UX,
  },
  {
    content: "Narmeet",
    image: Narmeet,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Grace",
    image: Grace,
    team: TEAM.INVESTMENTS,
  },
  {
    content: "Sharaf",
    image: Sharaf,
    team: TEAM.PM,
  },
  {
    content: "Duleendra",
    image: Duleendra,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Fabian",
    image: Fabian,
    team: TEAM.BA,
  },
  {
    content: "John",
    image: man(),
    team: TEAM.SUPPORT,
    isWinner: true,
  },
  {
    content: "Sherry",
    image: Sherry,
    team: TEAM.OPERATIONS,
  },
  {
    content: "JM",
    image: JM,
    team: TEAM.SUPPORT,
  },
  {
    content: "Charitie",
    image: woman(),
    team: TEAM.SUPPORT,
  },
  {
    content: "Udaykant",
    image: Udaykant,
    team: TEAM.BA,
  },
  {
    content: "Mizu",
    image: Mizu,
    team: TEAM.MARKETING,
    // isWinner: true,
  },
  {
    content: "Ostin",
    image: Ostin,
    team: TEAM.BA,
  },
  {
    content: "Nick",
    image: Nick,
    team: TEAM.SALES,
  },
  {
    content: "Nicholas",
    image: Nicholas,
    team: TEAM.BA,
  },
  {
    content: "Beyhan",
    image: man(),
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Prasoon",
    image: man(),
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Bernadette",
    image: woman(),
    team: TEAM.TESTING,
  },
  {
    content: "Chinmay",
    image: man(),
    team: TEAM.TESTING,
  },
  {
    content: "Thirupathi",
    image: man(),
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Ashwini",
    image: woman(),
    team: TEAM.TESTING,
  },
  {
    content: "Pravinkumar",
    image: man(),
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Vipul",
    image: man(),
    team: TEAM.PM,
  },
  {
    content: "Avinash",
    image: man(),
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Aidan",
    image: man(),
    team: TEAM.TESTING,
  },
  {
    content: "Georgia",
    image: woman(),
    team: TEAM.INVESTMENTS,
  },
  {
    content: "Sachin",
    image: man(),
    team: TEAM.FINANCE,
  },
  {
    content: "Ben",
    image: Ben,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Abhishek",
    image: Abhishek,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Sheldon",
    image: Sheldon,
    team: TEAM.DEVELOPMENT,
  },
  {
    content: "Sze Han",
    image: Szehan,
    team: TEAM.MARKETING,
  },
];

const interns = [
  {
    content: "Sana",
    image: woman(),
    team: TEAM.SALES,
  },
];

const tradeSocio = [
  {
    content: "Simon",
    image: man(),
    team: TEAM.SUPPORT,
  },
];

function shuffleArray(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

const nameList = shuffleArray([...employees, ...tradeSocio].slice());
const aToZList = [...employees, ...tradeSocio]
  .slice()
  .sort((a, b) => (a.content > b.content ? 1 : -1));
const zToAList = [...employees, ...tradeSocio]
  .slice()
  .sort((a, b) => (a.content > b.content ? -1 : 1));

const shuffledInterns = shuffleArray(interns);

const addExtras = (arr) => {
  arr.unshift({
    content: "Ned",
    image: photo_35,
    team: TEAM.MANAGEMENT,
  });

  arr.push(...shuffledInterns);
  arr.push({
    content: "Loki",
    image: Loki,
    team: TEAM.MANAGEMENT,
  });
  arr.push({
    content: "Aki",
    image: photo_6,
    team: TEAM.MANAGEMENT,
  });

  return arr;
};

const random = addExtras(nameList);
const az = addExtras(aToZList);
const za = addExtras(zToAList);

export { az, za };
export default random;
