import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import laptop from '../Images/laptop.jpg'
import { Link } from 'react-router-dom'


// function sidebar() 
class Sidebar extends React.Component {
    render() {
        return (

            <div className="wrapper" >

                <nav id="sidebar">
                    <div className="sidebar-header">
                        <div className="logo">

                        </div>
                        <div className="cusname">
                            <span>Hello,</span><br />
                            <span className="customername">Admin Name</span>
                        </div>
                    </div>

                    <div className="header-middle">
                        <span className="earning">Earning</span><br />
                        <p className="rupees">Rs. 12000</p>
                        <center>  <hr /> </center>
                    </div>

                    <ul className="list-unstyled components">


                        <li>
                            <Link to="/products"><i className="fa fa-home"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</i></Link>
                        </li>

                        <li>
                            <Link to="/products"><i className="fa fa-database"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Products</i></Link>
                        </li>

                        <li>
                            <Link to="/orders"><i className="fa fa-shopping-bag"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Orders </i></Link>
                        </li>

                        <li>
                            <Link to="/customers"><i className="fa fa-users"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Customers </i></Link>
                        </li>

                        <li>
                            <a href="#"><i className="fa fa-percent"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Coupons </i></a>
                        </li>

                        <li>
                            <a href="#"><i className="fa fa-file-text-o"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Categories </i></a>
                        </li>

                        <li>
                            <a href="#"><i className="fa fa-cog"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings </i></a>
                        </li>
                    </ul>
                </nav>

            </div >
        );
    }
}
export default Sidebar;
// export default sidebar;