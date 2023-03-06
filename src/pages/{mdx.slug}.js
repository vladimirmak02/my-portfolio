import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import '../styles/mdxstyles.scss'

const shortcodes = { Link } // Provide common components here

export default function PageTemplate({ data: { mdx } }) {
    return (
        <main className="mdxDocument">
            <h1>{mdx.frontmatter.title}</h1>
            <span>{mdx.frontmatter.date.slice(0,4)}</span>
            <Helmet>
                <title>{mdx.frontmatter.title}</title>
            </Helmet>
            <div className="content">
                <MDXProvider components={shortcodes}>
                    <MDXRenderer frontmatter={mdx.frontmatter}>
                        {mdx.body}
                    </MDXRenderer>
                </MDXProvider>
            </div>
            <Link to="../">Go Back</Link>
        </main>
    )
}

export const pageQuery = graphql`
    query BlogPostQuery($id: String) {
        mdx(id: { eq: $id }) {
            id
            body
            frontmatter {
                title
                date
            }
        }
    }
`
