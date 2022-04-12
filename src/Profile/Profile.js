import {Card, Col, Row, Container} from "react-bootstrap";
import{useState, useEffect} from "react"
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";


function Profile() {

  const [images, setImages] = useState([]);
  const urlParams = useParams();


useEffect(() => {
  axios
    .get(
      `https://api.thecatapi.com/v1/images/search?breed_ids=`+ urlParams.id.split('-')[0] + `&limit=12`
    )
    .then((response) => {
      //handle success
      console.log(response);
      setImages(response.data)
    })
    .catch((error) => {
      //handle error
      console.log(error);
    });
}, []);

  return (
      <div className="wrapper">
      <Col>
      <Row>
      <h1>{urlParams.id.split('-')[1]}</h1>
      </Row>
      <br/>
      <Row>
          <Card.Text>
            <strong>Description:</strong><br/>
            {images?.[0]?.breeds[0]?.description}
          </Card.Text>
      </Row>
      <br/>
      <Row>
      <Card.Text>
          <strong>Photo:</strong> <br/>
      </Card.Text>
          {images.map((image) => {
            return (
              <Col sm={4}>
            <Card key={image.id} style={{ width: "100%", marginBottom: "20px"}}>
              <Card.Img variant="top" src={image.url} />
            </Card>
          </Col>
            );
          })}
          
        </Row>
      </Col>
      </div>
  );
}



  export default Profile;