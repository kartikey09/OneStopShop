import { React, useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchData, fetchDataSuccess } from '../../redux/Actions'
import SingleProd from '../singleProd/SingleProd.js'
import './Home.css'

function Home({fetchData, info}) {
    useEffect(() => {
        fetchData();
    },[])

    return (
        <div className = 'product_container'>
            {

                info.data.map((val) => <SingleProd key = {val.id} val = {val} />)
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        info: state.data,
    }
}

const dispatchStateToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchData()),
    }

}

export default connect(mapStateToProps, dispatchStateToProps)(Home)
