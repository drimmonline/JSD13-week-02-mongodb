import axiosInstance from "./axiosInstance";

export const productService = {
  getAllProducts: async () => {
    const response = await axiosInstance.get("/products");
    return response.data;
  },
  getProductsbyID: async () => {
    const response = await axiosInstance.get("/products/:id");
    return response.data;
  },
};
