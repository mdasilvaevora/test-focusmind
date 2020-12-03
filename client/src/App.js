import './App.css';
import { MaterialThemeProvider } from './theme/MaterialThemeProvider';
import UserFormContainer from './pages/form/userFormContainer';

function App() {
  return (
    <div className="App">
      <MaterialThemeProvider>
        <UserFormContainer/>
      </MaterialThemeProvider>
    </div>
  );
}

export default App;
