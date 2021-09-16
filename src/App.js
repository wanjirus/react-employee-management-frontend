import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ChatPage from './components/chat/ChatPage'
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import UploadFiles from './components/upload-files.component';
function App() {
  return (
    <div>  
        <Router>
          <HeaderComponent />  
            <div className="container">
              <Switch>
                <Route path ="/" exact component = {ListEmployeeComponent}></Route>
                  <Route path="/employees" component={ListEmployeeComponent}></Route>                 
                  <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
                  <Route path="/view-employee/:id" component={ViewEmployeeComponent}></Route>               
                  <Route path="/chat/:id" component={ChatPage}></Route>  
                  <Route paath="/message/"component={UploadFiles}></Route>             
                    <ListEmployeeComponent />
              </Switch>
            </div>
     


</Router>

    </div>

  );
}

export default App;
 