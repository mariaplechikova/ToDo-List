
import { useState } from 'react';
import TodoList from '../components/todo-list';


function TodoListPage() {
    const [list, setList] = useState([{
            'name': "Посетить урок",
            "date": "11.00.11",
            "description": "Описание",
            "tegs":  ["учеба"],
            "prioriry": "высокий",
            "status": "Ожидание",
        },
        {
            'name': "Приготовить обед",
            "date": "12.00.11",
            "description": "Описание обеда",
            "tegs":  ["домашние дела"],
            "prioriry": "средний",
            "status": "Ожидание",
        },
        {
            'name': "Заказать корм для кота",
            "date": "11.00.11",
            "description": "Найти и заказать корм холистик по акции на маркетплейсе",
            "tegs":  ["домашние дела"],
            "prioriry": "высокий",
            "status": "Ожидание",
        },
        {
            'name': "Квест",
            "date": "19.00.11",
            "description": "Узнать у мужа и ребенка какой квест им больше нравится, выбрать время, оформить бронь",
            "tegs":  ["развлечения"],
            "prioriry": "средний",
            "status": "Ожидание",
        }
    ]);

    function removeItem(index) {

        const newList = list.filter(function(item, i) {
            return i!=index;
        });  
        setList(newList);   
    }

    function closeTask(index) {
        list[index].status = "Завершено";
        // serList([].concat(list));
        setList([...list]);
    }

  return (
    <TodoList 
    list={list}
    removeItem={removeItem}
    closeTask={closeTask}
    />
  );
}

export default TodoListPage;
