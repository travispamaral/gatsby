import React from 'react'
import Link from 'gatsby-link'
import '../../assets/scss/pages/home.scss'

import SocialIcons from '../components/SocialIcons/index'
import LeftSlice from '../components/Slice/LeftSlice'
import RightSlice from '../components/Slice/RightSlice'
import Header from '../components/Header/Header'
class Index extends React.Component {

  render() {
    console.log(pageQuery)
    return (
      <div className="home-page">
        <Header />
        <div className="content">
          <h1>I build product UI and marketing pages as a Software Engineer building UI at <a href="https://konghq.com" target="_blank">Kong</a>.</h1>
          <div className="whois">
            <Link to="/about">Who am I</Link>
            <Link to="/work">What have I done</Link>
            <Link to="/contact">How to reach me</Link>
          </div>
        </div>
        <LeftSlice />
        <RightSlice />
      </div>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
