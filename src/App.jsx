// import logo from './logo.svg';
import './App.css';

function App() {
  let os_list = ["Android", "Black bery", "Iphone", "Windows Phone"];
  let manufactures = ["Samsung", "HTC", "Micromax", "Apple"];

  return (
    <div className="App">
      <h1>Mobile operating system</h1>
      
      <ul>
      {os_list.map( e => <li> {e}</li> )}  

        {/* <li>Android</li>
        <li>Black bery</li>
        <li>IPhone</li>
        <li>Windows Phone</li> */}
      </ul>

      <h1>Mobile Manufactures</h1>
      <ul>
      {manufactures.map( e => <li> {e}</li> )} 
      </ul>
      
    </div>
  );
}

export default App;
