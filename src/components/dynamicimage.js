import * as React from 'react'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function DynamicImage({ image, style, alt }) {
    return image ? (
        image.childImageSharp ? (
            <GatsbyImage image={getImage(image)} alt={alt} style={style} />
        ) : (
            <img src={image.publicURL} alt={alt} style={style} />
        )
    ) : (
        ''
    )
}

DynamicImage.defaultProps = {
    style: {},
    alt: '',
}

DynamicImage.propTypes = {
    image: PropTypes.shape({
        publicURL: PropTypes.string,
        childImageSharp: PropTypes.object,
    }).isRequired,
    style: PropTypes.object,
    alt: PropTypes.string,
}
