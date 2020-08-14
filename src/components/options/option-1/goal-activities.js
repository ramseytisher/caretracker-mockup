import React from "react"

import {
  Typography,
  Button,
  Descriptions,
  Divider,
  Card,
  Timeline,
  Collapse,
  Tag,
} from "antd"

import Goal from "./goal"

const { Title } = Typography
const { Panel } = Collapse

export default ({ goals }) => {
  const longGoals = goals.filter(goal => goal.longTerm)
  const otherGoals = goals.filter(goal => goal.other)

  return (
    <>
      <Divider orientation="left">Long-Term Goals</Divider>
      <Collapse>
        {longGoals.map(goal => (
          <Panel
            header={goal.description}
            extra={
              <>
                <Tag
                  color={goal.progression === "Regressing" ? "red" : "green"}
                >
                  {goal.progression}
                </Tag>
                <Tag>{goal.discipline}</Tag>
              </>
            }
          >
            <Goal goal={goal} />
            <Divider orientation="left">Short-Term Goals</Divider>

            <Collapse>
              {goal.supportGoals.map(s => {
                const supports = goals.filter(g => g.id === s)
                return supports.map(support => (
                  <Panel
                    header={support.description}
                    extra={
                      <>
                        <Tag
                          color={
                            support.progression === "Regressing"
                              ? "red"
                              : "green"
                          }
                        >
                          {support.progression}
                        </Tag>
                        <Tag>{support.discipline}</Tag>
                      </>
                    }
                  >
                    <Goal goal={support} />
                  </Panel>
                ))
              })}
            </Collapse>
          </Panel>
        ))}
      </Collapse>
      <Divider orientation="left">Other Goals</Divider>
      <Collapse>
        {otherGoals.map(other => (
          <Panel
            header={other.description}
            extra={
              <>
                <Tag
                  color={other.progression === "Regressing" ? "red" : "green"}
                >
                  {other.progression}
                </Tag>
                <Tag>{other.discipline}</Tag>
              </>
            }
          >
            <Goal goal={other} />
          </Panel>
        ))}
      </Collapse>
    </>
  )
}
