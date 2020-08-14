import React, { useState } from "react"

import { Card, Row, Col, Button, Progress } from "antd"

const adls = [
  {
    id: 0,
    description: "Bed Mobility",
    yellow: true,
    questions: [
      {
        description: "What was self performance?",
        order: 0,
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      },
      {
        description: "What was level of assistance",
        order: 1,
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      },
    ],
  },
  {
    id: 1,
    description: "Toileting",
    yellow: true,
    questions: [
      {
        description: "What was self performance?",
        order: 0,
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      },
      {
        description: "What was level of assistance",
        order: 1,
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      },
    ],
  },
  {
    id: 2,
    description: "Transfer",
    yellow: true,
    questions: [
      {
        description: "What was self performance?",
        order: 0,
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      },
      {
        description: "What was level of assistance",
        order: 1,
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      },
    ],
  },
  {
    id: 3,
    description: "Walk In Hall",
    yellow: false,
    questions: [
      {
        description: "What was self performance?",
        order: 0,
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      },
      {
        description: "What was level of assistance",
        order: 1,
        choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
      },
    ],
  },
]

export default () => {
  const [series, setSeries] = useState(null)
  const [question, setQuestion] = useState(0)

  function handleBack() {
    if (question === 0) {
      return setSeries(null)
    } else {
      return setQuestion(question - 1)
    }
  }

  function handleChoice() {
    if (question !== series.questions.length - 1) {
      console.log("Increasing question", question)
      return setQuestion(question + 1)
    } else {
      console.log("Doing nothing")
      return null
    }
  }

  function handleFinish() {
    console.log("Finish")
    setQuestion(0)
    setSeries(null)
  }

  if (series) {
    return (
      <Card
        title={series.description}
        extra={[
          <Progress type="circle" percent={40} width={30} showInfo={false} />,
        ]}
        size="small"
        actions={[
          <Button onClick={handleBack}>Back</Button>,
          <Button
            onClick={handleFinish}
            type="primary"
            disabled={question !== series.questions.length - 1}
          >
            Finish
          </Button>,
        ]}
      >
        <Card
          title={series.questions[question].description}
          size="small"
          type="inner"
        >
          <Row gutter={[16, 8]}>
            {series.questions[0].choices.map(choice => (
              <Col
                sm={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                xl={{ span: 4 }}
              >
                <Button block onClick={handleChoice}>
                  {choice}
                </Button>
              </Col>
            ))}
          </Row>
        </Card>
      </Card>
    )
  } else {
    return (
      <Row gutter={[16, 8]}>
        {adls.map(adl => (
          <Col
            sm={{ span: 12 }}
            md={{ span: 8 }}
            lg={{ span: 6 }}
            xl={{ span: 4 }}
          >
            <Button
              block
              style={adl.yellow ? { borderLeft: "10px solid yellow" } : null}
              id={adl.id}
              size="large"
              onClick={() => setSeries(adl)}
            >
              {adl.description}
            </Button>
          </Col>
        ))}
      </Row>
    )
  }
}
