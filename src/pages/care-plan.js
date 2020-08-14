import React, { useState } from "react"
import Layout from "../components/layout"
import { navigate } from "gatsby"

import { Row, Col, Menu, Table, Drawer, List, Card, PageHeader } from "antd"
import { UserOutlined } from "@ant-design/icons"

import Option1 from "../components/options/option-1"
import Option2 from "../components/options/option-2"

const columns = [
  {
    title: "Health Concern",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
]

export default () => {
  const [showOption, setShowOption] = useState("option-1")
  const [patient, setPatient] = useState(0)

  return (
    <Layout>
      <PageHeader
        title="This would be resident demographic bar"
        style={{ backgroundColor: "#00A8E1" }}
        onBack={() => navigate("/")}
      />
      <Card>
        <Menu
          onClick={e => setShowOption(e.key)}
          selectedKeys={[showOption]}
          mode="horizontal"
        >
          <Menu.Item key="option-1">Option 1</Menu.Item>
          <Menu.Item key="option-2">Option 2</Menu.Item>
        </Menu>
        {showOption === "option-1" && <Option1 />}
        {showOption === "option-2" && <Option2 />}
      </Card>
    </Layout>
  )
}
