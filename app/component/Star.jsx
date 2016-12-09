import React from 'react';

class Star extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render(){
        var items=[];
        for (let i = 0; i < 5; i++) {
            if (i < this.props.count) {
                items.push(
                    <i key={i} className="iconfont icon-xingxing yellow"></i>
                )
            } else {
                items.push(
                    <i key={i} className="iconfont icon-xingxing"></i>
                )
            }
        }
        return (
            <div>
                {items}
            </div>
        )
    }
}

export default Star;