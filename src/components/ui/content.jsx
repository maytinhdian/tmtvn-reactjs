import React from 'react';
import {Outlet} from 'react-router-dom';
function content(props) {
    return (
        <div>
            <h1>This is main content</h1>
            <Outlet/>
        </div>
    );
}

export default content;