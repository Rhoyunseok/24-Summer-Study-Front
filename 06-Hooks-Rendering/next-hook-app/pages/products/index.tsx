import { useState, useEffect } from "react";
import { Category, Product } from "@/interfaces/products";

const Products = () => {
  //최초 컴포넌트가 화면에 렌더링될때 실행되는 useEffect훅 정의
  //제품 목록을 조회해서 상태데이터로 저장
  //interface products.ts에 정의된 Category, Product타입을 이용해서 상태데이터를 정의
  const [Categories, setCategories] = useState<Category[]>([
    { category_id: 0, category: "전체", sort: 0 },
    { category_id: 1, category: "노트북", sort: 1 },
    { category_id: 2, category: "컴퓨터", sort: 2 },
    { category_id: 3, category: "냉장고", sort: 3 },
  ]);

  //콤보박스에서 선택된 단일 분류정보
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    category_id: 0,
    category: "",
    sort: 0,
  });

  //제품 테이블에 바인딩될 제품 목록
  const [products, setProducts] = useState<Product[]>([
    {
      product_id: 1,
      category_id: 1,
      product_name: "LG 그램",
      manufacturer: "LG",
      price: 1200000,
      stock: 10,
      image: "gram.jpg",
    },
    {
      product_id: 2,
      category_id: 1,
      product_name: "맥북 프로",
      manufacturer: "Apple",
      price: 2200000,
      stock: 5,
      image: "macbook.jpg",
    },
    {
      product_id: 3,
      category_id: 2,
      product_name: "LG 컴퓨터",
      manufacturer: "LG",
      price: 448750,
      stock: 10,
      image: "gram.jpg",
    },
    {
      product_id: 4,
      category_id: 2,
      product_name: "맥북 컴",
      manufacturer: "Apple",
      price: 5578741984,
      stock: 5,
      image: "macbook.jpg",
    },
    {
      product_id: 5,
      category_id: 3,
      product_name: "LG 냉장고",
      manufacturer: "LG전자",
      price: 120000000,
      stock: 10,
      image: "gram.jpg",
    },
    {
      product_id: 6,
      category_id: 3,
      product_name: "삼성 냉장고",
      manufacturer: "삼성전자",
      price: 11111110,
      stock: 5,
      image: "macbook.jpg",
    },
  ]);
  //handleCategoryChange함수 정의
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category_id = parseInt(e.target.value);
    const category = Categories.find((c) => c.category_id === category_id);
    setSelectedCategory(category!);
  };

  //filterProducts함수 정의
  const filterProducts = (category: Category) => {
    if (category.category_id === 0) {
      return products;
    }
    return products.filter((p) => p.category_id === category.category_id);
  };

  return (
    <div>
      <h1>Products</h1>
      {/* 상품목록을 선택할 수 있는 칸 */}
      <div>
        <select
          onChange={handleCategoryChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          {Categories.map((category) => (
            <option key={category.category_id} value={category.category_id}>
              {category.category}
            </option>
          ))}
        </select>
      </div>

      {/* 상품목록을 표시하는 칸 */}
      <div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>상품번호</th>
              <th>카테고리</th>
              <th>상품명</th>
              <th>제조사</th>
              <th>가격</th>
              <th>재고</th>
            </tr>
          </thead>
          <tbody>
            {filterProducts(selectedCategory).map((product) => (
              //정렬 classname
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.category_id}</td>
                <td>{product.product_name}</td>
                <td>{product.manufacturer}</td>
                <td>{product.price}</td>
                <td>{product.stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
