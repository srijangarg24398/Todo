import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// let el = React.createElement('ul', {
//     className: "some-class"
// }, React.createElement('li', null, "something"));

// let students = [
//     {
//         "id": 1,
//         "name": "shrey"
//     },
//     {
//         "id": 2,
//         "name": "vishal"
//     },
//     {
//         "id": 3,
//         "name": "tushar"
//     },
// ];

// const el2 = <ul>
//     {students.map((student) =>
//         <li key={student.id}>{student.name}</li>
//     )}
// </ul>;

class Student extends React.Component {
    render() {
        const students = [
            {
                "id": 1,
                "name": "shrey"
            },
            {
                "id": 2,
                "name": "vishal"
            },
            {
                "id": 3,
                "name": "tushar"
            },
        ];

        return (
            <ul>
                {students.map((student) =>
                    <li key={student.id}>{student.name}</li>
                )}
            </ul>
        )
    }
}

//ReactDOM.render(el2, document.getElementById("root"));
//ReactDOM.render(<Student />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById('root'));
