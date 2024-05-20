import Card from "./Card"
import TaskList from "./Tasklist"
import { useState } from "react"
import HomeStyles from "../Styles/Home.module.css"


const Home = () => {
  let tareas = ["sacar al perro", "hacer la tarea", "sacar la basura","cocinar"]
  const [nuevalista, setNuevalista] = useState([]);




    console.log('nuevalista:', nuevalista);
  


  return (
    <div className={HomeStyles.homeContainer}>
      <div> 
        {tareas.map((tarea, index) => (
        <Card key={index} item={tarea} nuevalista={nuevalista} setNuevalista={setNuevalista}/>
      ))}
      </div>
      <div>
      <TaskList tasks={nuevalista} />
      </div>
     
     
    </div>
  )
}

export default Home