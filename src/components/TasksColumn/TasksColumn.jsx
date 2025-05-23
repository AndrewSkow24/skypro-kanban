import CardsItem from "../CardsItem/CardsItem";

const TasksColumn = ({ status, tasksArray }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{status}</p>
      </div>
      <div className="cards">
        {tasksArray.map((task) => (
          <CardsItem
            theme={task.theme}
            group={task.group}
            title={task.title}
            date={task.date}
          />
        ))}
      </div>
    </div>
  );
};

export default TasksColumn;
