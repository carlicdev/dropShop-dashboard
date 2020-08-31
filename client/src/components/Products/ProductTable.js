import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Tag, Space } from 'antd';

const ProductTable = () => {
    const [products, setProducts] = useState(null);
    const [columns, setColumns] = useState([
        {title: 'Artículo', dataIndex:'name', key:'name'},
        {title: 'Descripción', dataIndex:'description', key:'description'},
        {title: 'Precio', dataIndex:'price', key:'price'},
        {title: 'Inventario', dataIndex:'onStore', key:'onStore'},
        {title: 'Ajustes', key:'ajustes', render: () => <Space><a onClick={onClick}>Eliminar</a> <a>Editar</a></Space>},
    ])

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get('/api/products/');
            const arr = res.data.products;
            arr.map(i => {
                i.key = arr.indexOf(i)
            })
            setProducts(arr);
        };
        getProducts();
    }, []);

    const onClick = e => {
        e.preventDefault();
        alert('Hi there')
    }

    return (
        <div>
            <Table columns={columns} dataSource={products} pagination={false} />
        </div>
    )
}

export default ProductTable
