import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Home = () => {
    const [APIData, setAPIData] = useState([]);
    const [CustomerPreference, setCustomerPreference] = useState([]);
    const [Order, setOrder] = useState([]);

    // GET product
    const getProduct = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            if (response && response.data.success) {
                setAPIData(response.data.success);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        getProduct()
        getCustomerPreference()
        getOrder()
    }, [])

    // GET Customer Preference
    const getCustomerPreference = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/customer_preference');
            if (response && response.data.success) {
                setCustomerPreference(response.data.success);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    // GET Order
    const getOrder = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/orders');
            if (response && response.data.success) {
                setOrder(response.data.success);
            }
        } catch (error) {
            console.error(error.message);
        }
    }

    return (

        <div className="container-fluid mt-2">
            <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card text-bg-primary mb-3" style={{ maxWidth: '100%' }}>
                        <div className="card-header">Products</div>
                        <div className="card-body">
                            <div className="table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ color: 'white' }}>Product id</th>
                                            <th scope="col" style={{ color: 'white' }}>Name</th>
                                            <th scope="col" style={{ color: 'white' }}>Price</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {APIData.map((value, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td style={{ color: 'white' }}>{value.product_id}</td>
                                                    <td style={{ color: 'white' }}>{value.name}</td>
                                                    <td style={{ color: 'white' }}>{value.price}</td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <div className="card text-bg-primary mb-3" style={{ maxWidth: '100%' }}>
                        <div className="card-header">Customer Preference</div>
                        <div className="card-body">
                            <div className="table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ color: 'white' }}>Preference id</th>
                                            <th scope="col" style={{ color: 'white' }}>Product id</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {CustomerPreference.map((value, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td style={{ color: 'white' }}>{value.preference_id}</td>
                                                    <td style={{ color: 'white' }}>{value.product_id}</td>
                                                    
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
                        <div className="card-header">Orders</div>
                        <div className="card-body">
                            <div className="table table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col" style={{ color: 'white' }}>Customer id</th>
                                            <th scope="col" style={{ color: 'white' }}>Preference id</th>
                                            <th scope="col" style={{ color: 'white' }}>Date</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Order.map((value, index) => {
                                            return (
                                                <tr key={index}>

                                                    <td style={{ color: 'white' }}>{value.customer_id}</td>
                                                    <td style={{ color: 'white' }}>{value.preference_id}</td>
                                                    <td style={{ color: 'white' }}>{value.date}</td>

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
    )
}
export default Home

