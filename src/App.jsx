import './App.css'
import jsonData from './score.json'

function App() {


  return (
    <>
    <div className="container">
    <img src="https://images.unsplash.com/photo-1553095066-5014bc7b7f2d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D" alt="" />
    <div className="mainDiv">
    {jsonData.map(item => (
          <div key={item.clubs}>
            
            {item.clubs.name}
          </div>
        ))}
    </div>
    </div> 
    </>
  )
}

export default App
