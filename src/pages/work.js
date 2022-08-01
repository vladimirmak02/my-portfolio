import * as React from 'react'
import { graphql, Link } from 'gatsby'
import '../styles/reset.scss'
import '../styles/global.scss'
import '../styles/posts.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

function WorkPage({ data }) {
    const posts = data.allMdx.edges.map((n) => n.node)
    return (
        <main>
            <h1>Work</h1>
            <div className="postslist">
                {posts.map((post) => (
                    <div className="post" key={post.slug}>
                        <Link to={'/' + post.slug}>
                            {post.frontmatter.image ? (
                                post.frontmatter.image.childImageSharp ? (
                                    <GatsbyImage
                                        image={getImage(post.frontmatter.image)}
                                        alt="Post Logo"
                                    />
                                ) : (
                                    <img
                                        src={post.frontmatter.image.publicURL}
                                        alt="Post Logo"></img>
                                )
                            ) : (
                                ''
                            )}
                        </Link>
                        <div>
                            <h3>
                                <Link to={'/' + post.slug}>
                                    {post.frontmatter.title}{' '}
                                </Link>
                                {post.frontmatter.url ? (
                                    <a
                                        className="externalLink"
                                        href={post.frontmatter.url}
                                        target="_blank"
                                        rel="noreferrer">
                                        {post.frontmatter.url}
                                    </a>
                                ) : (
                                    ''
                                )}
                            </h3>
                            <p>{post.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Link to="/">Back home</Link>
        </main>
    )
}

export const query = graphql`
    query {
        allMdx {
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
