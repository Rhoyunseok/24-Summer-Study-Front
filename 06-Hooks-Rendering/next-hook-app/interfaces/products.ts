export interface Category {
  category_id: number;
  category: string;
  sort: number;
}

export interface Product {
  product_id: number; // 상품번호
  category_id: number; // 카테고리번호
  product_name: string; // 상품명
  manufacturer: string; // 제조사
  price: number; // 가격
  stock: number; // 재고
  image: string; // 이미지
}
