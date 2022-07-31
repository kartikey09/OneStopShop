import './SingleProd.css'
import React, { useEffect, useState } from 'react'
import { setCartVal } from '../../redux/Actions'
import { setCartItem } from '../../redux/Actions'
import { connect } from 'react-redux'

function SingleProd({ val, cartQty, setCartVal, data, setCartItem }) {

    const[name, setName] = useState(val.description);
    const viewButtonClick = () =>{

    }

    const addToCartButtonClick = (e) =>{
        setCartVal(1);
        const item = data[val.id - 1];
        console.log(item)
        setCartItem(item);
    }

    useEffect(()=>{
        if(name.length > 50){
            setName(name.substring(0,50) + '...');
        }
    })

    return (
        <div className='singleProd'>
            <img className='prodImage' src={val.image} alt = 'img'></img>
            <div className='prodDescription'> {name}</div>
            <div className='prodButtons'>
                <button className='viewButton' onClick = {()=>viewButtonClick()}>View</button>
                <button className='addToCartButton' onClick = {(e)=>addToCartButtonClick(e)}>Add to cart</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
        cartQty : state.cart.cartQuantity,
        data : state.data.data
    }
}

const dispatchStateToProps = (dispatch) =>{
    return {
        setCartVal : (num) => dispatch(setCartVal(num)),
        setCartItem : (item) => dispatch(setCartItem(item))
    }
}

export default connect(mapStateToProps, dispatchStateToProps)(SingleProd)

