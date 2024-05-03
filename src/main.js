// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector(".header");
const headerHeight = header.getBoundingClientRect().height;
// const headerHeight = header.offsetHeight; 소수점까지 정확한 수치가 필요하지 않을 때 사용 가능
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    header.classList.add("header--dark");
  } else {
    header.classList.remove("header--dark");
  }
});

// Home 섹션을 아래로 스크롤시 투명하게 처리함
const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Home 섹션 반절 아래로 스크롤시 Arrow 버튼 보이게 적용
// const arrow = document.querySelector(".arrow-up");
// const arrowHeight = arrow.offsetHeight;
// document.addEventListener("scroll", () => {
//   if (window.scrollY > 1 / homeHeight) {
//     arrow.style.opacity = 1;
//   } else {
//     arrow.style.opacity = 0;
//   }
// });

// Arrow up버튼을 아래로 스크롤시 투명하게 처리함
const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});
