import Detail from "./detail.js";
import Home from "./home.js";

const $app = document.querySelector(".App");

const routes = {
  "/web": Home,
  "/web/products/1": Detail,
};

$app.innerHTML = routes["/web"].template();

export const changeUrl = (requestedUrl) => {
  history.pushState(null, null, requestedUrl);
  $app.innerHTML = routes[requestedUrl].template();
};

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("Product_img")) {
    // 이미지가 클릭된 경우 
    changeUrl("/web/products/1");
  }
});

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});