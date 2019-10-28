import React, { Component } from 'react';
import './App.css';

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

class TOC extends Component{
    render(){
        return(
            <nav>
                <ul>
                    <li><a href="1.html">HTML</a></li>
                    <li><a href="2.html">CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component{
    render(){
        return(
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

class App extends Component{
    render() {
        return (
        <div className="App">
            <Subject title="WEB" sub="world wide web!"></Subject>
            <Subject title="React" sub="For UI"></Subject>
            <TOC></TOC>
            <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
        </div>
        );
    }
}

export default App;
