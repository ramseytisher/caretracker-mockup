import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Header from "../components/header"
import Image from "../components/image"
import SEO from "../components/seo"

import ResidentList from "../components/resident-list"

import { Typography, Button } from "antd"

const { Title } = Typography

export default () => {
  return (
    <Layout>
      <Header />
      <ResidentList />
    </Layout>
  )
}
