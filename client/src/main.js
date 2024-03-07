import Cart from "./Cart.js"
import Detail from "./Detail.js";
import Home from "./Home.js";

const $app = document.querySelector(".App");

const routes = {
  "/": Home,
  "/products/": Detail,
  "/cart": Cart
};

$app.innerHTML = routes["/"].template();

export const changeUrl = (requestedUrl) => {
  history.pushState(null, null, requestedUrl);
  $app.innerHTML = routes[requestedUrl].template();
};

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("Product_img")) {
    // 이미지가 클릭된 경우 
    changeUrl("/products/");
  }
});

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});