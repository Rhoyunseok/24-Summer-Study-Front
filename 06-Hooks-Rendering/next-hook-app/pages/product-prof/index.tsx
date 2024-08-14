import { useState, useEffect } from "react";
import { Product, Category } from "@/interfaces/products";

//임시 데이터 //db에서 가져온 데이터라고 가정
const categoryData: Category[] = [
  {
    category_id: 0,
    category: "전체",
    sort: 0,
  },
  {
    category_id: 1,
    category: "냉장고",
    sort: 1,
  },
  {
    category_id: 2,
    category: "TV",
    sort: 2,
  },
  {
    category_id: 3,
    category: "컴퓨터",
    sort: 3,
  },
];

const productData: Product[] = [
  {
    product_id: 1,
    category_id: 1,
    product_name: "비스포크 냉장고",
    manufacturer: "삼성",
    price: 2000000,
    stock: 10,
    image: "product1.jpg",
  },
  {
    product_id: 2,
    category_id: 1,
    product_name: "키친플레이트 냉장고",
    manufacturer: "LG",
    price: 1500000,
    stock: 5,
    image: "product2.jpg",
  },
  {
    product_id: 3,
    category_id: 2,
    product_name: "스마트 TV",
    manufacturer: "삼성",
    price: 3000000,
    stock: 7,
    image: "product3.jpg",
  },
  {
    product_id: 4,
    category_id: 2,
    product_name: "나노셀 TV",
    manufacturer: "LG",
    price: 2500000,
    stock: 3,
    image: "product4.jpg",
  },
  {
    product_id: 5,
    category_id: 3,
    product_name: "그램 노트북",
    manufacturer: "LG",
    price: 2000000,
    stock: 5,
    image: "product5.jpg",
  },
  {
    product_id: 6,
    category_id: 3,
    product_name: "맥북 프로",
    manufacturer: "Apple",
    price: 3000000,
    stock: 7,
    image: "product6.jpg",
  },
];

const ProductsProf = () => {
  //카테고리 목록 데이터 생성
  const [categories, setCategories] = useState<Category[]>([]);

  const [selectedCategory, setSelectedCategory] = useState<Category>({
    category_id: 0,
    category: "전체",
    sort: 0,
  });

  const [products, setProducts] = useState<Product[]>([]);

  //useEffect를 이용한 초기 데이터 로딩
  //최초 화면이 로딩되는 시점(마운팅시점)을 찾아서
  //백엔드에서 분류목록과 제품목록 데이터를 자져옵니다.
  useEffect(() => {
    //백엔드에서 데이터를 가져온다고 가정하고
    setCategories(categoryData);
    setProducts(productData);
    setSelectedCategory({ category_id: 0, category: "전체", sort: 0 });
  }, []);

  // 특정 카테고리를 선택했을 때 실행되는 함수
  useEffect(() => {
    const searchResult = productData.filter(
      (p) => p.category_id === selectedCategory.category_id
    );
    if (selectedCategory.category_id === 0) {
      setProducts(productData);
    } else {
      setProducts(searchResult);
    }
  }, [selectedCategory]);

  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category_id = parseInt(e.target.value);
    //선택된 단일 카테고리 정보 조회하기
    const category = categories.find(
      (c) => c.category_id === Number(e.target.value)
    ) as Category;
    setSelectedCategory(category);
    if (category_id === 0) {
      setProducts(productData);
    } else {
      setProducts(productData.filter((p) => p.category_id === category_id));
    }

    return (
      <div>
        {/* 제품 카테고리 선택영역 */}
        <div>
          <select
            value={selectedCategory.category_id}
            onChange={changeCategory}
          >
            {categories.map((category) => (
              <option key={category.category_id} value={category.category_id}>
                {category.category}
              </option>
            ))}
            <option value={0}>전체</option>
            <option value={1}>냉장고</option>
            <option value={2}>TV</option>
            <option value={3}>컴퓨터</option>
          </select>
        </div>

        {/* 제품 목록 출력영역 */}
        <div>
          <table>
            <thead>
              <tr>
                <th>제품번호</th>
                <th>제품명</th>
                <th>제조사</th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={index}>
                  <td>{p.product_id}</td>
                  <td>{p.product_name}</td>
                  <td>{p.manufacturer}</td>
                  <td>{p.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
};

export default ProductsProf;
