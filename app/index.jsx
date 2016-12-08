import React from 'react';
import {render} from 'react-dom';
import './index.html';
import './index.less';

import App from './component/App';



render(<App/>, document.getElementById('root'),function(){
    console.log('渲染完成',document.getElementById('test'));
});
