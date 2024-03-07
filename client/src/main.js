import Cart from "./Cart.js"
import Detail from "./Detail.js";
import Home from "./Home.js";

const $app = document.querySelector(".App");

const routes = {
  "/": Home,
  "/products/:id": Detail,
  "/cart": Cart
};

$app.innerHTML = routes["/"].template();

export const changeUrl = async (requestedUrl) => {
  history.pushState(null, null, requestedUrl);

  const urlSegments = requestedUrl.split('/');
  if (urlSegments[1] === 'products') {
    // '/products/:id' 형태의 URL인 경우
    $app.innerHTML = await routes['/products/:id'].template(urlSegments[2]);
  } else {
    $app.innerHTML = await routes[requestedUrl].template();
  }
};

window.addEventListener("popstate", () => {
  changeUrl(window.location.pathname);
});