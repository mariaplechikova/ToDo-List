import Table from 'react-bootstrap/Table';

function TodoList() {

    const list = [{
        'name': "Посетить урок",
        "date": "11.00.11",
        "description": "Описание",
        "tegs":  ["учеба"],
        "prioriry": "высокий",
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
        <tr>
          <td>1</td>
          <td>{list[0].name}</td>
          <td>{list[0].date}</td>
          <td>{list[0].description}</td>
          <td>{list[0].tegs}</td>
          <td>{list[0].prioriry}</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}

export default TodoList;
