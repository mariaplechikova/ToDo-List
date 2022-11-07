/* eslint-disable react/prop-types */
import Table from 'react-bootstrap/Table';
import TodoListItem from './todo-list-item';
import './todo-list.css';

function TodoList(props) {

//   const list = [{
//     'name': "Посетить урок",
//     "date": "11.00.11",
//     "description": "Описание",
//     "tegs":  ["учеба"],
//     "prioriry": "высокий",
// },
// {
//     'name': "Приготовить обед",
//     "date": "12.00.11",
//     "description": "Описание обеда",
//     "tegs":  ["домашние дела"],
//     "prioriry": "средний",
// }];

    

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
          <th>Действие</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item, index)=> (
          <TodoListItem 
          item={item} 
          index={index + 1}
          key={index}
        />
        ))}
      </tbody>
    </Table>
    </div>
  );
}

export default TodoList;
