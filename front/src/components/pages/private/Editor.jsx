import React, { useState, Fragment } from 'react';
import axios from 'axios';

function Editor() {
    function processOutput(props) {
        let nOutput = props.replace(/\n/g, "<br>");
        return nOutput;
    }

    function processInput(props) {
        let lines = props.split('\n');
        let nInput = '';
        for (let i = 0; i < lines.length; i++) {
            let nInputI = JSON.stringify(lines[i]);
            if (i === lines.length - 1) {
                nInput = nInput + nInputI;
            } else {
                nInput = nInput + nInputI + "\n";
            }
        }
        console.log(nInput);
        return nInput;
    }

    const [code, setCode] = useState('');
    const [inputStdin, setInputStdin] = useState('');
    const [responseC, setResponseC] = useState('');
    const [expectedOutput, setExpectedOutput] = useState(5 * 12);
    const [output, setOutput] = useState(null);

    const handleSubmit = (event) => {

        event.preventDefault();
        var inputStdinN = processInput(inputStdin)
        console.log(`El código ingresado es: ${code}`);
        const config = {
            script: code,
            stdin: inputStdinN
        }
        axios.post('https://localhost:7253/api/Codes',
            JSON.stringify(config),
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log('La compilación fue:', response.data);
                const objeto = JSON.parse(response.data);
                setResponseC(processOutput(objeto.output));
            })
            .catch(error => {
                console.error('Hubo un error:', error);
            });

    };

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    };

    const handleInputStdinChange = (event) => {
        setInputStdin(event.target.value);
    };

    return (
        <Fragment>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Description</h5>
                            <br />
                            <div className="card-body">
                                <h5 className="card-title">Expected Output</h5>
                                <p className='card-text'>{expectedOutput}</p>
                            </div>
                            {responseC ? (<div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Output</h5>
                                    <p dangerouslySetInnerHTML={{ __html: responseC }}></p>
                                </div>
                            </div>) : null}
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="code"></label>
                                    <textarea className='compiler_editor' id="code" value={code} onChange={handleCodeChange} />
                                </div>
                                <div>
                                    <label htmlFor="inputStdin"></label>
                                    <textarea id="inputStdin" value={inputStdin} onChange={handleInputStdinChange} />
                                </div>
                                <button type="submit">Enviar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >

    );
}

export default Editor;
