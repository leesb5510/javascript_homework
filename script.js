const people = [
  {
    이름: "철수",
    나이: 19,
    성별: "남",
  },
  {
    이름: "짱구",
    나이: 20,
    성별: "남",
  },
  {
    이름: "유리",
    나이: 21,
    성별: "여",
  },
];

console.log(people);

const container = document.querySelector(".container");

people.forEach((person) => {
  const html = `
 <div class="infoPeople">
   <div>이름: ${person.이름}</div>
   <div>나이: ${person.나이}</div>
   <div>성별: ${person.성별}</div>
 </div>`;
  container.innerHTML += html;
});

// 문제 3
const woman = people.find((person) => {
  return person.성별 === "여";
});

console.log(woman);

// 문제 4
const result = people.filter((person) => {
  return person.성별 === "남";
});

console.log(result);

// 문제 5
const levelUp = people.map((person) => ({
  ...person,
  나이: person.나이 + 10,
}));

console.log("원래나이: ", people);
console.log("업데이트된 나이: ", levelUp);

// 문제 6
const peopleCopy = [...people];
peopleCopy.sort((a, b) => {
  return b.나이 - a.나이;
});

console.log("sort전:", people);
console.log("copy, sort 후: ", peopleCopy);

// 문제 7
const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;

console.log(이름);
console.log(나이);
console.log(주소);
