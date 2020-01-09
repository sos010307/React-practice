import React, { Component } from 'react';

class Control extends Component{
    render(){ //함수, function 생략
        console.log('Control render');
        return ( // 컴포넌트를 만들때 반드시 1개의 최상위 태그가 필요함
            <ul>
                <li><a href="/create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create')
                }.bind(this)}>create</a></li>
                <li><a href="/update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update')
                }.bind(this)}>update</a></li>
                <li><input type="button" value="delete" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete')
                }.bind(this)}></input></li>
            </ul>
        );
    }
}

export default Control;