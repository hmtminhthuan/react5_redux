import React, { Component } from 'react'
import { connect } from 'react-redux'
class Table extends Component {
    renderTable = () => {
        let { burger, menu } = this.props
        let contentHead = [];
        for (let item in menu) {
            let arrMenu = [];
            arrMenu.push(
                <tr key={item}>
                    <td className='text-center  item_order_name' style={{ fontWeight: 'bold' }}>{item}</td>
                    <td className='text-center' style={{ fontWeight: 'bold' }}>
                        <button className='btn btn-danger mx-2' onClick={() => {
                            const action = {
                                type: 'soLuong',
                                payload: item,
                                item: -1,
                            }
                            this.props.dispatch(action)
                        }}>-</button>
                        {burger[item]}
                        <button className='btn btn-success mx-2' onClick={() => {
                            const action = {
                                type: 'soLuong',
                                payload: item,
                                item: 1,
                            }
                            this.props.dispatch(action)
                        }}>+</button>
                    </td>
                    <td className='text-center' style={{ fontWeight: 'bold' }}>{menu[item]}</td>
                    <td className='text-center' style={{ fontWeight: 'bold' }}>{burger[item] * menu[item]}</td>
                </tr>
            )
            contentHead.push(arrMenu);
        }
        return contentHead;
    }
    render() {
        let { total } = this.props
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='text-success text-center'>Thức ăn</th>
                            <th className='text-success text-center'>Số lượng</th>
                            <th className='text-success text-center'>Đơn giá</th>
                            <th className='text-success text-center'>Thành tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={2}></td>
                            <td className='text-primary text-center' style={{ fontWeight: 'bold' }}>Tổng cộng</td>
                            <td className='text-primary text-center'><div><span className='text-primary' style={{ fontWeight: 'bold' }}>{total}</span></div></td>
                        </tr>
                    </tfoot>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    burger: state.buggerState.burger,
    menu: state.buggerState.menu,
    total: state.buggerState.total
})


const BurgerMenu = connect(mapStateToProps)(Table);
export default BurgerMenu;
