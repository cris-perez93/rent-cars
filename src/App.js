
import FormCoche from "./components/FormCoche";




//redux
import {Provider} from 'react-redux';
import store from "./store";

function App() {
  return (
   
      <Provider store ={store}>
        <FormCoche
          
        />
      
      </Provider>
 
  );
}

export default App;
