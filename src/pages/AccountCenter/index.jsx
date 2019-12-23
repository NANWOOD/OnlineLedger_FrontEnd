import { Avatar, Card, Col, Divider, Icon, Input, Row, Tag } from 'antd';
import React, { PureComponent } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import Link from 'umi/link';
import { connect } from 'dva';
import Projects from './components/Projects';
import Applications from './components/Applications';
import styles from './Center.less';
import CollapseBasic from './CollapseBasic';
import TableEditCell from './TableEditCell';
const operationTabList = [
  {
    key: 'applications',
    tab: <span>账本 </span>,
  },
  {
    key: 'projects',
    tab: <span>愿望清单 </span>,
  },
];

@connect(({ loading, accountCenter }) => ({
  currentUser: accountCenter.currentUser,
  currentUserLoading: loading.effects['accountCenter/fetchCurrent'],
}))
class AccountCenter extends PureComponent {
  // static getDerivedStateFromProps(
  //   props: accountCenterProps,
  //   state: accountCenterState,
  // ) {
  //   const { match, location } = props;
  //   const { tabKey } = state;
  //   const path = match && match.path;
  //   const urlTabKey = location.pathname.replace(`${path}/`, '');
  //   if (urlTabKey && urlTabKey !== '/' && tabKey !== urlTabKey) {
  //     return {
  //       tabKey: urlTabKey,
  //     };
  //   }
  //   return null;
  // }
  state = {
    newTags: [],
    inputVisible: false,
    inputValue: '',
    tabKey: 'applications',
  };
  input = undefined;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'accountCenter/fetchCurrent',
    });
    dispatch({
      type: 'accountCenter/fetch',
    });
  }

  onTabChange = key => {
    // If you need to sync state to url
    // const { match } = this.props;
    // router.push(`${match.url}/${key}`);
    this.setState({
      tabKey: key,
    });
  };
  showInput = () => {
    this.setState(
      {
        inputVisible: true,
      },
      () => this.input && this.input.focus()
    );
  };
  saveInputRef = input => {
    this.input = input;
  };
  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };
  handleInputConfirm = () => {
    const { state } = this;
    const { inputValue } = state;
    let { newTags } = state;

    if (inputValue && newTags.filter(tag => tag.label === inputValue).length === 0) {
      newTags = [
        ...newTags,
        {
          key: `new-${newTags.length}`,
          label: inputValue,
        },
      ];
    }

    this.setState({
      newTags,
      inputVisible: false,
      inputValue: '',
    });
  };
  renderChildrenByTabKey = tabKey => {
    if (tabKey === 'projects') {
      return <TableEditCell />;
    }

    if (tabKey === 'applications') {
      return <Applications />;
    }
    return null;
  };

  render() {
    const { newTags, inputVisible, inputValue, tabKey } = this.state;
    const { currentUser, currentUserLoading } = this.props;
    const dataLoading = currentUserLoading || !(currentUser && Object.keys(currentUser).length);
    return (
      <GridContent>
        <Row gutter={24}>
          <Col lg={7} md={24}>
            <Card
              bordered={false}
              style={{
                marginBottom: 24,
              }}
              loading={dataLoading}
            >
              {!dataLoading && (
                <div>
                  <div className={styles.avatarHolder}>
                    <img alt="" src={currentUser.avatar} />
                    <div className={styles.name}>{currentUser.name}</div>
                    <div>{currentUser.signature}</div>
                  </div>
                </div>
              )}
            </Card>
            <CollapseBasic />
          </Col>
          <Col lg={17} md={24}>
            <Card
              className={styles.tabsCard}
              bordered={false}
              tabList={operationTabList}
              activeTabKey={tabKey}
              onTabChange={this.onTabChange}
            >
              {this.renderChildrenByTabKey(tabKey)}
            </Card>
          </Col>
        </Row>
      </GridContent>
    );
  }
}

export default AccountCenter;
