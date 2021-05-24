// { name, sku, stock, price, categories, tags, description }

import React, { useEffect, useState } from 'react'
import axios from 'axios'

// import laptop from '../Images/laptop.jpg'
import { Link } from 'react-router-dom'

import consts from '../config/constants'

import Sidebar from '../components/sidebar';
function Newproduct() {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    function msgChanged() {
        if (message !== '') {
            setTimeout(() => { setMessage('') }, 5000);
        }
    }
    function addUser(e) {
        e.preventDefault();
        axios.post(consts.userRoute + 'register', {
            name: name,
            number: number,
            email: email,
            password: password,
        }).then(response => {
            if (response.data.success) {
                setMessage(response.data.msg)
                document.getElementById('messageHere').style.color = "green"
                setName('')
                setNumber('')
                setEmail('')
                setPassword('')
            }
            else {
                setMessage(response.data.msg)
                document.getElementById('messageHere').style.color = "red"

            }
        }).catch(err => {
            console.log(err)
        })
    }

    // name, number, email, password

    return (
        <div className="wrapper_products">
            <div className="comp-sidebar"><Sidebar /></div>
            <div className="row">
                <div className="col-md-12">

                    <div className="row">
                        <div className="col-md-4">
                            <span className=" product-text">Add Customer</span><br />
                            <span className="product-listing">Add New Customer</span>
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

                    <form onSubmit={e => { addUser(e) }} className="row">
                        <div className="col-md-6 mt-5">



                            <label>Name</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={name} onChange={e => { setName(e.target.value) }} type="text" placeholder="Enter Name" />

                            <label>Number</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={number} onChange={e => { setNumber(e.target.value) }} type="number" placeholder="Mobile Number" />

                            <label>Email</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={email} onChange={e => { setEmail(e.target.value) }} type="email" placeholder="Enter Email" />

                            <label>Password</label>
                            <input className="form-control form-control-lg mb-4 inputt-form" value={password} onChange={e => { setPassword(e.target.value) }} type="password" placeholder="Enter Password" />



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