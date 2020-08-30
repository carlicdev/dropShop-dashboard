import React from 'react'
import { Button, notification } from 'antd';

const openNotification = () => {
    notification.open({
        message: 'Notification Title',
        description: 'This is the content of the notification',

    });
};

const MyNotification = () => {
    return (
        <Button type='primary' onClick={openNotification}>
            Open notification
        </Button>
    )
}

export default MyNotification
