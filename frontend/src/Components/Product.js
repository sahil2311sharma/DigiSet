import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top'/>
        </a>
        <Card.Body>
            <Card.Title as='div'>
                <strong>
                    {product.name}
                </strong>
            </Card.Title>
            <Card.Text as = 'div'>
                <div className='my-3'>
                    {product.rating} from {product.numReviews}
                </div>
            </Card.Text>
            <Card.Text as='div'>
            <Rating
                rating={product.rating}
                text={`${product.numReviews} reviews`}
            />
            </Card.Text>
            <Card.Text as = 'h3'>
                ₹{product.price}
            </Card.Text>
        </Card.Body>

    </Card>
  )
}

export default Product