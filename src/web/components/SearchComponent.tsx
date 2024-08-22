import { Button, Card, Input } from "antd";
import React, { useState } from 'react';

export const SearchComponent = (): JSX.Element => {
    const [loading, setLoading] = useState(false);

    return (
        <Card className="bg-slate-100 m-4">
            <div className="flex flex-row">
                <Input
                    className="flex-auto w-full"
                    placeholder="Search items"
                />
                <Button
                    className="flex-none ml-24"
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                >
                    Search
                </Button>
            </div>
        </Card>
    );
}
