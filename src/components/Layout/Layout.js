import React from 'react';
import './Layout.scss';

// TODO back to normal, do not use lazy
const Header = React.lazy(() => import('../Header/Header'));
const Footer = React.lazy(() => import('../Footer/Footer'));

const Layout = ({ children }) => (
    <section className="page-container">
        <Header />
        {children}
        <Footer />
    </section>
);

export default Layout;
