import React, {Component} from 'react';
import './App.css';
import ListTasks from './ListTasks'

// let tasks = [
//     {
//         "id": 1,
//         "task": "clean your room"
//     },
//     {
//         "id": 2,
//         "task": "study hard for exams"
//     },
//     {
//         "id": 3,
//         "task": "start being honest"
//     },
// ];

class App extends Component {
    state = {
        tasks: [
            {
                "id": 1,
                "task": "clean your room"
            },
            {
                "id": 2,
                "task": "study hard for exams"
            },
            {
                "id": 3,
                "task": "start being honest"
            },
        ]
    };

    removeTask = (task) => {
        this.setState((prevState) => ({
            tasks: prevState.tasks.filter((oldTask) => oldTask.id !== task.id)
        }))
    };

    render() {
        return (
            <div>
                <ListTasks
                    tasksProperty={this.state.tasks}
                    onTaskCompletion={this.removeTask}
                />
            </div>
        );
    }
}

export default App;
