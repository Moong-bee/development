import React, { Component } from 'react'

import TodoListItemTemplate from './to_do_list_item_template';

export class to_do_list_item extends Component {
    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoListItemTemplate
                    id={id}
                    text={text}
                    checked={checked}
                    onToggle={onToggle}
                    onRemove={onRemove}
                    key={id}
                />
            )
        );
        
        return (
            <div>
                {todoList}    
            </div>
        );
    }
}

export default to_do_list_item
