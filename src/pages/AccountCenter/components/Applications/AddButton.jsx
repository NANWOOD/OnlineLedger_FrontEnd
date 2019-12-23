
import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Button, Input, InputNumber } from 'antd';

class AddButton extends React.Component {
  state = { 
            visible: false ,
            lbname: "",
            budget: 0,
          };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      lbname: "",
      budget: 0,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  onchange1 = e =>{
    this.setState({lbname: e.target.value,})
  }

  onchange2 = e =>{
    // console.log(e)
    this.setState({budget: e,})
  }

  render() {
    return (
      <div>
        <Button type="primary" icon='plus' onClick={this.showModal}>
          添加账本
        </Button>
        <Modal
          title="添加账本"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Input placeholder="账本名称" style={{marginBottom:'15px'}} value={this.state.lbname} onChange={this.onchange1}/>
          账本预算：<InputNumber min={0} placeholder="账本预算" value={this.state.budget} onChange={this.onchange2}/> 元
        </Modal>
      </div>
    );
  }
}

export default AddButton;
          