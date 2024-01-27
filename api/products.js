import axios from "axios";

export async function getProducts({ category }) {
  let link = "https://fakestoreapi.com/products";

  if (category) {
    link += `/category/${category}`;
  }

  return await axios.get(link).then((res) => {
    res.data;
  });
}

export async function getSingleProduct({ id }) {
  let link = `https://fakestoreapi.com/products/${id}`;

  return await axios.get(link).then((res) => res.data);
}
