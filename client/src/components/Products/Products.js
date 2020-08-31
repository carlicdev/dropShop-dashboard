import React from 'react';
import { Row } from 'antd';
import ProductTable from './ProductTable'
import ProductCard from './ProductCard';
import MyBreadcrumb from '../Breadcrumb/MyBreadcrumb';

const Products = () => {
    return (
        <div>
            <MyBreadcrumb history={['Productos']} />
            <Row>
                <ProductCard title='Mas Vendido' lead='CBD Oil'/>
                <ProductCard title='Mejor Tandem' lead='CBD Oil y Pomada CBD'/>
                <ProductCard title='Ventas Totales' lead='100'/>
                <ProductCard title='Mas Vendido' lead='CBD Oil'/>
                <ProductCard title='Mejor Tandem' lead='CBD Oil y Pomada CBD'/>
                <ProductCard title='Ventas Totales' lead='100'/>
            </Row>
            <ProductTable />
        </div>
    )
}

export default Products
