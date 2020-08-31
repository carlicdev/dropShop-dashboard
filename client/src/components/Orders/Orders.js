import React from 'react'
import OrderList from './OrderList'
import OrderCard from './OrderCard';
import { Row, Card } from 'antd';

import MyBreadcrumb from '../Breadcrumb/MyBreadcrumb';

const Orders = () => {
    return (
        <div>
            <MyBreadcrumb history={['Ordenes']}/>
            <Row>
                <OrderCard title='Cerradas' lead='5' />
                <OrderCard title='Pagadas' lead='3' />
                <OrderCard title='Totales' lead='8' />
            </Row>
            <MyBreadcrumb history={['Este mes']}/>
            <Row>
                <OrderCard title='Cerradas' lead='5' />
                <OrderCard title='Pagadas' lead='3' />
                <OrderCard title='Totales' lead='8' />
            </Row>
            <MyBreadcrumb history={['Esta semana']}/>
            <Row>
                <OrderCard title='Cerradas' lead='5' />
                <OrderCard title='Pagadas' lead='3' />
                <OrderCard title='Totales' lead='8' />
            </Row>
            <OrderList />
        </div>
    )
}

export default Orders;
