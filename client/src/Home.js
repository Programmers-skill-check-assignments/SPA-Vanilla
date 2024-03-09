import { changeUrl } from "./main.js";

const APIURL = "http://localhost:8080/products"
export async function getList() {
  try {
    const res = await fetch(APIURL, {
      method: "GET",
    });
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

const listData = await getList();

window.addEventListener("click", (e) => {
  if (e.target.classList.contains("Product_img")) {
    // 이미지가 클릭된 경우 
    const product_id = e.target.getAttribute('id');
    changeUrl(`/products/${product_id}`);
    //console.log(product_id);
  }
});

class Home {
  template() {
    return `
    <div class="ProductListPage">
      <h1>상품목록</h1>
      <ul>
      ${listData.map((data) => `
      <li class="Product">
      <img class="Product_img" id=${data.id}
        src=${data.imageUrl}>
      <div class="Product__info">
        <div>${data.name}</div>
        <div>${data.price.toLocaleString()}원~</div>
      </div>
    </li>
      `).join("")}
      </ul>
    </div>
    `
  }
}

export default new Home();