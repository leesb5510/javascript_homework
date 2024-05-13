function titlechange() {
  $("#titleId").text("제목아니다.");
}

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(2, 3));

function isEvenOrOdd(num) {
  if (num % 2 !== 0) {
    console.log("홀수입니다.");
  } else {
    console.log("짝수입니다.");
  }
}
console.log(isEvenOrOdd(4));

let person = {
  name: "병수",
  age: 20,
};

console.log("이름: " + person.name);
console.log("나이: " + person.age);
