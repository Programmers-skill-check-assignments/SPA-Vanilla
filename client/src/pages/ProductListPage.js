import { changeUrl } from "../main.js";
import api from "../api.js";

class Home {
  async template(){
    const products = await api.getProducts();
    console.log(products);
    return `
      <div class="ProductListPage">
        <h1>상품목록</h1>
        <ul>
        ${products.map((data) => `
        <li class="Product">
        <img class="Product_img" id=${data.id} src=${data.imageUrl}>
        <div class="Product__info">
          <div>${data.name}</div>
          <div>${data.price}</div>
        </div>
        </li>`).join("")}
        </ul>
      </div>
    `
  }
}


export default new Home();