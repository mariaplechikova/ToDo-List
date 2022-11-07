
import TodoList from '../components/todo-list';

function TodoListPage() {
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
    },
    {
        'name': "shgfh",
        "date": "12.00.11",
        "description": "Описание обеда",
        "tegs":  ["домашние дела"],
        "prioriry": "средний",
    }
];

  return (
    <TodoList list={list}/>
  );
}

export default TodoListPage;
