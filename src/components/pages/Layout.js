import React from "react";
import { Outlet, Link } from "react-router-dom"; 

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/reactjs/webpack-demo-git-copilot/router.html">Home</Link>
                    </li>
                    <li>

                        <Link to="blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <Outlet />
        </>
    );
};

export default Layout;
