import React, { useState } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

function Categories() {
  const [status, setStatus] = useState('');
  const handleClick = () => {
    setStatus('Page Under Construction');
  };
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  return (
    <section className="headerWrapper">
      <div className="headerContainer">
        <Spin indicator={antIcon} />
        <button type="button" className="statusBtn" onClick={handleClick}>
          Check status
        </button>
        <span className="statusMsg">
          {status}
        </span>
      </div>
    </section>
  );
}

export default Categories;