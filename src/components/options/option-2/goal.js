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
const { Title } = Typography
const { Panel } = Collapse

export default ({ goal }) => (
  <Card>
    <Descriptions>
      <Descriptions.Item label="Status">{goal.status}</Descriptions.Item>
      <Descriptions.Item label="Target Date">
        {goal.targetDate}
      </Descriptions.Item>
      <Descriptions.Item label="Owner">{goal.owner}</Descriptions.Item>
      <Descriptions.Item label="Progression">
        {goal.progression}
      </Descriptions.Item>
      <Descriptions.Item label="Disciple">{goal.discipline}</Descriptions.Item>
      <Descriptions.Item label="Progression Updated">
        {goal.progressionUpdated}
      </Descriptions.Item>
    </Descriptions>
    <Divider orientation="left">Related Activities</Divider>
    <Collapse>
      {goal.activities.map(activity => (
        <Panel header={`${activity.description}: (${activity.schedule})`}>
          <Card>
            <Descriptions>
              <Descriptions.Item label="Owner">
                {activity.owner}
              </Descriptions.Item>
              <Descriptions.Item label="Disciple">
                {activity.discipline}
              </Descriptions.Item>
            </Descriptions>
          </Card>
        </Panel>
      ))}
    </Collapse>
    <Divider orientation="left">Goal Comments</Divider>
    <Card>
      <Timeline>
        {goal.comments.map(comment => (
          <Timeline.Item>
            {`${comment.commentUser}, ${comment.commentDateTime}: ${comment.comment}`}
          </Timeline.Item>
        ))}
      </Timeline>
    </Card>
  </Card>
)
