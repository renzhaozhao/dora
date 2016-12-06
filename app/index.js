import React from 'react';
import ReactDOM from 'react-dom';
import './index.html';
import './index.less';
import {DatePicker} from 'antd';

function App() {
    return (
        <div style={{margin: 100}}>
            <h1>AntDesign Demo1112</h1>
            <hr/><br/>
            <DatePicker/>
        </div>
    );
}

ReactDOM.render(
    <App/>, document.getElementById('root'));
