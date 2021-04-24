import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/navbarComponent';
//styles
function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
      <Navbar />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
