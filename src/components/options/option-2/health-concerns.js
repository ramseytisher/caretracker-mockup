import React from "react"

import Goal from "./goal"

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
const { Title } = Typography
const { Panel } = Collapse

export default ({ concerns, goals }) => {
  function getGoalName(id) {
    const goal = goals.find(g => g.id === id)
    return goal.description
  }

  if (concerns) {
    return (
      <>
        <Collapse>
          {concerns.map(concern => (
            <Panel
              header={`${concern.name}`}
              extra={<Tag>{concern.status}</Tag>}
            >
              <Card>
                <Descriptions>
                  <Descriptions.Item label="Status">
                    {concern.status}
                  </Descriptions.Item>
                  <Descriptions.Item label="Onset Date">
                    {concern.onsetDate}
                  </Descriptions.Item>
                </Descriptions>
                <Divider orientation="left">Associated Goals</Divider>
                <Collapse>
                  {concern.associatedGoals.map(goal => (
                    <Panel
                      header={getGoalName(goal)}
                      extra={
                        <>
                          <Tag>Progressing</Tag>
                          <Tag>Medical</Tag>
                        </>
                      }
                    >
                      <Goal goal={goals.find(g => g.id === goal)} />
                    </Panel>
                  ))}
                </Collapse>
                <Divider orientation="left">Comments</Divider>
                <Timeline>
                  {concern.comments.map(comment => (
                    <Timeline.Item>
                      {`${comment.commentUser}, ${comment.commentDateTime}: ${comment.comment}`}
                    </Timeline.Item>
                  ))}
                </Timeline>
              </Card>
            </Panel>
          ))}
        </Collapse>

        {/* <pre>{JSON.stringify(concerns, null, 2)}</pre> */}
      </>
    )
  } else return null
}
