import { Button, Divider, Dropdown, Form, Icon, Menu, message, Table, Card, DatePicker, Row, Col, Select, Cascader } from 'antd';
import React, { useState } from 'react';
import reqwest from 'reqwest';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';
import FormQuery from './components/FormQuery';
import { queryRule, updateRule, addRule, removeRule } from './service';


/**
 * 添加节点
 * @param fields
 */




const handleAdd = async fields => {
  const hide = message.loading('正在添加');

  try {
    await addRule({
      desc: fields.desc,
    });
    hide();
    message.success('添加成功');
    return true;
  } catch (error) {
    hide();
    message.error('添加失败请重试！');
    return false;
  }
};
/**
 * 更新节点
 * @param fields
 */

const handleUpdate = async fields => {
  const hide = message.loading('正在配置');

  try {
    await updateRule({
      name: fields.name,
      desc: fields.desc,
      key: fields.key,
    });
    hide();
    message.success('配置成功');
    return true;
  } catch (error) {
    hide();
    message.error('配置失败请重试！');
    return false;
  }
};
/**
 *  删除节点
 * @param selectedRows
 */

const handleRemove = async selectedRows => {
  const hide = message.loading('正在删除');
  if (!selectedRows) return true;

  try {
    await removeRule({
      key: selectedRows.map(row => row.key),
    });
    hide();
    message.success('删除成功，即将刷新');
    return true;
  } catch (error) {
    hide();
    message.error('删除失败，请重试');
    return false;
  }
};

const columns = [
  {
    title: '账本',
    dataIndex: 'name',
  },
  {
    title: '收支',
    dataIndex: 'inout',
  },
  {
    title: '金额',
    dataIndex: 'callNo',
    sorter: true,
    renderText: val => `${val}`,
  },
  {
    title: '类别',
    dataIndex: 'category',
  },
  {
    title: '子类',
    dataIndex: 'child_cata',
  },
  {
    title: '支付类型',
    dataIndex: 'credit',
  },
  {
    title: '备注',
    dataIndex: 'desc',
  }, // {
  //   title: '状态',
  //   dataIndex: 'status',
  //   valueEnum: {
  //     0: {
  //       text: '关闭',
  //       status: 'Default',
  //     },
  //     1: {
  //       text: '运行中',
  //       status: 'Processing',
  //     },
  //     2: {
  //       text: '已上线',
  //       status: 'Success',
  //     },
  //     3: {
  //       text: '异常',
  //       status: 'Error',
  //     },
  //   },
  // },
  {
    title: '时间',
    dataIndex: 'updatedAt',
    // sorter: true,
    valueType: 'dateTime',
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    render: (_, record) => (
      <>
        <a
          onClick={() => {
            handleUpdateModalVisible(true);
            setStepFormValues(record);
          }}
        >
          编辑
        </a>
        <Divider type="vertical" />
        <a
          onClick={() => {
            handleRemove(record);
          }}
        >
          删除
        </a>
      </>
    ),
  },
];
const columns1 = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      {
        text: 'Male',
        value: 'male',
      },
      {
        text: 'Female',
        value: 'female',
      },
    ],
    width: '20%',
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: '操作',
    dataIndex: 'option',
    valueType: 'option',
    render: (_, record) => (
      <>
        <a
          onClick={() => {
            handleUpdateModalVisible(true);
            setStepFormValues(record);
          }}
        >
          编辑
        </a>
        <Divider type="vertical" />
        <a
          onClick={() => {
            handleRemove(record);
          }}
        >
          删除
        </a>
      </>
    ),
  },
];

class TableList extends React.Component {
  // const [createModalVisible, handleModalVisible] = useState(false);
  // const [updateModalVisible, handleUpdateModalVisible] = useState(false);
  // const [stepFormValues, setStepFormValues] = useState({});
  // const [actionRef, setActionRef] = useState();
  state = {
    data: [],
    pagination: {},
    loading: false,
  };

  


  componentDidMount() {
    this.fetch();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, fieldvalues) => {
      if (!err) {
        console.log('Received values of form: ', fieldvalues);
      }
      if (err) {
        return;
      }
      const values = {
        ...fieldvalues,
        'date-picker': fieldvalues['date-picker'].format('YYYY-MM-DD'),
      };
      console.log('nmsl');
      console.log(values);
    });
  };

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };
  fetch = (params = {}) => {
    console.log('params:', params);
    this.setState({
      loading: true,
    });
    reqwest({
      url: 'https://randomuser.me/api',
      method: 'get',
      data: {
        results: 10,
        ...params,
      },
      type: 'json',
    }).then(data => {
      const pagination = { ...this.state.pagination }; // Read total count from server
      // pagination.total = data.totalCount;

      pagination.total = 200;
      this.setState({
        loading: false,
        data: data.results,
        pagination,
      });
    });
  };

  render() {
    return (
      <PageHeaderWrapper>
        <Card title="筛选查询" style={{marginBottom: 24,}}>
          <FormQuery />
        </Card>
        <Card
          style={{
            marginBottom: 24,
          }}
          title="账目明细"
          bordered={false}
          bodyStyle={{
            padding: 0,
          }}
        >
          <Table
            columns={columns1}
            rowKey={record => record.login.uuid}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
          />
        </Card>
        {/* <Table
         rowKey="key"
         toolBarRender={(action, { selectedRows }) => [
           <Button icon="plus" type="primary" onClick={() => handleModalVisible(true)}>
             新建
           </Button>,
           selectedRows && selectedRows.length > 0 && (
             <Dropdown
               overlay={
                 <Menu
                   onClick={async e => {
                     if (e.key === 'remove') {
                       await handleRemove(selectedRows);
                       action.reload();
                     }
                   }}
                   selectedKeys={[]}
                 >
                   <Menu.Item key="remove">批量删除</Menu.Item>
                   <Menu.Item key="approval">批量审批</Menu.Item>
                 </Menu>
               }
             >
               <Button>
                 批量操作 <Icon type="down" />
               </Button>
             </Dropdown>
           ),
         ]}
         tableAlertRender={(selectedRowKeys, selectedRows) => (
           <div>
             已选择{' '}
             <a
               style={{
                 fontWeight: 600,
               }}
             >
               {selectedRowKeys.length}
             </a>{' '}
             项&nbsp;&nbsp;
             <span>
               服务调用次数总计 {selectedRows.reduce((pre, item) => pre + item.callNo, 0)} 万
             </span>
           </div>
         )}
         request={params => queryRule(params)}
         columns={columns}
        /> */}
        {/* <CreateForm
         onSubmit={async value => {
           const success = await handleAdd(value);
            if (success) {
             handleModalVisible(false);
             actionRef.reload();
           }
         }}
         onCancel={() => handleModalVisible(false)}
         modalVisible={createModalVisible}
        /> */}
        {/* {stepFormValues && Object.keys(stepFormValues).length ? (
         <UpdateForm
           onSubmit={async value => {
             const success = await handleUpdate(value);
              if (success) {
               handleModalVisible(false);
               setStepFormValues({});
               actionRef.reload();
             }
           }}
           onCancel={() => {
             handleUpdateModalVisible(false);
             setStepFormValues({});
           }}
           updateModalVisible={updateModalVisible}
           values={stepFormValues}
         />
        ) : null} */}
      </PageHeaderWrapper>
    );
  }
}

export default TableList;
