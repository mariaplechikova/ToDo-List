/* eslint-disable react/prop-types */



const TodoListItem = function(props) {
    return (
        
            <tr>
              <td>{props.index}</td>
              <td>{props.item.name}</td>
              <td>{props.item.date}</td>
              <td>{props.item.description}</td>
              <td>{props.item.tegs}</td>
              <td>{props.item.prioriry}</td>
            </tr>
        
      );
};

export default TodoListItem;
 