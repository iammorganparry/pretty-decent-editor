import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { PrettyDecentEditor } from './components/Editor';

ReactDOM.render(
    <React.StrictMode>
        <div
            style={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
            <div style={{ width: 1000, display: 'flex', minHeight: 500 }}>
                <PrettyDecentEditor
                    onAttachment={(files) => console.table(files)}
                    // onEditorChange={(value) => console.log(value.toHTML())}
                />
            </div>
        </div>
    </React.StrictMode>,
    document.getElementById('root'),
);

export default PrettyDecentEditor;
