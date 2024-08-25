import { Button, Card, Form, Input, InputNumber } from "antd";
import React, { useState } from 'react';
import axios from 'axios';

type FormType = {
  name: string;
  category: string;
  price: number;
}

export const ItemForm = (): JSX.Element => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleOnClick = async (values: FormType) => {
    try {
      const res = await axios.post('http://localhost:4000/api/add-item', values);
      if (res.status === 200) {
        alert('Item Added');
      };
      form.resetFields();
    } catch (err) {
      console.error(`Error adding item: ${err}`);
      throw err;
    }
  }

  return (
    <Card className="bg-slate-300 m-4">
      <Form
        layout="vertical"
        onFinish={handleOnClick}
      >
        <Form.Item<FormType>
          name="name"
          label="Name:"
          rules={[{
            required: true,
            message: "Please enter the item name"
          }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormType>
          name="category"
          label="Category:"
          rules={[{
            required: true,
            message: "Please enter the item category"
          }]}
        >
          <Input />
        </Form.Item>
        <Form.Item<FormType>
          name="price"
          label="Price:"
          rules={[{
            required: true,
            message: "Please enter the item price"
          }]}
        >
          <InputNumber
            prefix="$"
            className="w-full"
            min={0}
          />
        </Form.Item>
        <Form.Item>
          <Button
            className="mt-2 w-full bg-gray-600"
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            Save Item
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
