import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    // deleteProject(id){
    //   this.props.onDelete(id)
    // }
    render() {
        return (
            <li className="Todo">
                <strong>{this.props.todo.title}</strong>
            </li>
        );
    }
}

TodoItem.propTypes = {
  todo: PropTypes.object
}

export default TodoItem;
