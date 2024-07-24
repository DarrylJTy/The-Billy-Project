// Layout.js
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row no-gutters">
                <div className="col-auto p-0 m-0">
                    <Sidebar />
                </div>
                <div className="col p-0 m-0">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
