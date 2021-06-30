import React from 'react';
import Swal from 'sweetalert2';
import Header from '../Header';
import './App.css';
import Container from '../../shared/Container';
import Table, { TableHeader } from '../../shared/Table';
// import Products from '../../shared/Table/table.mockdata';
import { Product } from '../../shared/Table/table.mockdata';
import ProductForm, { ProductCreator } from '../Products/ProductForm';
import { useState } from 'react';
import { createSingleProduct, deleteSingleProduct, getAllProducts, updateSingleProduct } from '../../services/Products.service';
import { useEffect } from 'react';

const headers: TableHeader[] = [
  { key: 'id', value: '#'},
  { key: 'name', value: 'Product'},
  { key: 'price', value: 'Price', right: true},
  { key: 'stock', value: 'Available Stock', right: true}
]

function App() {

  const[products, setProducts] = useState<Product[]>([])
  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(products[0])

  async function fetchData() {
    const _products = await getAllProducts()
    setProducts(_products)
  }  

  useEffect(() => {
    fetchData()
  }, [])

  const handleProductSubmit = async (product: ProductCreator) => {
    try{
      await createSingleProduct(product)
      fetchData()
    }catch (err){
      Swal.fire('Oops', err.message, 'error')
    }
  }

  const handleProductUpdate = async (newProduct: Product) => {

    try{
      await updateSingleProduct(newProduct)
      setUpdatingProduct(undefined)
      fetchData()
    } catch (err){
      Swal.fire('Oops', err.message, 'error')
    }
  }

  const deleteProduct = async (id : string) => {
    try{
      await deleteSingleProduct(id)
      fetchData()
      Swal.fire('uhul', 'Product sucessfully deleted', 'success')
    }catch(err){
      Swal.fire('Oops', err.message, 'error')
    }
  }
  
  const handleProductDelete = (product: Product) => {
    Swal
      .fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#09f',
      cancelButtonColor: '#d33',
      confirmButtonText: `Yes, delete ${product.name}!`
    })
    .then((result) => {
      if (result.isConfirmed) {
        deleteProduct(product._id)
      }
    })
  }

  const handleProductDetail = (product : Product) => {
    Swal.fire(
      'Product details',
      `${product.name} costs $${product.price} and we have ${product.stock} available in stock.`,
      'info'
    )
  } 

  const handleProductEdit = (product: Product) => {
    setUpdatingProduct(product)
  }

  return (
    <div className="App">
      <Header title="Algastock" />
      
      <Container>
        <Table 
          headers={headers}
          data={products}
          enableActions={true}
          onDelete={handleProductDelete}
          onEdit={handleProductEdit}
          onDetail={handleProductDetail}
        />

          <ProductForm 
            form={updatingProduct}
            onSubmit={handleProductSubmit}
            onUpdate={handleProductUpdate}
          />
      </Container>

    </div>
  );
}

export default App;
