// Code taken and refactored from a JSFiddle answer to this question: https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
// The specific JSFiddle: http://jsfiddle.net/hmelenok/WM6Gq/

export default function (text) { // text is the textarea element to be automatically resized with this listener.
    function resize() {
        text.style.height = 'auto';
        text.style.height = text.scrollHeight+'px';
    }
    /* 0-timeout to get the already changed text */
    function delayedResize () {
        window.setTimeout(resize, 0);
    }
    text.addEventListener('change',  resize);
    text.addEventListener('cut',     delayedResize);
    text.addEventListener('paste',   delayedResize);
    text.addEventListener('drop',    delayedResize);
    text.addEventListener('keydown', delayedResize);
    resize();
}