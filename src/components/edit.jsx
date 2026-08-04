import { useNavigate } from "react-router-dom";
import { createProduct, updateProduct } from "../../services/api";
import { useState } from "react";
function Edit({setEdit,productEdit}) {
     const [product, setproduct] = useState(productEdit);
    const editProduct = () =>{
        if(product.name === "" ||product.category === "" ||
            product.price === "" || product.stock ==="")
            alert("All Inputs Are required")
            else{
                updateProduct(productEdit.id,product)
                .then(()=>{
                    alert("product Edited Successfully")
                    window.location.reload();
                })
            }
    }
    return ( <>
     
  <div className="fixed inset-0 bg-black/40 z-50 flex items-end justify-center">
    <div className="bg-white w-full max-w-4xl rounded-t-3xl p-8 animate-[slideUp_.3s_ease]">

      <div className=" mb-6">
        <h2 className="text-2xl font-bold">Edit Product</h2>

      </div>

      <form className="grid grid-cols-1 md:grid-cols-2 gap-5" onSubmit={editProduct}>

        <div>
          <label className="block mb-2 font-medium">Product Name</label>

          <input type="text" className="w-full border rounded-lg p-3 " placeholder="Classic Hoodie" value={product.name} onChange={(e)=>setproduct({...product,name : e.target.value})}/>
        </div>

        <div>
          <label className="block mb-2 font-medium">Category</label>

          <input type="text" className="w-full border rounded-lg p-3 " placeholder="Men" value={product.category} onChange={(e)=>setproduct({...product,category : e.target.value})}/>
        </div>

        <div>
          <label className="block mb-2 font-medium">Price</label>

          <input type="number" className="w-full border rounded-lg p-3 " placeholder="50" value={product.price} onChange={(e)=>setproduct({...product,price : e.target.value})}/>
        </div>

        <div>
          <label className="block mb-2 font-medium">Stock</label>

          <input type="number" className="w-full border rounded-lg p-3" placeholder="25" value={product.stock} onChange={(e)=>setproduct({...product,stock : e.target.value})}/>
        </div>

        <div className="md:col-span-2">
          <label className="block mb-2 font-medium">Image URL</label>

          <input type="text" className="w-full border rounded-lg p-3 " placeholder="https://..." value={product.image} onChange={(e)=>setproduct({...product,image : e.target.value})}/>
        </div>

        <div className="md:col-span-2 flex justify-end gap-3 mt-4">
          <button type="button" onClick={() => setEdit(false)} className="px-6 py-3 border rounded-lg">Cancel </button>

          <button type="submit" className="px-6 py-3 bg-[#008E93] text-white rounded-lg">Edit Product</button>
        </div>

      </form>

    </div>
  </div>

    
    </> );
}

export default Edit;