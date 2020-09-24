import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Help</NavLink>
    </header>
}

export default Header

