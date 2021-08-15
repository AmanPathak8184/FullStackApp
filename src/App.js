import {Button} from "antd";

import {getAllStudents} from "./Client";

import './App.css';

function App() {
    getAllStudents()
        .then(console.log);
    return (
        <div className="App">

            <Button type='primary'>Hello</Button>

        </div>
    );
}

export default App;
