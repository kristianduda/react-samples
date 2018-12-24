import React from 'react';
import { withTodos } from '../contexts/TodosContext';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="new-todo">
          What needs to be done?
        </label>
        <input
          id="new-todo"
          onChange={this.handleChange}
          value={this.state.text}
        />
        <button>
          Add #{this.props.items.length + 1}
        </button>
      </form>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    
    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }
}

export default withTodos(TodoForm);