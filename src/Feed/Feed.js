import {Card, Col} from "react-bootstrap";
import {
  Link,
} from "react-router-dom";
import{useState, useEffect} from "react"
import axios from "axios";


function FeedCard(props) {

  return (
      <Col sm={4}>
      <Card style={{ width: "90%", marginBottom: "20px"}}>
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title><Link to={"/profile/" + props.breedId + "-" + props.breed} 
          className="name">{props.breed}</Link></Card.Title>
        </Card.Body>
      </Card>
    </Col>   
    
  );
}

function Feed() {

const [breeds, setBreeds] = useState([]);

useEffect(() => {
  axios
    .get(
      `https://api.thecatapi.com/v1/breeds`
    )
    .then((response) => {
      //handle success
      console.log(response,"feedComponent");
      setBreeds(
        response.data.filter((data) => {
          return data.image
        })
      );
    })
    .catch((error) => {
      //handle error
      console.log(error);
    });
}, []);

  return (
    <div>
      <h2>Feed</h2>
      <div className="wrapper">
        {breeds.map((breed) => {
          return (
          
              <FeedCard key={breed.id} breed={breed.name} image={breed.image.url}
                description={breed.description} breedId={breed.id}/>
          )
        })}

      </div>
    </div>
  );
}
  

  export default Feed;

  //Solution 2

  // import {Card, Col, Row} from "react-bootstrap";
  // import {
  //   Link,
  // } from "react-router-dom";
  // import{useState, useEffect} from "react"
  // import axios from "axios";
  
  // function FeedCard(props) {
  
  //   return (
  //     <Col sm={4}>
  //       <Card>
  //         <Card.Img variant="top" src={props.image} />
  //         <Card.Body>
  //           <Card.Title>{props.breed}</Card.Title>
  //           <Card.Text>
  //             {props.description}
  //           </Card.Text>
  //           <Link to={"/profile/" + props.breed}>Profile</Link>
  //         </Card.Body>
  //       </Card>
  //     </Col>
  //   );
  // }
  
  // function Feed() {
  
  // const [breeds, setBreeds] = useState([]);
  
  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.thecatapi.com/v1/breeds`
  //     )
  //     .then((response) => {
  //       //handle success
  //       console.log(response);
  //       setBreeds(
  //         response.data.filter((data) => {
  //           return data.image
  //         })
  //       );
  //     })
  //     .catch((error) => {
  //       //handle error
  //       console.log(error);
  //     });
  // }, []);
  
  //   return (
  //     <div>
  //       <h2>Feed</h2>
  //       <div>
  //         <Row>
  //         {breeds.map((breed) => {
  //           return (   
  //               <FeedCard key={breed.id} breed={breed.name} image={breed.image.url}
  //                 description={breed.description}/>
  //                 )
  //             })}
  //       </Row>
  //       </div>
  //     </div>
  //   );
  // }
    
  
  //   export default Feed;  