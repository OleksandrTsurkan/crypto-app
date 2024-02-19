import React, { useEffect, useState } from "react";
import { Layout, Select, Space, Button } from "antd";
import { UseCrypto } from "../../context/crypto-context";

const headerStyle = {
  width: "100%",
  textAlign: "center",
  color: "#fff",
  height: 60,
  padding: "1rem",
  display: "flex",
  background: "white",
  justifyContent: "space-between",
  alignItems: "center",
};

const AppHeader = () => {
  const [select, setSelect] = useState(false);
  const { crypto } = UseCrypto();

  useEffect(() => {
    const keypress = (event) => {
      if (event.key === "/") {
        setSelect(true);
      }
    };
    document.addEventListener("keypress", keypress);
  });

  function handleSelect() {
    console.log(`selected ${value}`);
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select
        style={{
          width: 250,
        }}
        open={select}
        onSelect={handleSelect}
        value="press / to open"
        optionLabelProp="label"
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
      <Button type="primary">Add asset</Button>
    </Layout.Header>
  );
};

export default AppHeader;
