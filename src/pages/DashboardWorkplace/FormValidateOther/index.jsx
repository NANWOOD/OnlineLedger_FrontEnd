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
import styles from './index.less';

const { Option } = Select;

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

class Demo extends React.Component {
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
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Row>
          <Col span={8}>
            <Form.Item label="账本" hasFeedback style={{marginTop:"20px"}}>
              {getFieldDecorator('ledgerbook', {
                rules: [
                  {
                    required: true,
                    message: '请选择账本！',
                  },
                ],
              })(
                <Select placeholder="选择账本">
                  <Option value="lb1">账本1</Option>
                  <Option value="lb2">账本2</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="收支" hasFeedback style={{marginTop:"20px"}}>
              {getFieldDecorator('inorout', {
                rules: [
                  {
                    required: true,
                    message: '请填写收支类型！',
                  },
                ],
              })(
                <Select placeholder="收支类型">
                  <Option value="in">收入</Option>
                  <Option value="out">支出</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="金额(CNY)" style={{marginTop:"20px"}}>
              {getFieldDecorator('value', {
                initialValue: 0.00,
              })(<InputNumber precision={2} min={0} />)}
              <span className="ant-form-text"> 元</span>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8}>
            <Form.Item label="支付类型">
              {getFieldDecorator('paytype')(
                <Select placeholder="支付类型">
                  <Option value="nocredit">现金、电子账户</Option>
                  <Option value="credit">信用支付</Option>
                </Select>,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="类别">
              {getFieldDecorator('class')(
                <Cascader
                fieldNames={{ label: 'name', value: 'code', children: 'items' }}
                options={options}
                placeholder="选择分类"
                />,
              )}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="日期">
              {getFieldDecorator('date-picker', {
                rules: [
                  {
                    required: true,
                    message: "请选择时间！",
                  },
                ],
              })(<DatePicker />)}
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={16} pull={2}>
            <Form.Item label="备注">
              {getFieldDecorator('appendix')(<Input placeholder="请填写备注" />)}
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button htmlType="submit" icon="money-collect">
                记账
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

const WrappedDemo = Form.create({
  name: 'validate_other',
})(Demo);
export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-validate-other">
      <WrappedDemo />
    </div>
  </div>
);
