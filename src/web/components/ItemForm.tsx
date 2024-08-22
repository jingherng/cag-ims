import { Button, Card, Form, Input } from "antd";
import React, { useState } from 'react';

export const ItemForm = (): JSX.Element => {
    const [loading, setLoading] = useState(false);

    return (
        <Card className="bg-slate-300 m-4">
            <Form layout="vertical">
                <Form.Item
                    name="name"
                    label="Name:"
                    rules={[{
                        required: true,
                        message: "Please enter the item name"
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="category"
                    label="Category:"
                    rules={[{
                        required: true,
                        message: "Please enter the item category"
                    }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="price"
                    label="Price:"
                    rules={[{
                        required: true,
                        message: "Please enter the item price"
                    }]}
                >
                    <Input type="number" />
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
