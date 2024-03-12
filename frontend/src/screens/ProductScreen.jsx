import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import { FaArrowLeft, FaShoppingBasket } from "react-icons/fa";
import Rating from "../components/Rating";
import products from "../products";
const ProductScreen = () => {
  const { id: productId } = useParams();
  const product = products.find((p) => p._id === productId);
  console.log(product);
  return (
    <>
      <Link className="btn btn-dark my-3" to={"/"}>
        {" "}
        <FaArrowLeft className="text-success" /> <strong>Go Back</strong>{" "}
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3> {product.name} </h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={product.numReviews} />
            </ListGroupItem>
            <ListGroupItem>
              <Card>
                <h3>Detaylar:</h3>
                <Col>
                  <strong>{product.name}</strong>
                </Col>
                <br />
                <Col className="my-3"> {product.description} </Col>
              </Card>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <Row>
                  <Col>
                    <strong>Price:</strong>{" "}
                  </Col>
                  <Col>
                    {" "}
                    <strong> {product.price} </strong>{" "}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>
                    {" "}
                    <strong>Stock: </strong>{" "}
                  </Col>
                  <Col>
                    {" "}
                    <strong>
                      {" "}
                      {product.countInStock > 0
                        ? `Stokta Var: ${product.countInStock}`
                        : "Stokta Yok"}{" "}
                    </strong>{" "}
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  <FaShoppingBasket /> Add To Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default ProductScreen;
