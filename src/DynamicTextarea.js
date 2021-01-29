// Code taken and refactored from a JSFiddle answer to this question: https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
// The specific JSFiddle: http://jsfiddle.net/hmelenok/WM6Gq/
import React from 'react';
import ReactDOM from 'react-dom';

export default class DynamicTextarea extends React.Component { // text is the textarea element to be automatically resized with this listener.
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.resize();
    }

    resize() {
        this.style.height = 'auto';
        this.style.height = text.scrollHeight+'px';
    }

    delayedResize() { /* 0-timeout to get the already changed text */
        window.setTimeout(resize, 0);
    }

    render() {
        <textarea placeholder={this.props.placeholder} className={this.props.className} value={this.state.value} 
            onchange={this.resize} oncut={this.delayedResize} onpaste={this.delayedResize} 
            ondrop={this.delayedResize} onchange={this.delayedResize} />
    }
}