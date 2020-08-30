import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    ExclamationCircleOutlined,
    LineChartOutlined,
    FileTextOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
         <Sider className='my-sider' collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
            <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
            <Menu.Item key='1' icon={<LineChartOutlined />}>
                Actividad
            </Menu.Item>
            <Menu.Item key='2' icon={<ExclamationCircleOutlined />}>
                Notificaciones
            </Menu.Item>
            <SubMenu key='sub1' icon={<AppstoreOutlined />} title='Productos'>
                <Menu.Item key='4'>
                    <Link to='/products'>
                        Agregar producto
                    </Link>
                </Menu.Item>
                <Menu.Item key='5'>Editar producto</Menu.Item>
                <Menu.Item key='6'>Eliminar producto</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<FileTextOutlined />} title='Ordenes'>
                <Menu.Item key='7'>
                    <Link to='/orders'>
                        Ordenes
                    </Link>
                </Menu.Item>
                <Menu.Item key='8'>Pendientes</Menu.Item>
                <Menu.Item key='9'>Completadas</Menu.Item>
                <Menu.Item key='10'>Canceladas</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' icon={<UserOutlined />} title='Clientes'>
                <Menu.Item key='11'>
                    <Link to='/myclients'>
                        Clientes
                    </Link>
                </Menu.Item>
                <Menu.Item key='12'>Agregar cliente</Menu.Item>
            </SubMenu>
            </Menu>
        </Sider>   
    )
}

export default Sidebar


