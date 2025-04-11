import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const DropDownList = ({ size }) => {
    const [sizeList, setSizeList] = useState([]);
    console.log('size', size, typeof size);
    useEffect(() => {
        if (size?.length > 0) {
            setSizeList(size);
            console.log('sizeList', sizeList);
        }
    }, [size]);
    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant='outline-secondary' id='dropdown-basic' style={{ width: '100%' }}>
                    옵션 선택
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: '100%' }}>
                    {sizeList.map((item, i) => (
                        <Dropdown.Item href={`#/action-${i}`} key={i}>
                            {item}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};

export default DropDownList;
