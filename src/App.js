import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Navbar, Container} from "react-bootstrap";

import Feed from "./Feed/Feed.js";
import Profile from "./Profile/Profile.js";

function App() {
  return (
    <Router>
      <div>
      <Navbar expand="lg" variant="light" bg="dark">
        <Navbar.Brand><Link style={{color: "white" }} link to ="/" className="catstagram">Catstagram</Link></Navbar.Brand>
      </Navbar>

      <Routes>
          <Route exact path="/" element={<Feed/>}/>
          <Route path="/profile/:id" element={<Profile/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
