class Detail {
  async template(id) {
    const APIURL = `http://localhost:8080/products/${id}`
    async function getDetail() {
      try {
        const res = await fetch(APIURL, {
          method: "GET",
        });
        const json = await res.json();
        console.log(json)
        return json;
      } catch (error) {
        console.log(error);
      }
    }

    const detailData = await getDetail();

    return `
    <div class="ProductDetailPage">
    <h1>커피잔 상품 정보</h1>
    <div class="ProductDetail">
    <img src=${detailData.imageUrl}>
    <div class="ProductDetail__info">
      <h2>${detailData.name}</h2>
      <div class="ProductDetail__price">${detailData.price}원~</div>
      <select>${detailData.productOptions.map((data) => `<option>${data.name}</option>`)}
      </select>
      <div class="ProductDetail__selectedOptions">
        <h3>선택된 상품</h3>
        <ul>
          <li>
            커피잔 100개 번들 10,000원 <div><input type="number" value="10">개</div>
          </li>
          <li>
            커피잔 1000개 번들 15,000원 <div><input type="number" value="5">개</div>
          </li>
        </ul>
        <div class="ProductDetail__totalPrice">175,000원</div>
        <button class="OrderButton">주문하기</button>
      </div>
    </div>
  </div>
</div>

    `;
  }
}

export default new Detail();