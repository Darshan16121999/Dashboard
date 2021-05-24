import React, { useEffect, useState } from 'react'
import axios from 'axios'
import consts from '../config/constants'
// import laptop from '../Images/laptop.jpg'
import { Link } from 'react-router-dom'

import Sidebar from '../components/sidebar';
function Customers() {
    const [message, setMessage] = useState('')

    function msgChanged() {
        if (message !== '') {
            setTimeout(() => { setMessage('') }, 5000);
        }
    }
    function getAll() {

        function userDlt(idOfuser) {
            axios.post(consts.userRoute + 'deleteUserV2', {
                _id: idOfuser,
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
        // userDlt('60aa5d55376e64640c554efa')
        axios.post(consts.userRoute + 'getAll', {}).then(response => {

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
                            <td>${data.number}</td>
                            <td>${data.email}</td>
                            <td>${data.totalOrders}</td>
                            <td>${data.joinDate}</td>
                            <td><i class="fa fa-trash" onclick="userDlt('${data._id}')"></i></td>
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
                            <span className=" product-text">Customers</span><br />
                            <span className="product-listing">Liom Customers</span>
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

                            <Link to="/newcustomer"><div className="btn btn-success pull-right px-5 " style={{ color: 'white', backgroundColor: '#80bc00', border: 'none' }}><i className="fa fa-plus"></i>&nbsp;&nbsp;Add Customer</div></Link>

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
                                                        <th scope="col">Phone Number </th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Total Orders</th>
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

export default Customers;