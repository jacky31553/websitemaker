// 1) 데이터(연습용): 주종 -> 가게 목록
const DATA = {
  "소주": [
    { name: "한강포차", meta: "서울 · 소주/안주 · 18:00-02:00" },
    { name: "동네주막", meta: "서울 · 가성비 · 17:00-01:00" },
    { name: "청춘포차", meta: "서울 · 레트로 · 19:00-03:00" },
  ],
  "맥주": [
    { name: "브루하우스", meta: "서울 · 수제맥주 · 16:00-24:00" },
    { name: "펍 101", meta: "서울 · 라거/에일 · 17:00-01:00" },
  ],
  "와인": [
    { name: "와인바 루나", meta: "서울 · 글라스 와인 · 18:00-01:00" },
    { name: "빈티지 테이블", meta: "서울 · 내추럴 와인 · 17:00-24:00" },
  ],
  "위스키": [
    { name: "싱글몰트 라운지", meta: "서울 · 몰트/하이볼 · 19:00-02:00" },
    { name: "바 오크", meta: "서울 · 클래식 바 · 18:00-01:00" },
  ],
};

// 2) 필요한 DOM 가져오기
const categoryWrap = document.getElementById("category-buttons");
const screenCategory = document.getElementById("screen-category");
const screenShops = document.getElementById("screen-shops");
const shopsTitle = document.getElementById("shops-title");
const shopList = document.getElementById("shop-list");
const backBtn = document.getElementById("back-btn");

// 3) 카테고리 버튼을 자동으로 만들기
function renderCategoryButtons() {
  const categories = Object.keys(DATA);

  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = cat;

    btn.addEventListener("click", () => {
      openCategory(cat);
    });

    categoryWrap.appendChild(btn);
  });
}

// 4) 특정 주종을 열면: 타이틀/목록 그리기 + 화면 전환
function openCategory(categoryName) {
  shopsTitle.textContent = `${categoryName} 파는 가게`;
  renderShopList(DATA[categoryName]);

  screenCategory.classList.add("hidden");
  screenShops.classList.remove("hidden");
}

// 5) 목록 렌더링
function renderShopList(shops) {
  shopList.innerHTML = "";

  shops.forEach((s) => {
    const li = document.createElement("li");
    li.className = "shop";

    li.innerHTML = `
      <p class="name">${s.name}</p>
      <p class="meta">${s.meta}</p>
    `;

    shopList.appendChild(li);
  });
}

// 6) 뒤로가기
backBtn.addEventListener("click", () => {
  screenShops.classList.add("hidden");
  screenCategory.classList.remove("hidden");
});

// 7) 시작!
renderCategoryButtons();

