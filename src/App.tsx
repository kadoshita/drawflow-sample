import React, { useEffect, useRef } from 'react';
import Drawflow from 'drawflow';
import 'drawflow/dist/drawflow.min.css';
import './app.css';
import { drawflowData } from './data';

export function App() {
    const drawflowElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = new Drawflow(drawflowElement.current);
        editor.start();
        editor.import(drawflowData);
    }, []);

    return <div id="drawflow" ref={drawflowElement}></div>;
}
