import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import SortByModal from '../sortByModal/SortByModal'
import './Navbar.css'

function Navbar({ cartQty }) {

    const [sortModal, setSortModal] = useState(false);

    const handleClick = () =>{
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        navbarLinks.classList.toggle('active');
    }

    const toggleSortModal = () =>{
        setSortModal(!sortModal);
    }

    const handleSortClick = () =>{
        toggleSortModal()
    }

    return (
        <>
            <nav className='navbar'>
                <div className='ShopName'>OneStopShop</div>
                <a href = '#' className = 'hamburgerMenu' onClick = {handleClick}>
                    <span className = 'bar'></span>
                    <span className = 'bar'></span>
                    <span className = 'bar'></span>
                </a>
                <div className='navbar-links'>
                    <ul>
                        <li className='sortBy' onClick = {handleSortClick}>Sort By </li>
                        <li className='cart'>cart - {cartQty}</li>
                    </ul>
                </div>
            </nav>
            {sortModal && <SortByModal toggleSortModal = {toggleSortModal}/>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cartQty: state.cart.cartQuantity
    }
}

export default connect(mapStateToProps)(Navbar)
