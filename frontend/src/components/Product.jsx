/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Rating from "./Rating";

const Product = ({ product }) => {
  const { _id, image, name, price,rating, numReviews } = product;

  return (
    <Card className="my-3 py3 rounded">
      <Link to={`/product/${_id}`}>
        <Card.Img src={image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${_id}`}>
          <Card.Title as="div" className="product-title text-center">
            <strong>{name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div" className="text-center" >
          <Rating value={rating} text={`${numReviews} reviews`}/>
        </Card.Text>
        <Card.Text as="h3" className="text-center">${price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
