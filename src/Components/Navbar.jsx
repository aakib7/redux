import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
  const amount = useSelector(state => state.amount)
  return (
<nav className="navbar navbar-light bg-light justify-content-between">
  <a className="navbar-brand bg-primary">Banlance = {amount}</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
  )
}

export default Navbar