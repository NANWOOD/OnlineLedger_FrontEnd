import { Avatar, Card, Dropdown, Icon, List, Menu, Tooltip, Button } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';
import numeral from 'numeral';
import AddButtonother from './AddButtonother';
import stylesApplications from './index.less';
import AddButton from './AddButton';

export function formatWan(val) {
  const v = val * 1;
  if (!v || Number.isNaN(v)) return '';
  let result = val;

  if (val > 10000) {
    result = (
      <span>
        ￥
        {Math.floor(val / 10000)}
        <span
          style={{
            position: 'relative',
            top: -2,
            fontSize: 14,
            fontStyle: 'normal',
            marginLeft: 2,
          }}
        >
          万
        </span>
      </span>
    );
  }

  return result;
}

@connect(({ accountCenter }) => ({
  list: accountCenter.list,
}))
class Applications extends Component {
  render() {
    const { list } = this.props;

    const CardInfo = ({ activeUser, newUser }) => (
      <div className={stylesApplications.cardInfo}>
        <div>
          <p>剩余款项</p>
          <p>{activeUser}</p>
        </div>
        <div>
          <p>预算</p>
          <p>{'￥' + newUser}</p>
        </div>
      </div>
    );

    return (
      <List
        rowKey="id"
        className={stylesApplications.filterCardList}
        grid={{
          gutter: 24,
          xxl: 3,
          xl: 2,
          lg: 2,
          md: 2,
          sm: 2,
          xs: 1,
        }}
        dataSource={list}
        renderItem={item => (
          <List.Item key={item.id}>
            <Card
              hoverable
              bodyStyle={{
                paddingBottom: 20,
              }}
              actions={[
                // <Tooltip key="enter" title="进入">
                //   <Icon type="enter" />
                // </Tooltip>,
                <Tooltip title="编辑" key="edit">
                  {/* <Button icon="edit" /> */}
                  <AddButtonother lbname={item.title} budget={item.newUser}/>
                </Tooltip>,
                <Tooltip title="删除" key="delete">
                  <Button icon="delete" />
                </Tooltip>,
              ]}
            >
              <Card.Meta avatar={<Avatar size="meidum" icon="account-book" style={{ backgroundColor: '#1890ff' }}/>} title={item.title} />
              <div className={stylesApplications.cardItemContent}>
                <CardInfo
                  activeUser={formatWan(item.activeUser)}
                  newUser={numeral(item.newUser).format('0,0')}
                />
              </div>
            </Card>
          </List.Item>
        )}
      />
    );
  }
}

export default Applications;
