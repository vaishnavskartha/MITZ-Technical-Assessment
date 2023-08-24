import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Task2 = () => {
  const [mostPopularProduct, setMostPopularProduct] = useState([]);
  const [customersOrderedAllProducts, setCustomersOrderedAllProducts] = useState([]);
  const [customersBoughtInexpensiveItems, setCustomersBoughtInexpensiveItems] = useState([]);

  // GET customers who Ordered All Products
  const getOrderAll = async () => {

    const response = await axios.get('http://localhost:5000/api/customers-ordered-all-products')
      .then(response => {
        setCustomersOrderedAllProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

   // GET customers who Bought Inexpensive Items 
  const getcustomersBoughtInexpensiveItems = async () => {

    const response = await axios.get('http://localhost:5000/api/customers-bought-inexpensive-items')
      .then(response => {
        setCustomersBoughtInexpensiveItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // GET Most Popular Product
  const getMostPopularProduct = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/most-popular-product');
      if (response && response.data) {
        setMostPopularProduct(response.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getMostPopularProduct()
    getOrderAll()
    getcustomersBoughtInexpensiveItems()
  }, []);

  return (
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card text-bg-primary mb-3" style={{ maxWidth: '100%' }}>
            <div className="card-header">Most Popular Product</div>
            <div className="card-body">
              <div>
                {mostPopularProduct ? (
                  <div>
                    <h4>Most Popular Product:</h4>
                    <p>Name: {mostPopularProduct.productName}</p>
                    <p>Popularity: {mostPopularProduct.popularity}</p>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>

            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="card text-bg-primary mb-3" style={{ maxWidth: '100%' }}>
            <div className="card-header">Customers Who Ordered All Products</div>
            <div className="card-body">
              <h4>Customers Who Ordered All Products:</h4>
              <div className="table table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" style={{ color: 'white' }}>Customer id</th>

                    </tr>
                  </thead>
                  <tbody>
                    {customersOrderedAllProducts.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ color: 'white' }}>{value._id}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
              

            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4">
          <div className="card text-bg-primary mb-3" style={{ maxWidth: '100%' }}>
            <div className="card-header">Customers Who Bought Inexpensive Items</div>
            <div className="card-body">
              <h4>Customers Who Bought Inexpensive Items:</h4>
              <div className="table table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" style={{ color: 'white' }}>Customer id</th>

                    </tr>
                  </thead>
                  <tbody>
                    {customersBoughtInexpensiveItems.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td style={{ color: 'white' }}>{value._id}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
export default Task2