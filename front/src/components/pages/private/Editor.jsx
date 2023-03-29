import React, { useState, Fragment } from 'react';
import axios from 'axios';

function Editor() {
    function processOutput(props) {
        let nOutput = props;
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
    const [language, setLanguage] = useState('java');
    const [versionLang, setVersionLang] = useState('java');
    const [version, setVersion] = useState('4');
    const [expectedOutput, setExpectedOutput] = useState(5 * 12);

    const versionCode = (() => {
        switch (language) {
            case 'java':
                return [
                    { value: 'java', label: 'Java' },
                ];
            case 'python2':
                return [
                    { value: 'python2', label: 'Python 2' },
                    { value: 'python3', label: 'Python 3' },
                ];
            case 'cpp':
                return [
                    { value: 'cpp', label: 'C++' },
                    { value: 'cpp14', label: 'C++ 14' },
                    { value: 'cpp17', label: 'C++ 17' },
                ];
            default:
                return [];
        }
    })();

    const versionLanguage = (() => {
        switch (versionLang) {
            case 'java':
                return [
                    { value: '0', label: 'JDK 1.8.0_66' },
                    { value: '1', label: 'JDK 9.0.1' },
                    { value: '2', label: 'JDK 10.0.1' },
                    { value: '3', label: 'JDK 11.0.4' },
                    { value: '4', label: 'JDK 17.0.1' },
                ];
            case 'python2':
                return [
                    { value: '0', label: '2.7.11' },
                    { value: '1', label: '2.7.15' },
                    { value: '2', label: '2.7.16' },
                    { value: '3', label: '2.7.18' },
                ];
            case 'python3':
                return [
                    { value: '0', label: '3.5.1' },
                    { value: '1', label: '3.6.3' },
                    { value: '2', label: '3.6.5' },
                    { value: '3', label: '3.7.4' },
                    { value: '4', label: '3.9.9' },
                ];
            case 'cpp':
                return [
                    { value: '0', label: 'GCC 5.3.0' },
                    { value: '1', label: 'Zapcc 5.0.0' },
                    { value: '2', label: 'GCC 7.2.0' },
                    { value: '3', label: 'GCC 8.1.0' },
                    { value: '4', label: 'GCC 9.1.0' },
                    { value: '5', label: 'GCC 11.1.0' },
                ];
            case 'cpp14':
                return [
                    { value: '0', label: 'g++ 14 GCC 5.3.0' },
                    { value: '1', label: 'g++ 14 GCC 7.2.0' },
                    { value: '2', label: 'g++ 14 GCC 8.1.0' },
                    { value: '3', label: 'g++ 14 GCC 9.1.0' },
                    { value: '4', label: 'GCC 11.1.0' },
                ];
            case 'cpp17':
                return [
                    { value: '0', label: 'g++ 17 GCC 9.1.0' },
                    { value: '1', label: 'GCC 11.1.0' },
                ];
            default:
                return [];
        }
    })();

    const handleSubmit = (event) => {

        event.preventDefault();
        var inputStdinN = processInput(inputStdin)
        console.log(`El código ingresado es: ${code}`);
        const config = {
            script: code,
            stdin: inputStdinN,
            language: versionLang,
            version: version
        }
        console.log(version + " " + versionLang)
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

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
        setVersionLang(event.target.value);
        setVersion(0);
    };

    const handleVersionLangChange = (event) => {

        setVersionLang(event.target.value);
        setVersion(0);
    };

    const handleVersionChange = (event) => {
        setVersion(event.target.value);
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
                                <select value={language} onChange={handleLanguageChange}>
                                    <option value="python2">Python</option>
                                    <option value="java">Java</option>
                                    <option value="cpp">C++</option>
                                </select>
                                <select value={versionLang} onChange={handleVersionLangChange}>
                                    {versionCode.map((opcion) => (
                                        <option key={opcion.value} value={opcion.value}>
                                            {opcion.label}
                                        </option>
                                    ))}
                                </select>
                                <select value={version} onChange={handleVersionChange}>
                                    {versionLanguage.map((opcion) => (
                                        <option key={opcion.value} value={opcion.value}>
                                            {opcion.label}
                                        </option>
                                    ))}
                                </select>
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
