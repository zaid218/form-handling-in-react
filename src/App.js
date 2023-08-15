import BasicForm from './components/BasicForm';
import SimpleInput from './components/SimpleInput';
import {Fragment} from 'react'
function App() {
  return (
    <Fragment>
      <div className="app">
        <SimpleInput />
      </div>
      <div className="app">
        <BasicForm />
      </div>
    </Fragment>
    
  );
}

export default App;
