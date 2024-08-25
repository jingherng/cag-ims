import { Card, Table, TableColumnsType } from "antd";
import React from 'react';

export type ItemData = {
  name: string;
  price: number;
  category: string;
}

type Props = {
  data: ItemData[];
}

export const ItemTable = ({
  data
}: Props): JSX.Element => {
  const columns: TableColumnsType<ItemData> = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      width: '50%',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      width: '20%',
    },
    {
      title: 'Category',
      dataIndex: 'category',
      filters: [...new Map(data.map(item => [item['category'], item])).values()].map((itemData) => ({
        text: itemData.category,
        value: itemData.category,
      })),
      onFilter: (value, itemData) => itemData.category.includes(value as string),
      width: '30%',
    }
  ];

  const dataSource = data.map((item: ItemData) => ({
    name: item.name,
    price: item.price,
    category: item.category,
  }));


  return (
    <Card className="bg-slate-300 m-4">
      <Table columns={columns} dataSource={dataSource} />
    </Card>
  );
}
