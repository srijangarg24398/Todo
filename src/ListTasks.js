import React from 'react'
import escapeRegExp from 'escape-string-regexp'

class ListTasks extends React.Component {

    state = {
        query: ''
    };

    searchTask = (query) => {
        this.setState({
            query: query
        })
    };

    render() {
        //console.log(this.props);

        let filteredTasks;
        if(this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query, 'i'))
            filteredTasks = this.props.tasksProperty.filter(task => match.test(task.task))
        } else {
            filteredTasks = this.props.tasksProperty;
        }

        return (
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={this.state.query}
                    onChange={(event) => this.searchTask(event.target.value)}
                />
                {/*{this.state.query}*/}
                <ul>
                    {filteredTasks.map((singleTask) => (
                        <li key={singleTask.id}>
                            {singleTask.task}
                            <button onClick={() => this.props.onTaskCompletion(singleTask)}>
                                Completed
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ListTasks