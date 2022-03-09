import React, { useState } from 'react';

export default function MainContent() {
    let copyBtn = document.getElementById('copyBtn');
    let findInput = document.getElementById('findInput');
    let replaceInput = document.getElementById('replaceInput');

    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }

    const [text, setText] = useState("");
    const [btnText, setbtnText] = useState("Copy");

    let copyEvent = () => {
        navigator.clipboard.writeText(text);
        setbtnText('Copied');
        copyBtn.classList.remove('btn-outline-primary');
    }
    let onChangeEvent = (event) => {
        setText(event.target.value);
        setbtnText('Copy');
        copyBtn.classList.add('btn-outline-primary');
    }
    let replaceEvent = () => {
        let findValue = findInput.value;
        let replaceValue = replaceInput.value
        setText(replaceAll(text, findValue, replaceValue));
    }

    let handleUcClick = () => {
        let ucText = text.toUpperCase();
        setText(ucText);
        setbtnText('Copy');
        copyBtn.classList.add('btn-outline-primary');
    }
    let handleLcClick = () => {
        let lcText = text.toLowerCase();
        setText(lcText);
        setbtnText('Copy');
        copyBtn.classList.add('btn-outline-primary');
    }
    let handleRsClick = () => {
        let rsText = text.replace(/ /g, "");
        setText(rsText);
        setbtnText('Copy');
        copyBtn.classList.add('btn-outline-primary');
    }

    return (
        <div className="container mt-4">
            <h2 className="display-6 fw-bold">Enter a text to analyze</h2>
            <div className='d-flex justify-content-end mt-3 mb-2'>
                <button className="btn btn-outline-primary" id='copyBtn' onClick={copyEvent}>{btnText}</button>
            </div>
            <div className="form-floating">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" value={text} style={{ height: "300px" }} onChange={onChangeEvent}></textarea>
                <label htmlFor="floatingTextarea2">Enter text here</label>
                <div className="d-flex bg-dark text-white p-2 rounded-bottom">
                    <p className='flex-grow-1 my-0'><strong>{text.split(' ').length}</strong> words and <strong>{text.length}</strong> characters</p>
                    <p className='my-0'>Minutes to read: {parseFloat(.004*text.split(' ').length).toFixed(3)}</p>
                </div>
            </div>
            <div className="row d-flex mt-4">
                <div className="col-4">
                    <input type="text" className="form-control" id="findInput" placeholder='Find' />
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" id="replaceInput" placeholder='Replace with' />
                </div>
                <div className="col-4">
                    <button className="btn btn-primary" onClick={replaceEvent}>Replace all</button>
                </div>
            </div>
            <div className="row mt-4">
                <div className="d-grid gap-2 col-4">
                    <button className="btn btn-primary" type="button" onClick={handleUcClick}>Convert to Uppercase</button>
                </div>
                <div className="d-grid gap-2 col-4">
                    <button className="btn btn-primary" type="button" onClick={handleLcClick}>Convert to Lowercase</button>
                </div>
                <div className="d-grid gap-2 col-4">
                    <button className="btn btn-primary" type="button" onClick={handleRsClick}>Remove spaces</button>
                </div>
            </div>
            <h2 className='mt-4 fw-bold'>Preview text</h2>
            <p className="lead">{text}</p>
        </div>
    )
}
