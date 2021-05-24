import React, { useEffect, useState } from 'react'
import axios from 'axios'
import consts from '../config/constants'
// import laptop from '../Images/laptop.jpg'
import { Link } from 'react-router-dom'

import Sidebar from '../components/sidebar';
function Products() {
    const [message, setMessage] = useState('')

    function msgChanged() {
        if (message !== '') {
            setTimeout(() => { setMessage('') }, 5000);
        }
    }

    function prodDlt(idOfProd) {
        axios.post(consts.productRoute + 'deleteProduct', {
            _id: idOfProd,
            password: 'abcdefghi'
        }).then(response => {
            if (response.data.success) {
                setMessage(response.data.msg)
                document.getElementById('messageHere').style.color = "green"



            }
            else {
                setMessage(response.data.msg)
                document.getElementById('messageHere').style.color = "red"

            }
        }).catch(err => {
            console.log(err)
        })
    }
    // prodDlt('60aa3ae15914b23b0c1cff39')
    function getAll() {

        axios.post(consts.productRoute + 'getAll', {}).then(response => {
            if (response.data.success) {
                setMessage(response.data.msg)

                document.getElementById('messageHere').style.color = "green"
                console.log(response.data.data)
                document.getElementById('dataAtHere').innerHTML = '';
                response.data.data.map(data => {
                    var tr = document.createElement('tr')
                    tr.innerHTML = `
                            <th scope="row">${data._id}</th>
                            <td>${data.name}</td>
                            <td>${data.sku}</td>
                            <td>${data.stock}</td>
                            <td>${data.price}</td>
                            <td>${data.categories}</td>
                            <td>${data.date}</td>
                            <td><i class="fa fa-trash" onclick="prodDlt('${data._id}')"></i></td>
                        `;
                    document.getElementById('dataAtHere').appendChild(tr)
                })


            }
            else {
                setMessage(response.data.msg)
                document.getElementById('messageHere').style.color = "red"

            }
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getAll()

    }, [])


    return (
        <div className="wrapper_products">
            <div className="comp-sidebar"><Sidebar /></div>
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4">
                            <span className=" product-text">Products</span><br />
                            <span className="product-listing">Product Listings</span>
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

                    <div className="row">
                        <div className="col-xl-11 col-md-12 mt-5">

                            <Link to="/newproduct"><div className="btn btn-success pull-right px-5 " style={{ color: 'white', backgroundColor: '#80bc00', border: 'none' }}><i className="fa fa-plus"></i>&nbsp;&nbsp;New Product</div></Link>

                            <div id="messageHere" onChange={msgChanged()}>{message}</div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-11 col-md-12 mt-5">


                            <div className="card">
                                <div className="card-body">

                                    <div className="single-table">
                                        <div className="table-responsive">
                                            <table className="table table-hover text-center">
                                                <thead className="text-uppercase">
                                                    <tr>
                                                        <th scope="col">ID</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Sku</th>
                                                        <th scope="col">Stock</th>
                                                        <th scope="col">Price</th>
                                                        <th scope="col">Categories</th>
                                                        <th scope="col">Date</th>
                                                        <th scope="col">Action</th>



                                                    </tr>
                                                </thead>
                                                <tbody id="dataAtHere">


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Products;