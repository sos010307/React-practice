import React, { Component } from 'react';

class Subject extends Component{
    render(){ //함수, function 생략
        return ( // 컴포넌트를 만들때 반드시 1개의 최상위 태그가 필요함
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}!
            </header>
        );
    }
}

export default Subject;