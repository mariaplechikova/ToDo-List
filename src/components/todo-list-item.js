/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";


const TodoListItem = function(props) {
    return (
        
            <tr>
              <td>{props.index}</td>
              <td>{props.item.name}</td>
              <td>{props.item.date}</td>
              <td>{props.item.description}</td>
              <td>{props.item.tegs}</td>
              <td>{props.item.prioriry}</td>
              <td><Button>Удалить</Button></td>
            </tr>
        
      );
};

export default TodoListItem;
 