
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
        'name': "Заказать корм для кота",
        "date": "11.00.11",
        "description": "Найти и заказать корм холистик по акции на маркетплейсе",
        "tegs":  ["домашние дела"],
        "prioriry": "высокий",
    },
    {
        'name': "Квест",
        "date": "19.00.11",
        "description": "Узнать у мужа и ребенка какой квест им больше нравится, выбрать время, оформить бронь",
        "tegs":  ["развлечения"],
        "prioriry": "средний",
    }
];

  return (
    <TodoList list={list}/>
  );
}

export default TodoListPage;
