import Home from "./pages/ProductListPage.js";
import About from "./About.js";

const $app = document.querySelector(".App");

const routes = {
    "/" : Home,
    "/about" : About,
};

$app.innerHTML = await routes["/"].template();

export const changeUrl = async (requestedUrl) => {
    history.pushState(null,null,requestedUrl);
    // pushState(state,title,url) 넘겨줄 데이터, 변경할 브라우저 제목, 주소
    $app.innerHTML = await routes[requestedUrl].template();
};

window.addEventListener("click",async (e)=>{
    if(e.target.classList.contains("Product_img")){
        await changeUrl("/about");
    }
    else if(e.target.classList.contains("moveHome")){
        await changeUrl("/")
    }
});

window.addEventListener("popState",()=>{
    changeUrl(window.location.pathname);
});