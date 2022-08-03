import * as React from 'react'
import { graphql, Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/global.scss'
import PostsList from '../components/postsList'
import { Helmet } from 'react-helmet'

function WorkPage({ data }) {
    const posts = data.allMdx.edges.map((n) => n.node)
    return (
        <main className="frontPageMain">
            <h1>Work</h1>
            <Helmet>
                <title>Vlad's Work</title>
            </Helmet>
            <PostsList posts={posts} />
            <Link to="/">Back home</Link>
        </main>
    )
}

export const query = graphql`
    query {
        allMdx(filter: { slug: { regex: "/^work/" } }) {
            edges {
                node {
                    frontmatter {
                        title
                        url
                        image {
                            publicURL
                            childImageSharp {
                                gatsbyImageData(width: 200)
                            }
                        }
                    }
                    excerpt
                    slug
                }
            }
        }
    }
`

export default WorkPage
