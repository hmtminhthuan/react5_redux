import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BaiTapBurger.css'
import BurgerMenu from './BurgerMenu'

class Bugger extends Component {
    renderBurger = () => {
        let { buggerState } = this.props
        let { burger } = buggerState;
        return Object.entries(burger).map(([item, value], index) => {
            let arrMeat = [];
            for (let i = 0; i < value; i++) {
                arrMeat.push(<div key={i} className={item}></div>)
            }
            return (
                arrMeat
            )
        })
    }
    render() {
        return (
            <>
                <h1 className='text-center pb-5 mt-3'>BURGER ORDER</h1>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='text-center display-6 text-danger mb-4' style={{ fontWeight: 'bold' }}>Bánh burger của bạn</div>
                        <div className='breadTop'></div>
                        {this.renderBurger()}
                        <div className='breadBottom'></div>
                    </div>
                    <div className='col-md-6'>
                        <h1 className='text-center text-success m-4 mt-0'>Chọn thức ăn</h1>
                        <BurgerMenu />
                    </div>

                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    buggerState: state.buggerState,
})


const ExserciseBurger = connect(mapStateToProps)(Bugger);
export default ExserciseBurger
