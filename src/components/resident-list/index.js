import React, { useState } from "react"

import { Table, Button, Card } from "antd"
import PowerchartLayout from "../powerchart-layout"

import { residents } from "../../data/residents"

const columns = [
  {
    title: "Resident Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Work List",
    key: "workList",
    render: () => <div>PowerChart Worklist Framework Capabilities</div>,
  },
]

export default () => {
  const [resident, setResident] = useState(null)

  if (resident) {
    return (
      <PowerchartLayout back={() => setResident(null)} resident={resident} />
    )
  } else {
    return (
      <Card title="PowerChart Worklist Component" style={{ margin: "10px" }}>
        <Table
          columns={columns}
          dataSource={residents}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {
                console.log("Record: ", setResident(record))
              },
            }
          }}
        />
      </Card>
    )
  }
}
