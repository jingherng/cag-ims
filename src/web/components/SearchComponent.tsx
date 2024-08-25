import { Button, Card, Form, Input } from "antd";
import { ItemData, ItemTable } from "./ItemTable";
import React, { useState } from 'react';
import axios from 'axios';

type SearchType = {
  category: string;
}

export const SearchComponent = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [itemData, setItemData] = useState<ItemData[]>([]);

  const handleOnClick = async (values: SearchType) => {
    try {
      const { data } = await axios.get('http://localhost:4000/api/category', { params: values });
      setItemData(data.items);
    } catch (err) {
      console.error(`Error adding item: ${err}`);
      throw err;
    }
  }
  return (
    <>
      <Card className="bg-slate-100 m-4">
        <Form
          layout="horizontal"
          onFinish={handleOnClick}
        >
          <Form.Item<SearchType>
            name="category"
          >
            <Input
              placeholder="Search items by category"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
            >
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card >
      {<ItemTable data={itemData} />}
    </>
  );
}
