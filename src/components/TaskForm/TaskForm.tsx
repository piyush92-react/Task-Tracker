import React, { useEffect,useState } from 'react';
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';
const { Option } = Select;

const TaskForm=() => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    let getData: any = window.localStorage.getItem('data');
    const task: any = [...JSON.parse(getData),values];
    window.localStorage.setItem('data', JSON.stringify(task));
    alert("Your new task has been created")
  };
 
  return (
    <Form onFinish={onFinish}
      form={form}
      name="task"
    >
      <Form.Item name="Company" rules={[
          {
            required: true,
            message: 'Please Select Company!',
          },
        ]}>
        <Select placeholder="Company">
          <Option value="Company 1">Company 1</Option>
          <Option value="Company 2">Company 2</Option>
          <Option value="Company 3">Company 3</Option>
        </Select>
      </Form.Item>
      <Form.Item name="Project" rules={[
          {
            required: true,
            message: 'Please Select Project!',
          },
        ]}>
        <Select placeholder="Project">
          <Option value="Project 1">Project 1</Option>
          <Option value="Project 2">Project 2</Option>
          <Option value="Project 3">Project 3</Option>
        </Select>
      </Form.Item>
      <Form.Item name="Task" rules={[
          {
            required: true,
            message: 'Please Enter Task Name!',
          },
        ]} >
        <Input placeholder="Enter Task Name" />
      </Form.Item>
      <Form.Item name="Status" rules={[
          {
            required: true,
            message: 'Please Select Status!',
          },
        ]}>
        <Select placeholder="Status">
          <Option value="Todo">Todo</Option>
          <Option value="Inprogress">In Progress</Option>
          <Option value="Done">Done</Option>
        </Select>
      </Form.Item>
      <Form.Item name="Priority" rules={[
          {
            required: true,
            message: 'Please Select Priority!',
          },
        ]}>
        <Select placeholder="Priority">
          <Option value="Very High">Very High</Option>
          <Option value="High">High</Option>
          <Option value="Medium">Medium</Option>
          <Option value="Low">Low </Option>
          <Option value="Very Low">Very low</Option>
        </Select>
      </Form.Item>
      <Form.Item name="Description" >
        <Input.TextArea placeholder="Task Description" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TaskForm;