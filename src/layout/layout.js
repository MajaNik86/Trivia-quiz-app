import React from "react";
import MainNavigation from "./MainNavigation";
import { Fragment } from "react";

const Layout = ({ children }) => {

    return <Fragment>
        <MainNavigation />
        <main>{children}</main>

    </Fragment>
}

export default Layout;