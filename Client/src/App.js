import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [serverRes,setServerRes]=useState(0)
  const [result, setResult] = useState(0);

  const handleNum1Change = (event) => {
    setNum1(+event.target.value);
  };

  const handleNum2Change = (event) => {
    setNum2(+event.target.value);
  };

  const handleAddition = () => {
    setResult(num1+num2);
    //requets to server
    axios.post("http://localhost:5000",{num1:num1,num2:num2}).then((res)=>{   
    setServerRes(res.data.addition)
  })

  }


  return (
    <div className="App">
      <header className="App-header">



        <nav className="navbar navbar-expand-lg bg-primary ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Tanoj</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className=" container col-md-6 mt-4 mb-4">
        <div className="h-100 p-5 bg-light border rounded-3">
          <h2>Tanoj</h2>
          <p>My self Tanoj kumar Innamuri and i am master’s student at UAlbany with master’s degree in Computer Science. I don’t have ang job experience but I did my internship in ABCD company..</p>

        </div>
      </div>

      <div className="container col-md-6">
        <input  value={num1} onChange={handleNum1Change} />
        <input  value={num2} onChange={handleNum2Change} />
      </div>
      <div className="container col-md-6 mt-4 mb-4 ">
        <button className="btn btn-primary ml-2" onClick={handleAddition}>Submit</button>
        <p className="mt-4">Result (Frontend): {result}
        
        </p>
        <p className="mt-4">Result (Server): {serverRes}
        
        </p>
      </div>
    </div>
  );
}

export default App;
