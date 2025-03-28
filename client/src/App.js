import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Homescreen from './Screen/Homescreen';

// function App() {
//   return (
//     <div className="App">
//       {/* <NavBar/>
//       <Homescreen/> */}
//     </div>
//   );
// }

// export default App;
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { Room } from './Room';
import { RoomDetail } from './RoomDetail';

import Blog from './Pages/Blog';

const App = () => (
  <Router>
     <Blog />
    <Switch>
      <Route exact path="/" component={Room} />
      <Route path="/room-detail/:id" component={RoomDetail} /> {/* Dynamic route */}
    </Switch>
  </Router>
);

export default App;


