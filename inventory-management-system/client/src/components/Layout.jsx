// Layout.js
import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-auto p-0">
                    <Sidebar />
                </div>
                <div className="col">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;
