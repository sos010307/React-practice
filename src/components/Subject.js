import React, { Component } from 'react';

class Subject extends Component{
    render(){ //함수, function 생략
        console.log('Subject render');
        return ( // 컴포넌트를 만들때 반드시 1개의 최상위 태그가 필요함
            <header>
                <h1><a href="/" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangePage();
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;