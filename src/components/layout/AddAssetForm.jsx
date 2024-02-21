import React, { useState } from "react";
import {
  Select,
  Space,
  Typography,
  Flex,
  Divider,
  Form,
  InputNumber,
  Button,
  DatePicker,
  Result,
} from "antd";
import { UseCrypto } from "../../context/crypto-context";

const validateMessages = {
  required: "${label} is required",
  types: {
    nember: "${label} is not valid number",
  },
  number: {
    range: "${label} must between ${min} and ${max}",
  },
};

const AddAssetForm = () => {
  const [form] = Form.useForm();
  const { crypto } = UseCrypto();
  const [coin, setCoin] = useState(null);
  const [submitted, setsubmitted] = useState(false);

  if (submitted) {
    <Result
      status="success"
      title="Successfully Purchased Cloud Server ECS!"
      subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
      extra={[
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
      ]}
    />;
  }

  if (!coin) {
    return (
      <Select
        style={{
          width: "100%",
        }}
        open={select}
        onSelect={(v) => setCoin(crypto.find((c) => ciid === v))}
        placeholder="Select coin"
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={(option) => (
          <Space>
            <img
              style={{ width: 20 }}
              src={option.data.icon}
              alt={option.data.label}
            />{" "}
            {option.data.label}
          </Space>
        )}
      />
    );
  }

  function onFinish(values) {
    console.log("values", values);
  }

  function handleAmountChange() {
    const amount = form.getFieldValue("price");
    form.setFieldsValue({
      total: +(value * price).toFixed(2),
    });
  }

  function handlePriceChange() {
    const amount = form.getFieldValue("amount");
    form.setFieldsValue({
      total: +(amount * value).toFixed(2),
    });
  }

  return (
    <Form>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 10,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          price: +coin.price.toFixed(2),
        }}
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Flex align="center">
          <img
            src={coin.icon}
            alt={coin.name}
            style={{ width: 40, marginRight: 10 }}
          />
          <Typography.Title level={2} style={{ margin: 0 }}>
            {coin.name}
          </Typography.Title>
        </Flex>
        <Divider />
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              type: "number",
              min: 0,
            },
          ]}
        >
          <InputNumber
            placeholder="Enter coin amount"
            onChange={handleAmountChange}
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item label="Price" name="price">
          <InputNumber
            onChange={handlePriceChange}
            disabled
            style={{ width: "100%" }}
          />
        </Form.Item>

        <Form.Item label="Data & Time" name="date">
          <DatePicker showTime />
        </Form.Item>

        <Form.Item label="Total" name="total">
          <InputNumber disabled style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add Asset
          </Button>
        </Form.Item>
      </Form>
    </Form>
  );
};

export default AddAssetForm;
