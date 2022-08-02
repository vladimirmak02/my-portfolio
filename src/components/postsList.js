import * as React from 'react'
import PropTypes from 'prop-types'
import '../styles/posts.scss'
import PostPreview from './postPreview'

export default function PostsList({ posts }) {
    return (
        <div className="postslist">
            {posts.map((post) => (
                <PostPreview post={post} key={post.slug} />
            ))}
        </div>
    )
}

PostPreview.defaultProps = {
    style: {},
    posts: [],
}

PostPreview.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            slug: PropTypes.string.isRequired,
            frontmatter: PropTypes.shape({
                title: PropTypes.string,
                image: PropTypes.object,
                url: PropTypes.string,
            }).isRequired,
            excerpt: PropTypes.string.isRequired,
        })
    ).isRequired,
    style: PropTypes.object,
}
