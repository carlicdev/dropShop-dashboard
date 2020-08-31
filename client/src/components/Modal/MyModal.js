import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

const MyModal = (props) => {
    const [loading, setLoading] = useState(false);
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Modal
                visible={props.visible}
                title='Title'
                footer={[
                    <Button>
                        Cancelar
                    </Button>,
                    <Button type='primary'>
                        OK
                    </Button>
                ]}
            >
                {props.content}
            </Modal>
        </div>
    )
}

export default MyModal
