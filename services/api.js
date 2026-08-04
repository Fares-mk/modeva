import axios from "axios";

const url = axios.create({
    baseURL: "https://6a7250af4d741b02b1f78184.mockapi.io/products/products",
});

export async function getAllProduct() {
    return await url.get("/");
}

export async function createProduct(product) {
    return await url.post("/", product);
}

export async function updateProduct(id, product) {
    return await url.put(`/${id}`, product);
}

export async function deleteProduct(id) {
    return await url.delete(`/${id}`);
}