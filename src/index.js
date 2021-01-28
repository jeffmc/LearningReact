import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './normalize.css';
class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.value,
            body: props.value,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({title: event.target.value});
    }

    render() {
        return (
            <div className="list-item">
                <input type="text" placeholder="Untitled Item" className="list-item-header" value={this.state.title} onChange={this.handleChange} />
                <p className="list-item-body">
                    I'm a list item with {this.state.body}.
                </p>
            </div>
        )
    }
}
class List extends React.Component {
    render() {
        return (
            <div className="list-container">
                <h2 className="list-header">Title</h2>
                <div className="list-scroller">
                    <div className="list">
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                        <Item value={~~(Math.random()*9000+1000)} />
                    </div>
                </div>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <List />
                <List />
            </div>
        )
    }
}

let tl = new App();

ReactDOM.render(tl.render(), document.querySelector('#root'))