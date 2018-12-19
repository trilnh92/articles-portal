import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem} from 'reactstrap';
import {NavLink, withRouter} from 'react-router-dom'
import "./Header.scss";

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    componentWillMount() {
        this.toggleNavbar();
    }

    componentDidMount() {
        window.addEventListener("resize", this.toggleNavbar);
    }

    componentDidUpdate(prevProps) {
        const {location} = this.props;
        if (location.pathname !== prevProps.location.pathname) {
            this.toggleNavbar()
        }
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.toggleNavbar);
    }

    toggleNavbar(event) {
        const {collapsed} = this.state;
        if(window.innerWidth < 992 && !event) {
            this.setState({
                collapsed: true
            });
        } else {
            this.setState({
                collapsed: !collapsed
            });
        }
    }

    render() {
        const {location: {pathname}} = this.props;
        const {collapsed} = this.state;
        return (
            <header className="header">
                <div className="header__container">
                    <Navbar color="faded" light expand="lg">
                        <NavbarBrand href="/" className="navbar-logo">
                            Articles Portal
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2 navbar-toggle"/>
                        <Collapse isOpen={!collapsed} navbar>
                            <Nav navbar className="navbar__menu">
                                <NavItem
                                    className={`navbar__menu__item ${pathname.substr(1) === 'home' ? 'navbar__menu__item--active' : ''}`}>
                                    <NavLink
                                        to="/home"
                                        activeClassName="navbar__menu__item-link--active"
                                        className="navbar__menu__item-link">
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem
                                    className={`navbar__menu__item ${pathname.substr(1) === 'articles' ? 'navbar__menu__item--active' : ''}`}>
                                    <NavLink
                                        to="/articles"
                                        activeClassName="navbar__menu__item-link--active"
                                        className="navbar__menu__item-link">
                                        Articles
                                    </NavLink>
                                </NavItem>
                                <NavItem
                                    className={`navbar__menu__item ${pathname.substr(1) === 'about' ? 'navbar__menu__item--active' : ''}`}>
                                    <NavLink
                                        to="/about"
                                        activeClassName="navbar__menu__item-link--active"
                                        className="navbar__menu__item-link">
                                        About
                                    </NavLink>
                                </NavItem>
                                <NavItem
                                    className={`navbar__menu__item ${pathname.substr(1) === 'contact' ? 'navbar__menu__item--active' : ''}`}>
                                    <NavLink
                                        to="/contact"
                                        activeClassName="navbar__menu__item-link--active"
                                        className="navbar__menu__item-link">
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        );
    }
}

export default withRouter(Header);
