import ProductsTable from "./Components/ProductsTable"
import Header from "./Components/Header"
import { useEffect, useMemo, useState } from "react"
import sortBy from "./utils/types"

function App() {
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [sorting, setSorting] = useState(sortBy.NONE)
  
  const changeSorting = (sort) => {
    setSorting(prevState => prevState === sort ? sortBy.NONE : sort)
  }
  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const newProduct = {
        name: formData.get('name'),
        price: formData.get('price'),
        categoryId: formData.get('category')
    }

    fetch('http://localhost:8080/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
    })
        .then(res => res.json())
        .then(data => {
            setProducts([...products, data])
        })
        .catch(err => {
            console.error(err)
        })

        e.target.reset();
  }

  const handleDelete = (id) => {
    fetch('http://localhost:8080/api/products/' + id, {
        method: 'DELETE',
    })
        .then(() => {
            setProducts(prevState => prevState.filter(product => product.id !== id))
        })
        .catch(err => {
            console.error(err)
        })
  }

  const sortedProducts = useMemo(() => {
    if(sorting === sortBy.NONE) {
      return products 
    } 
    if(sorting === sortBy.NAME) {
      return products.toSorted((a, b) => a.name.localeCompare(b.name))
    }
    if(sorting === sortBy.PRICE) {
      return products.toSorted((a, b) => a.price - b.price)
    }
  }, [products, sorting])

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
    })
      .catch(err => {
        console.error(err)
      })

    fetch('http://localhost:8080/api/categories')
      .then(res => res.json())
      .then(data => {
        setCategories(data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <Header />
      <ProductsTable 
        changeSorting={changeSorting} 
        deleteProduct={handleDelete} 
        products={sortedProducts} 
        categories={categories}
        sorting={sorting}
      />
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4 w-1/2 mx-auto">
        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" id="name" className= "bg-[#161f27]" />
        <label htmlFor="price">Precio</label>
        <input type="number" name="price" id="price" 
          className= "bg-[#161f27]"/>
        <label htmlFor="category">Categoría</label>
        <select name="category" id="category" className= "text-white">
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <button type="submit" className="bg-[#161f27]">
          Agregar
        </button>
      </form>
    </>
  )
}

export default App
