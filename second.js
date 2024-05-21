window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  console.log(`Vertical scroll: ${scrollY}px`);
});

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

setTimeout(() => {
  console.log("3초 후에 출력되는 텍스트입니다.");
}, 3000);
