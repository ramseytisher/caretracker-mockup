import React, { useState } from "react"

import { Layout, Menu, PageHeader, Button, Card, Space } from "antd"
import { UserOutlined } from "@ant-design/icons"

import CarePlan from "../care-plan"
import ResidentCharting from "../resident-charting"

const { Content, Footer, Sider, Header } = Layout

const PowerChartLayout = ({ resident, back }) => {
  const [view, setView] = useState("1")

  return (
    <Layout>
      <Header style={{ background: "#00A8E1" }}>
        <Space>
          <Button onClick={back}>Back</Button>
          <UserOutlined style={{ fontSize: 30 }} />
          <h2>{JSON.stringify(resident, null, 2)}</h2>
        </Space>
      </Header>
      <Layout>
        <Sider>
          <Menu theme="dark" onSelect={({ key }) => setView(key)}>
            <Menu.Item key={1}>Resident Charting</Menu.Item>
            <Menu.Item key={2}>Care Plan Summary</Menu.Item>
            <Menu.Item key={3}>Other PowerChart Bands</Menu.Item>
          </Menu>
        </Sider>
        <Content>
          {view === "1" && <ResidentCharting />}
          {view === "2" && <CarePlan />}
          {view === "3" && <div>TBD</div>}
        </Content>
      </Layout>
    </Layout>
  )
}

export default PowerChartLayout
