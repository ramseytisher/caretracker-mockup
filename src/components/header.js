import { Link } from "gatsby"
import React from "react"

import {
  Affix,
  Row,
  Col,
  Button,
  Popconfirm,
  Typography,
  message,
  Icon,
} from "antd"
import { HighlightTwoTone } from "@ant-design/icons"


const { Title, Text } = Typography

const Header = () => (
  <Affix>
    <header
      style={{
        background: `#fff`,
        margin: `0 auto`,
        paddingLeft: `1.0875rem`,
        paddingRight: `1.0875rem`
      }}
    >
      <Row type="flex" align="middle" justify="space-between">
        <Col>
          <Title style={{ padding: 30 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
            color: "#5C6770",
          }}
        >
          <HighlightTwoTone /> CareTracker Mockup
        </Link>
      </Title>
        </Col>
        {/* <Col>
          <Link to="/care-plan">
            <Button size="large" type="primary">
              Care Plan
            </Button>
          </Link>
        </Col> */}
      </Row>
    </header>
  </Affix>
)

export default Header
