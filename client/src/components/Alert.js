import React from 'react';
import { Alert } from 'antd';

const MyAlert = () => {

    const onClose = (e) => {
        console.log(e, 'I was closed.');
      };


    return (
        <div>
            <Alert
                message='Orden nueva'
                description='Alguien ha pedido 2 goteros de CBD'
                type='warning'
                closable
                onClose={onClose}
            />
        </div>
    )
}

export default MyAlert
