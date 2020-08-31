import React, { useState, useEffect } from 'react'
import { Table, Radio} from 'antd';
import axios from 'axios';

import { sortByDate } from '../../utils/helpers';

const OrderList = () => {
    const [orders, setOrders] = useState(null);
    const [filteredOrders, setFilteredOrders] = useState(null);
    const [filterBy, setFilterBy] = useState('');
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
            const orderList = sortByDate(res.data.orders);
            orderList.map(i => {
                return i.key = orderList.indexOf(i);
            })
            setOrders(orderList);
            setFilteredOrders(orderList);
        }
        getOrders();
    }, []);

    useEffect(() => {
        if(filterBy.length > 1) {
            const filterOrders = orders.filter(i => i.status === filterBy);
            setFilteredOrders(filterOrders)
        } else {
            setFilteredOrders(orders)
        }
    }, [filterBy])

    return (
        <div>
            {
                !orders && <p>Loading..</p>
            }
            {
                orders && (
                    <div className='mt-5'>
                        <Radio.Group value={filterBy} onChange={(e) => setFilterBy(e.target.value)}>
                            <Radio.Button value=''>Todas</Radio.Button>
                            <Radio.Button value='pending'>Pendientes</Radio.Button>
                            <Radio.Button value='placed'>Pagadas</Radio.Button>
                            <Radio.Button value='closed'>Cerradas</Radio.Button>
                        </Radio.Group>
                        <Table columns={columns} dataSource={filteredOrders} />
                    </div>
                )
            }
        </div>
    )
}

export default OrderList
