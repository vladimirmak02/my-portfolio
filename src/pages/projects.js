import * as React from 'react'
import { graphql, Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/global.scss'
import { Helmet } from 'react-helmet'
import PostsList from '../components/postsList'

function ProjectsPage({ data }) {
    const posts = data.allMdx.edges.map((n) => n.node)
    return (
        <main className="frontPageMain">
            <h1>Projects</h1>
            <Helmet>
                <title>Vlad's Projects</title>
            </Helmet>
            <PostsList posts={posts} />
            <Link to="/">Back home</Link>
        </main>
    )
}

//TODO: add filter to query
export const query = graphql`
    query {
        allMdx(filter: { slug: { regex: "/^projects/" } }) {
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

export default ProjectsPage
