import { useEffect, useState } from "react";
import { LuPlus, LuPencil, LuTrash2 } from "react-icons/lu";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProduct } from "../../services/api";
import Add from "../components/add";
import Edit from "../components/edit";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await getAllProduct();
      setProducts(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    alert("Product deleted successfully");
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <section className="p-4 sm:p-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Products
            </h1>

            <Link
              to="/"
              className="text-lg sm:text-xl font-semibold text-gray-800 hover:text-[#008E93]"
            >
              Home
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="w-full sm:w-auto bg-[#008E93] text-white px-5 py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-[#00757a] transition"
          >
            <LuPlus />
            Add Product
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full min-w-[624px]">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 sm:px-6 py-4 text-left">Image</th>
                <th className="px-3 sm:px-6 py-4 text-left">Name</th>
                <th className="px-3 sm:px-6 py-4 text-left">Category</th>
                <th className="px-3 sm:px-6 py-4 text-left">Price</th>
                <th className="px-3 sm:px-6 py-4 text-left">Stock</th>
                <th className="px-3 sm:px-6 py-4 text-left">ID</th>
                <th className="px-3 sm:px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg bg-gray-200"></div>
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                    {product.name}
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                    {product.category}
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                    ${product.price}
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                    {product.stock}
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-sm sm:text-base">
                    {product.id}
                  </td>

                  <td className="px-3 sm:px-6 py-3 sm:py-4">
                    <div className="flex justify-center gap-3">
                      <button
                        className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                        onClick={() => {
                          setSelectedProduct(product);
                          setEdit(true);
                        }}
                      >
                        <LuPencil />
                      </button>

                      <button
                        className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                        onClick={() => handleDelete(product.id)}
                      >
                        <LuTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modals */}
        {open && <Add setOpen={setOpen} />}

        {edit && (
          <Edit setEdit={setEdit} productEdit={selectedProduct} />
        )}
      </section>
    </>
  );
}

export default Dashboard;