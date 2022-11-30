
import './App.css';
import TodoListPage from './pages/todo-list-page';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/sidebar';
import TodoListForm from './components/todo-list-form';
import './data/todo-list';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <TodoListPage />
      <TodoListForm />
    </div>
  );
}

export default App;
