import React, { useState } from "react"

import { Card, Row, Col, Button, Input } from "antd"

const vitals = [
  {
    description: "Temperature Oral",
    units: "degC",
    yellow: false,
  },
  {
    description: "Heart Rate",
    units: "BPM",
    yellow: true,
  },
  {
    description: "Respiratory Rate",
    units: "br/min",
    yellow: false,
  },
  {
    description: "SpO2",
    units: "%",
    yellow: true,
  },
  {
    description: "Height/Length Measured",
    units: "cm",
    yellow: false,
  },
  {
    description: "Weight Measured",
    units: "kg",
    yellow: false,
  },
]

export default () => {
  return (
    <Card
      size="small"
      actions={[<Button>Back</Button>, <Button type="primary">Finish</Button>]}
    >
      <Row gutter={[16, 8]}>
        {vitals.map(vital => (
          <Col
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 6 }}
          >
            <Input
              suffix={vital.units}
              addonBefore={vital.description}
              style={vital.yellow ? { borderLeft: "10px solid yellow" } : null}
            />
          </Col>
        ))}
      </Row>
    </Card>
  )
}
