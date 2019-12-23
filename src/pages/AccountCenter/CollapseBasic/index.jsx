import React from 'react';
import { Collapse, Input, Icon } from 'antd';
import styles from './index.less';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

export default () => (
  <div className={styles.container}>
    <div id="components-collapse-demo-basic">
      <Collapse defaultActiveKey={[]} onChange={callback}>
        <Panel header="修改账号信息" key="1">
          <Input 
           placeholder="修改用户名"
           allowClear
           prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
           maxLength={20}
          />
        </Panel>
      </Collapse>
    </div>
  </div>
);
