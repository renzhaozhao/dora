import React from 'react';
import {DatePicker,Pagination} from 'antd';
import moment from 'moment';
import Hello from './Hello';
import Star from './Star';
import {ajax} from 'jquery';

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            selectdate:moment('2015/01/01', dateFormat)
        };
        this.search=this.search.bind(this);
    }

    componentWillMount(){
    }

    componentDidMount(){
        this.timerID = setInterval(()=>this.tick(),1000);
        ajax({
            url: 'https://api.zhiweicloud.com/wyundata/api/homepage/search/hotwords',
            type: 'GET',
            success: function(data) {
                console.log(data);
            }
        })
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    search(){
        console.log(this.state.selectdate);
    }

    changePage(page){
        console.log(page);
    }

    render() {
        return (
            <div>
                <DatePicker/>
                <button onClick={this.search}>查询</button>
                <h1 id="test">Hello, world!<span>asdas</span></h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <Hello name="renzhao"/>
                <Star count="4"/>
                <Pagination defaultCurrent={1} total={500} onChange={this.changePage}/>
            </div>
        );
    }
}

export default App;