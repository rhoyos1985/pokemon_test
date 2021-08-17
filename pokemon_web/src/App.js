
import './App.css';
import 'bulma/css/bulma.css';
import { BrowserRouter as Router } from 'react-router-dom';

import { AppRouter } from './routers/AppRouter';

function App() {
  return (
    <Router>
      <div className='App'>
          <AppRouter />
      </div>
    </Router>
  );
}

export default App;
