import Table from 'react-bootstrap/Table';
import TodoListItem from './todo-list-item';

function TodoList() {

    const list = [{
        'name': "Посетить урок",
        "date": "11.00.11",
        "description": "Описание",
        "tegs":  ["учеба"],
        "prioriry": "высокий",
    },
    {
        'name': "Приготовить обед",
        "date": "12.00.11",
        "description": "Описание обеда",
        "tegs":  ["домашние дела"],
        "prioriry": "средний",
    }];

  return (
    <div className="">
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Дата и время</th>
          <th>Описание</th>
          <th>Теги</th>
          <th>Приоритет</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index)=> (
          <TodoListItem 
          item={item} 
          index={index + 1}
          key={index}
        />
        ))}
          {/* <TodoListItem 
            item={list[0]} 
            index={1}
          />
          <TodoListItem 
            item={list[1]} 
            index={2}
          /> */}
      </tbody>
    </Table>
    </div>
  );
}

export default TodoList;
