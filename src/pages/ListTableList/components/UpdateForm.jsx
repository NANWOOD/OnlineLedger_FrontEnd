import { Button, DatePicker, Form, Input, Modal, Radio, Select, Steps, InputNumber } from 'antd';
import React, { Component } from 'react';

const FormItem = Form.Item;
// const { Step } = Steps;
const { TextArea } = Input;
const { Option } = Select;
const RadioGroup = Radio.Group;

class UpdateForm extends Component {
  static defaultProps = {
    handleUpdate: () => {},
    handleUpdateModalVisible: () => {},
    values: {},
  };

  formLayout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 13,
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      formVals: {
        name: props.values.name,
        desc: props.values.desc,
        key: props.values.key,
        amount: props.values.callNo,
        target: '0',
        template: '0',
        type: '1',
        time: '',
        frequency: 'month',
      },
    };
  }

  handleNext = () => {
    const { form, onSubmit: handleUpdate } = this.props;
    const { formVals: oldValue } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      const formVals = { ...oldValue, ...fieldsValue };
      this.setState(
        {
          formVals,
        },
        () => {
          handleUpdate(formVals);
        },
      );
    });
  };

  // backward = () => {
  //   const { currentStep } = this.state;
  //   this.setState({
  //     currentStep: currentStep - 1,
  //   });
  // };

  // forward = () => {
  //   const { currentStep } = this.state;
  //   this.setState({
  //     currentStep: currentStep + 1,
  //   });
  // };

  renderContent = formVals => {
    const { form } = this.props;

    // return [
    // if (currentStep === 2) {
    //   return [
    //     <FormItem key="time" {...this.formLayout} label="开始时间">
    //       {form.getFieldDecorator('time', {
    //         rules: [
    //           {
    //             required: true,
    //             message: '请选择开始时间！',
    //           },
    //         ],
    //       })(
    //         <DatePicker
    //           style={{
    //             width: '100%',
    //           }}
    //           showTime
    //           format="YYYY-MM-DD HH:mm:ss"
    //           placeholder="选择开始时间"
    //         />,
    //       )}
    //     </FormItem>,
    //     <FormItem key="frequency" {...this.formLayout} label="调度周期">
    //       {form.getFieldDecorator('frequency', {
    //         initialValue: formVals.frequency,
    //       })(
    //         <Select
    //           style={{
    //             width: '100%',
    //           }}
    //         >
    //           <Option value="month">月</Option>
    //           <Option value="week">周</Option>
    //         </Select>,
    //       )}
    //     </FormItem>,
    //   ];
    // }

    return [
      <FormItem key="name" {...this.formLayout} label="账本">
        {form.getFieldDecorator('name', {
          rules: [
            {
              required: true,
              message: '请输入账本！',
            },
          ],
          // initialValue: formVals.name,
          initialValue: "lb1",
        })(
            <Select placeholder="收支类型">
                <Option value="lb1">账本1</Option>
                <Option value="lb2">账本2</Option>
            </Select>,
        )}
      </FormItem>,
      // <FormItem key='inout' {...this.formLayout} label="收支">
      //   {form.getFieldDecorator('inout',{
      //     // initialValue: formVals.inout
      //     initialValue:"in",
      //   })(
      //     <Select placeholder="收支类型">
      //       <Option value="in">收入</Option>
      //       <Option value="out">支出</Option>
      //     </Select>
      //   )}
      // </FormItem>,
      <FormItem key="callNo" {...this.formLayout} label="金额(CNY)" >
        {form.getFieldDecorator('callNo', {
          initialValue: formVals.amount,
        })(<InputNumber precision={2} min={0} />)}
        <span className="ant-form-text"> 元</span>
      </FormItem>,

      <FormItem key="desc" {...this.formLayout} label="备注">
        {form.getFieldDecorator('desc', {
          initialValue: formVals.desc,
        })(<TextArea rows={4} placeholder="请输入备注" />)}
      </FormItem>,
    ];
  };

  renderFooter = () => {
    const { onCancel: handleUpdateModalVisible, values } = this.props;

    return [
      <Button key="cancel" onClick={() => handleUpdateModalVisible(false, values)}>
        取消
      </Button>,
      <Button key="submit" type="primary" onClick={() => this.handleNext()}>
        完成
      </Button>,
    ];
  };

  render() {
    const { updateModalVisible, onCancel: handleUpdateModalVisible, values } = this.props;
    const { formVals } = this.state;
    return (
      <Modal
        width={640}
        bodyStyle={{
          padding: '32px 40px 48px',
        }}
        destroyOnClose
        title="编辑"
        visible={updateModalVisible}
        footer={this.renderFooter()}
        onCancel={() => handleUpdateModalVisible(false, values)}
        afterClose={() => handleUpdateModalVisible()}
      >
        {/* <Steps
          style={{
            marginBottom: 28,
          }}
          size="small"
          current={currentStep}
        >
          <Step title="基本信息" />
          <Step title="配置规则属性" />
          <Step title="设定调度周期" />
        </Steps> */}
        {this.renderContent(formVals)}
      </Modal>
    );
  }
}

export default Form.create()(UpdateForm);
