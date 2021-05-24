// { name, sku, stock, price, categories, tags, description }

import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import laptop from '../Images/laptop.jpg'
import { Link } from 'react-router-dom'

import consts from '../config/constants'

import Sidebar from '../components/sidebar';
function Newproduct() {
    const [name, setName] = useState('')
    const [sku, setSku] = useState('')
    const [stock, setStock] = useState('')
    const [price, setPrice] = useState('')
    const [categories, setCategories] = useState('')
    const [tags, setTags] = useState('')
    const [description, setDescription] = useState('')
    const [message, setMessage] = useState('')

    function msgChanged() {
        if (message !== '') {
            setTimeout(() => { setMessage('') }, 5000);
        }
    }
    function addItem(e) {
        e.preventDefault();
        axios.post(consts.productRoute + 'addItem', {
            name: name,
            sku: sku,
            stock: stock,
            price: price,
            categories: categories,
            tags: tags,
            description: description
        }).then(response => {
            if (response.data.success) {
                setMessage(response.data.msg)
                document.getElementById('messageHere').style.color = "green"
                setName('')
                setSku('')
                setStock('')
                setPrice('')
                setCategories('')
                setTags('')
                setDescription('')
            }
            else {
                setMessage(response.data.msg)
                document.getElementById('messageHere').style.color = "red"

            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="wrapper_products">
            <div className="comp-sidebar"><Sidebar /></div>
            <div className="row">
                <div className="col-md-12">

                    <div className="row">
                        <div className="col-md-4">
                            <span className=" product-text">Add Products</span><br />
                            <span className="product-listing">Add New Product</span>
                        </div>

                        <div className="col-md-4">
                            <form>
                                <div class="form-group mb-4 mt-5">
                                    <input id="exampleFormControlInput1" type="email" placeholder="Search Something" class="form-control form-control-underlined" />
                                </div>
                            </form>
                        </div>

                        <div className="col-xl-3 col-md-4 mt-5 viewstore">
                            <span className="pull-right mt-3 ">View Your Store &nbsp;&nbsp;&nbsp;<i className="fa fa-sign-out"></i></span>
                        </div>
                    </div>

                    <form onSubmit={e => { addItem(e) }} className="row">
                        <div className="col-md-6 mt-5">



                            <label>Product Name</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={name} onChange={e => { setName(e.target.value) }} type="text" placeholder="Enter Product Name" />

                            <label>Price</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={price} onChange={e => { setPrice(e.target.value) }} type="text" placeholder="Enter Price" />

                            <label>Quantity</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={stock} onChange={e => { setStock(e.target.value) }} type="text" placeholder="Enter Quantity" />

                            <label>Product Description</label>
                            <textarea className="form-control form-control-lg mb-4 inputt-form" value={description} onChange={e => { setDescription(e.target.value) }} type="text" placeholder="Enter Description">

                            </textarea>








                        </div>

                        <div className="col-md-6 mt-5">


                            <label>Categories</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={categories} onChange={e => { setCategories(e.target.value) }} type="text" placeholder="Enter Categories" />

                            <label>Sku</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={sku} onChange={e => { setSku(e.target.value) }} type="text" placeholder="Enter Sku" />

                            <label>Tags</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={tags} onChange={e => { setTags(e.target.value) }} type="text" placeholder="Enter Tags" />

                            <div className="row">
                                <div className=" col-xl-11 px-4 col-md-12 ">
                                    <div id="messageHere" onChange={msgChanged()}>{message}</div>
                                    <button type="submit" className="btn btn-success px-5 pull-right" style={{ color: 'white', backgroundColor: '#cd4040', border: 'none' }}> Submit </button>


                                </div>
                            </div>


                        </div>

                    </form>
                </div>
            </div>
        </div>




    );
}

export default Newproduct;