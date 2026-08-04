import { useEffect, useState } from "react";
import { LuPlus, LuPencil, LuTrash2 } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { deleteProduct, getAllProduct } from "../../services/api";
import Add from "../components/add";
import Edit from "../components/edit";

function Dashboard() {

    const [products,setproducts] =useState([]);
    const [selectedProduct,setSelectedProduct] = useState()
    const [open,setOpen]=useState();
    const [edit,setedit]=useState();
    const fetchProducts = async ()=>{
        try{
            const res= await getAllProduct();
            setproducts(res.data);
        }
        catch(e){
            console.log(e);
        }
    }
    const navigate=useNavigate();
    const handleDelete= async (id)=>{
        await deleteProduct(id)
        alert("product deleted successfully")
        window.location.reload();
    }
    useEffect(()=>{fetchProducts()},[])

    return ( <>
        <section className="p-6">
      {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Products</h1>
                    <Link className="text-3xl font-bold text-gray-800" to="/">Home</Link>
                </div>
            <button className="bg-[#008E93] text-white px-5 py-2 rounded-lg flex items-center gap-2 hover:bg-[#00757a]" onClick={()=>setOpen(true)}><LuPlus />Add Product</button>
        </div>
      {/* Table */}
        <div className=" bg-white rounded-xl shadow">
        <table className="min-w-full">
            <thead className="bg-gray-100">
                <tr>
                    <th className="px-6 py-4 text-left">Image</th>
                    <th className="px-6 py-4 text-left">Name</th>
                    <th className="px-6 py-4 text-left">Category</th>
                    <th className="px-6 py-4 text-left">Price</th>
                    <th className="px-6 py-4 text-left">Stock</th>
                    <th className="px-6 py-4 text-left">Id</th>
                    <th className="px-6 py-4 text-center">Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product)=>(
                    <tr className="border-t hover:bg-gray-50" key={product.id}>
                    <td className="px-6 py-4">
                        <div className="w-14 h-14 rounded-lg bg-gray-200"></div>
                    </td>

                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">{product.category}</td>
                    <td className="px-6 py-4">{product.price}</td>
                    <td className="px-6 py-4">{product.stock}</td>
                    <td className="px-6 py-4">{product.id}</td>
                    <td className="px-6 py-4">
                        <div className="flex justify-center gap-3">
                            <button className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200" onClick={()=>{setedit(true),setSelectedProduct(product)}}><LuPencil /></button>
                            <button className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200" onClick={()=>handleDelete(product.id)}><LuTrash2 /></button>
                        </div>
                    </td>
                </tr>
                ))}
                

            </tbody>

        </table>

    </div>
    {open &&(<Add setOpen= {setOpen} />)}
    {edit &&(<Edit setEdit= {setedit} productEdit={selectedProduct} />)}
    </section>
    
    </> );
}

export default Dashboard;   