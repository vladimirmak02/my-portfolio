import * as React from 'react'
import PropTypes from 'prop-types'
import '../styles/posts.scss'
import { Link } from 'gatsby'
import DynamicImage from '../components/dynamicimage'

export default function PostPreview({ post, style }) {
    return (
        <div className="post" key={post.slug} style={style}>
            <Link to={'/' + post.slug} aria-hidden>
                <DynamicImage image={post.frontmatter.image} />
            </Link>
            <div>
                <h3>
                    <Link to={'/' + post.slug}>{post.frontmatter.title} </Link>
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
    )
}

PostPreview.defaultProps = {
    style: {},
}

PostPreview.propTypes = {
    post: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
            title: PropTypes.string,
            image: PropTypes.object,
            url: PropTypes.string,
        }).isRequired,
        excerpt: PropTypes.string.isRequired,
    }).isRequired,
    style: PropTypes.object,
}
