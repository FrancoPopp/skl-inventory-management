import sortBy from "../utils/types";
import { FaAngleDown  } from "react-icons/fa";

function ProductsTable({ changeSorting, deleteProduct, products, categories, sorting }) {

    const getCategoryName = (categoryId) => {
        return categories.find(category => category.id === categoryId).name
    }

    return (
        <div className="mx-auto max-w-2xl">
            <table>
            <thead>
                <tr>
                    <th onClick={() => changeSorting(sortBy.NAME)} 
                        className="text-center cursor-pointer flex items-center justify-center gap-2">
                        Nombre
                        {sorting === sortBy.NAME && <FaAngleDown />}
                    </th>
                    <th className="text-center">Categoría</th>
                    <th onClick={() => changeSorting(sortBy.PRICE)} 
                        className="text-center cursor-pointer flex items-center justify-center gap-2">
                        Precio
                        {sorting === sortBy.PRICE && <FaAngleDown />}
                    </th>
                    <th className="text-center">Acciones</th>
                </tr>
            </thead>

            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td className="text-center">{product.name}</td>
                        <td className="text-center">{getCategoryName(product.categoryId)}</td>
                        <td className="text-center">
                            ${product.price}
                        </td>
                        <td className="text-center">
                            <button onClick={() => deleteProduct(product.id)} className="bg-red-500 text-white p-2 rounded">Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}

export default ProductsTable