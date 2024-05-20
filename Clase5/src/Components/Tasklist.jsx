import CardStyles from '../Styles/Card.module.css'

const TaskList = ({ tasks }) => {
    return (
      <div className={CardStyles.cardContainer}>
        <h3>Tareas a cumplir:</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TaskList;