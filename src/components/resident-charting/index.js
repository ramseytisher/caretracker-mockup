import React from "react"

import { Collapse, Typography } from "antd"
import {
  HeartTwoTone,
  PieChartTwoTone,
  BulbTwoTone,
  SettingTwoTone,
} from "@ant-design/icons"
import styled from "styled-components"

import ADLs from "./adls"
import Vitals from "./vitals"

const { Title } = Typography
const { Panel } = Collapse

const YellowPanel = styled(Panel)`
  border-left: 10px solid yellow;
`

export default () => (
  <Collapse>
    <YellowPanel header="ADLs" extra={<HeartTwoTone />}>
      <ADLs />
    </YellowPanel>
    <YellowPanel header="Vitals & Measurements" extra={<PieChartTwoTone />}>
      <Vitals />
    </YellowPanel>
    <Panel header="Mood/Behaviors" extra={<BulbTwoTone />}>
      Haven't got here yet...
    </Panel>
  </Collapse>
)
