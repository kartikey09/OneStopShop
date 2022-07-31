import React from 'react'
import './SortByModal.css';
import {fetchDataSuccess, setSortOrder} from '../../redux/Actions';
import { connect } from 'react-redux';

function SortByModal({ fetchDataSuccess, data, toggleSortModal, order, setSortOrder}) {

    const categoryClickHandler = (e) =>{
        setSortOrder(e.target.classList[1]);
        toggleSortModal();
        
        if(order === 'highToLow'){
            data.sort((a,b)=>{
                return a.MRP - b.MRP;
            })
        } else if(order === 'lowToHigh'){
            data.sort((a,b)=>{
                return b.MRP - a.MRP;
            })
        }
        fetchDataSuccess(data);
    }

    return (
        <div className = 'blurContainer'>
            <div className='modalContainer'>
                <div className = 'title'>Sort By</div>
                <div className = 'category highToLow' onClick = {(e)=>categoryClickHandler(e)}>Price - high to low</div>
                <div className = 'category lowToHigh' onClick = {(e)=>categoryClickHandler(e)}>Price - low to high</div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order : state.sort.order,
        data : state.data.data
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        setSortOrder : (order) =>dispatch(setSortOrder(order)),
        fetchDataSuccess : (data)  => dispatch(fetchDataSuccess(data))
    }
}
export default connect(mapStateToProps, dispatchStateToProps)(SortByModal);

