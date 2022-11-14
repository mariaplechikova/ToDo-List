/* eslint-disable react/prop-types */
import { createRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';


const TodoListForm = function() {

    const nameRef = createRef(); /* Таким образом мы показываем фреймворку, что это ссылка и к какому элементу она привязана*/
    const [description, setDescription ] = useState();
    const dateRef = createRef();
    const [tags, setTags] = useState({
        Работа: false,
        Учеба: false,
        "Домашние дела": true,
    });
    
    function handaleSubmit(event) {
        event.preventDefault();

        const tagsArr = [];

        for (let tagKey of Object.keys(tags)) {
            const tagValue = tags[tagKey];
            if (tagValue) {
                tagsArr.push(tagKey);
            }
        }

        const formData = {
            name: nameRef.current.value,
            description: description,
            date: dateRef.current.value,
            tags:tagsArr
        };

        console.log(formData);
    }

    function updateTags(key) {
        tags[key] = !tags[key];
        setTags({...tags}) ;

        // setTags({
            // ...tags,
            // [fild]: != tags[field]
        // })
    }

    return (
        <Form onSubmit={handaleSubmit}>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Имя</Form.Label>
        <Form.Control type="text" placeholder="Введите имя" ref={nameRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDescription">
        <Form.Label>Описание</Form.Label>
        <Form.Control 
            type="textarea" 
            placeholder="Введите описание" 
            name="description" 
            value={description}
            onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDate">
        <Form.Label>Дата</Form.Label>
        <Form.Control type="text" placeholder="Введите дату" ref={dateRef} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formTags">
        <Form.Label>Теги</Form.Label>
        <div>
            <Form.Check inline label="Работа" name="work" type="checkbox" 
                checked={tags.Работа}
                onChange={() => updateTags("Работа")}
            /> 

            <Form.Check inline label="Учеба" name="study" type="checkbox"
                checked={tags.Учеба}
                onChange={() => updateTags("Учеба")}
            /> 

            <Form.Check inline label="Домашние дела" name="homework" type="checkbox"
                checked={tags["Домашние дела"]}
                onChange={() => updateTags("Домашние дела")}
            /> 
        </div>

      </Form.Group>

      <Button variant="primary" type="submit">
        Применить
      </Button>

    </Form>
      );
};

export default TodoListForm;
