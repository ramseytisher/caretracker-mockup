import React, { useState } from "react"

import {
  Typography,
  Button,
  Descriptions,
  Divider,
  Card,
  Timeline,
  Collapse,
  Tag,
  Select,
} from "antd"

import Goal from "./goal"

const { Title, Text } = Typography
const { Panel } = Collapse
const { Option } = Select

export default ({ goals }) => {
  const longGoals = goals.filter(goal => goal.longTerm)
  const otherGoals = goals.filter(goal => goal.other)

  const [filter, setFilter] = useState("all")

  return (
    <>
      <Card>
        {`Filter by discipline:  `}
        <Select
          defaultValue="all"
          style={{ width: 240 }}
          onChange={value => setFilter(value)}
        >
          <Option value="all">Show All</Option>
          <Option value="cna">CNA</Option>
          <Option value="nursing">Nursing</Option>
          <Option value="therapy">Therapy</Option>
        </Select>
      </Card>
      {goals.map(goal => (
        <Card
          title={
            <>
              <Text strong>{`Goal: ${goal.description}`}</Text>
              <br />
              <Text type="secondary">{`Target Date: ${goal.targetDate} | Owner: ${goal.owner}`}</Text>
              {` `}
              <Tag>{goal.progression}</Tag>
              <Tag>{goal.status}</Tag>
            </>
          }
          extra={<Button type="primary">Add Comment</Button>}
        >
          <Collapse>
            {goal.activities.map(activity => (
              <Panel
                header={`${activity.description} (${activity.schedule})`}
                extra={
                  <>
                    <Tag>{`Owner: ${activity.owner}`}</Tag>
                    <Tag>{`Discipline: ${activity.discipline}`}</Tag>
                  </>
                }
              >
                more details
              </Panel>
            ))}
            <Panel header={`Health Concerns (2)`}></Panel>
            <Panel header={`Comments (${goal.comments.length})`}>
              <Card>
                <Timeline>
                  {goal.comments.map(comment => (
                    <Timeline.Item>
                      {`${comment.commentUser}, ${comment.commentDateTime}: ${comment.comment}`}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Panel>
          </Collapse>
        </Card>
      ))}

      {/* <Divider orientation="left">Long-Term Goals</Divider>
      <Collapse>
        {longGoals.map(goal => (
          <Panel
            header={goal.description}
            extra={
              
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
      </Collapse> */}
    </>
  )
}
