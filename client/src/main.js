import Home from "./ProductListPage.js";
import About from "./About.js";

const $app = document.querySelector(".App");

const routes = {
    "/" : Home,
    "/about" : About,
};

$app.innerHTML = routes["/"].template();

export const changeUrl = (requestedUrl) => {
    history.pushState(null,null,requestedUrl);
    // pushState(state,title,url) 넘겨줄 데이터, 변경할 브라우저 제목, 주소
    $app.innerHTML = routes[requestedUrl].template();
};

window.addEventListener("click",(e)=>{
    if(e.target.classList.contains("Product")){
        changeUrl("/about");
    }
    else if(e.target.classList.contains("moveHome")){
        changeUrl("/")
    }
});

window.addEventListener("popState",()=>{
    changeUrl(window.location.pathname);
});