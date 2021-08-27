import './App.css';
import {Alert, Button, IconButton} from 'rsuite'
import {useState} from "react";
import 'rsuite/dist/styles/rsuite-default.css';
import MenuBar from "./components/NavBar/Navbar.js";
import Footer from "./components/Footer/footer"
import Container from "react-bootstrap/Container"

function App() {

  const[click, setClick] = useState(false)

  function buttonOnclick(){
    setClick(!click)
    if(click == false){
      Alert.info('true')
    }else{
      Alert.error('false')
    }
  }
  return (
    <div className="App">

      <MenuBar className={"App-header"}></MenuBar>
      <Container className={"App-content"} fluid>
      </Container>
     <div>

     </div>
       <Footer className={"App-footer"}></Footer>

    </div>
  );
}

export default App;
