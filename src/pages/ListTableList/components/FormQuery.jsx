import React from 'react';
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Icon,
  Rate,
  Checkbox,
  Row,
  Col,
  DatePicker,
  Input,
  Cascader,
} from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;
const { RangePicker } = DatePicker;

const options = [
  {
    code: 'food',
    name: '餐饮',
    items: [
      {
        code: 'togo',
        name: '外卖',
      },
      {
        code: 'fooditem',
        name: '食材',
      },
      {
        code: 'restaurant',
        name: '餐厅酒店',
      },
      {
        code: 'food_other',
        name: '其他',
      },
    ],
  },
  {
    code: 'shopping',
    name: '购物',
    items: [
      {
        code: 'daily',
        name: '日用品'
      },
      {
        code: 'cloth',
        name: '衣服饰品',
      },
      {
        code: 'snap',
        name: '零食等'
      },
      {
        code: 'digital',
        name: '数码电子',
      },
      {
        code: 'shopping_other',
        name: '其他',
      }
    ],
  },
  {
    code: 'out',
    name: '出行',
    items: [
      {
        code: 'livein',
        name: '住宿',
      },
      {
        code: 'taxi',
        name: '的士出租',
      },
      {
        code: 'public_trans',
        name: '公共交通',
      },
      {
        code: 'out_other',
        name: '其他',
      }
    ]
  },
  {
    code: 'all_other',
    name: '其他',
  },
];

class Demo2 extends React.Component {
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
        'date_from': fieldvalues['daterange'][0].format('YYYY-MM-DD'),
        'date_to': fieldvalues['daterange'][1].format('YYYY-MM-DD'), 
      };
      console.log('nmsl');
      console.log(values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  normFile = e => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        span: 6,
      },
      wrapperCol: {
        span: 14,
      },
    };
    return (
        <Form onSubmit={this.handleSubmit} onReset={this.handleReset}>
        <Row>
          <Col span={4}>
            <Form.Item  hasFeedback style={{marginLeft:"20px"}}>
              {getFieldDecorator('ledgerbook',)(
                <Select placeholder="选择账本">
                  <Option value="lb1">账本1</Option>
                  <Option value="lb2">账本2</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item  hasFeedback style={{marginLeft:"20px"}}>
              {getFieldDecorator('inorout',)(
                <Select placeholder="收支类型">
                  <Option value="in">收入</Option>
                  <Option value="out">支出</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item  hasFeedback style={{marginLeft:"20px"}}>
              {getFieldDecorator('paytype')(
                <Select placeholder="支付类型">
                  <Option value="nocredit">现金、电子账户</Option>
                  <Option value="credit">信用支付</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
          <Col span={4}>
          <Form.Item  hasFeedback style={{marginLeft:"20px"}}>
              {getFieldDecorator('class')(
                <Cascader
                  fieldNames={{ label: 'name', value: 'code', children: 'items' }}
                  options={options}
                  placeholder="选择分类"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item  hasFeedback style={{marginLeft:"20px"}} >
              {getFieldDecorator('daterange')(
                <RangePicker
                  dateRender={current => {
                    const style = {};
                    if (current.date() === 1) {
                      style.border = '1px solid #1890ff';
                      style.borderRadius = '50%';
                    }
                    return (
                      <div className="ant-calendar-date" style={style}>
                        {current.date()}
                      </div>
                    );
                  }}
                />
              )}
            </Form.Item>
          </Col>
          <Col span={1}>
            <Form.Item
              // wrapperCol={{
              //   span: 12,
              //   offset: 6,
              // }}
              hasFeedback style={{marginLeft:"5px"}}
            >
              <Button htmlType="submit" icon="search">
              </Button>
            </Form.Item>
         </Col>
         <Col span={1}>
            <Form.Item
              // wrapperCol={{
              //   span: 12,
              //   offset: 6,
              // }}
              hasFeedback style={{marginLeft:"5px"}}
            >
              <Button htmlType="reset" icon="retweet">
              </Button>
            </Form.Item>
         </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedDemo2 = Form.create({
  name: 'form_query',
})(Demo2);
export default () => (
    <div id="components-form-query">
      <WrappedDemo2 />
    </div>
);
