
import './App.css';
import TodoListPage from './pages/todo-list-page';
import 'bootstrap/dist/css/bootstrap.css';
import Sidebar from './components/sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <TodoListPage />
    </div>
  );
}

export default App;
