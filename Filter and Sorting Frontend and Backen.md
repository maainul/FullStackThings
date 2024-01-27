# Filter and Sorting Frontend and Backend

Steps :

    1. Create Router
    2. Create API
    3. Create Client URL
    4. Create Model


## Frontend :
```js
import React, { useEffect, useState } from 'react'

import axios from 'axios';

import { GET_TRANSACTIONS_API } from '../../Services/BackendAPI';

import '../Home/Home.css'
import { DDMMYY } from '../../Services/Utils';


const HomePage = () => {

    // For Filter and Sorting Only
    const [allTransaction, setAllTransaction] = useState([])
    const [frequency, setFrequency] = useState('7')
    const [type, setType] = useState('all')
    const [category, setCategory] = useState('all')
    const [sortOrder, setSortOrder] = useState('asc')

    // Have to Move in Components/Pages for Better coding Structure
    // All Transaction Code
    const getAllTransaction = async () => {
        try {
            const user = JSON.parse('1')
            setLoading(true)
            const res = await axios.post(GET_TRANSACTIONS_API, {
                userid: user,
                frequency,
                type,
                category,
                sortOrder
            })
            setAllTransaction(res.data)
            setLoading(false)
            console.log("----- response data", res.data);
        } catch (error) {
            console.log('Fetch Issue with Transaction :', error)
        }
    }
    // Hook Call
    useEffect(() => {
        getAllTransaction();
    }, [frequency, type, category, sortOrder])
    return (
        <Layout>
            <br />
            <button className='btn btn-primary' >Add Expense</button>
            <br />
            <br />
            <div className='filter-container'>
                <div className='filters'>
                    <div className='filter'>
                        <span>Filter</span>
                        <select className='optionPadding' value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                            <option value="7">Last 1 Week</option>
                            <option value="30">Last 1 Month</option>
                            <option value="365">Last 1 Year</option>
                            <option value="custom">Custom</option>
                        </select>

                    </div>
                    <div className='filter'>
                        <span>Type</span>
                        <select className='optionPadding' value={type} onChange={(e) => { setType(e.target.value) }}>
                            <option value="all">All</option>
                            <option value="income">Income</option>
                            <option value="expense">Expense</option>
                        </select>
                    </div>
                    <div className='filter'>
                        <span>Category</span>
                        <select className='optionPadding' value={category} onChange={(e) => { setCategory(e.target.value) }}>
                            <option value="all">All</option>
                            <option value="food">Food</option>
                            <option value="shopping">Shopping</option>
                            <option value="medical"> Medical Bill</option>
                            <option value="recharge"> Recharge</option>
                            <option value="tip"> Tip</option>
                            <option value="project"> Project</option>
                            <option value="food"> Food</option>
                            <option value="movie"> Movie</option>
                            <option value="bill"> Bill</option>
                            <option value="fee"> Fee</option>
                            <option value="tax"> Tax</option>
                            <option value="bazar"> Bazar</option>
                        </select>
                    </div>
                    <div className='filter'>
                        <span>Sort</span>
                        <select className='optionPadding' value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                            <option value="asc">Ascending</option>
                            <option value="desc">Descending</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='table-div'>
                <table className='table-design'>
                    <thead>

                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Amount</th>
                            <th>Reference</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allTransaction.map((a) => (
                            <tr key={a._id}>
                                <td>{DDMMYY(a)}</td>
                                <td>{a.type}</td>
                                <td>{a.category}</td>
                                <td>{a.amount}</td>
                                <td>{a.reference}</td>
                                <td>{a.description}</td>
                                <td>
                                    <button>Edit</button>

                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
        </Layout>
    );
}

export default HomePage

```


## Backend Code

```js
const transactionModel = require('../models/TransactionModel');
const moment = require('moment')



const getAllTransaction = async (req, res) => {
    try {
        const { frequency, type, category, sortOrder } = req.body
        console.log("id", frequency)
        console.log("type", type)
        console.log("category", category)
        console.log("Sort Order :", sortOrder)
        const transactions = await transactionModel.find({
            date: {
                $gt: moment().subtract(Number(frequency), 'd').toDate(),
            },
            userid: req.body.userid,
            ...(type !== "all" && { type }),
            ...(category !== "all" && { category })
        }).sort({ amount: sortOrder });
        
        res.status(200).json(transactions);
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}


module.exports = { getAllTransaction }

```

![image](https://github.com/maainul/expense-management-system/assets/37740006/5309ee2d-cf47-4fc2-a891-5ca74b8c12e4)
