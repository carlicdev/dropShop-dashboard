import React, { useState, useEffect } from 'react'
import { Table} from 'antd';
import MyBreadcrumb from '../Breadcrumb/MyBreadcrumb';
import axios from 'axios';

const OrderList = () => {
    const [orders, setOrders] = useState(null);
    const [columns] = useState([
        {title: 'Orden', dataIndex:'_id', key:'_id'},
        {title: 'Nombre', dataIndex:'userId', key:'userId', render: userId => userId.username},
        {title: 'Status', dataIndex:'status', key:'status'},
        {title: 'Fecha', dataIndex:'timestamp', key:'timestamp'},
        {title: 'Total', dataIndex:'total', key:'total'},
    ])

    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get('/api/orders');
            const orderList = res.data.orders;
            orderList.map(i => {
                return i.key = orderList.indexOf(i);
            })
            setOrders(orderList);
        }
        getOrders();
    }, []);
    console.log(orders)

    return (
        <div>
            <MyBreadcrumb history={['Ordenes']}/>
            {
                !orders && <p>Loading..</p>
            }
            {
                orders && (
                    <Table columns={columns} dataSource={orders} />
                )
            }
        </div>
    )
}

export default OrderList
