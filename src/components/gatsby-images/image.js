import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export const Image = ({ src }) => {
  const data = useStaticQuery(graphql`
    query {
      shoe1: file(relativePath: { eq: "shoe1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoe2: file(relativePath: { eq: "shoe2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoe3: file(relativePath: { eq: "shoe3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      shoe4: file(relativePath: { eq: "shoe4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      {src === 1 ? (
        <Img fluid={data.shoe1.childImageSharp.fluid} />
      ) : src === 2 ? (
        <Img fluid={data.shoe2.childImageSharp.fluid} />
      ) : src === 3 ? (
        <Img fluid={data.shoe3.childImageSharp.fluid} />
      ) : (
        <Img fluid={data.shoe4.childImageSharp.fluid} />
      )}
    </>
  )
}
