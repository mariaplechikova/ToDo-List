/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
import TodoListItem from './todo-list-item';
import './todo-list.css';

function TodoList(props) {

  return (
    <div className="todo-list">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>###</th>
          <th>Название</th>
          <th>Дата и время</th>
          <th>Описание</th>
          <th>Теги</th>
          <th>Приоритет</th>
          <th>Cтатус</th>
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item, index)=> (
          <TodoListItem 
          item={item} 
          index={index + 1}
          key={index}
          removeItem={props.removeItem}
          closeTask={props.closeTask}
        />
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default TodoList;
