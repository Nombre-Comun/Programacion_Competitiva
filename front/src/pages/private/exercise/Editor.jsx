import { useState, Fragment } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import { useEffect } from "react";
import { CompileCustomCode } from "../../../services/ExercisesService";
import { SubmitCodeBtn, TestExamplesCasesBtn, TestInputBtn } from "./buttons/SubmitCodeBtn";

function Editor(props) {
    const [code, setCode] = useState('');
    const [stdin, setStdin] = useState('');
    const [output, setOutput] = useState('');

    useEffect(() => {
        setCode(props.solutionTemplate);
    }, [props]);
    function handleChangeCode(newValue) {
        setCode(newValue);
    };

    const handleChangeInput = (e) => {
        setStdin(e.target.value);
    };

    const handleTest = async () => {
        const eCase = {
            script: code,
            stdin: stdin
        };

        alert("Enviando " + eCase.script + " input " + eCase.stdin);

        const response = await CompileCustomCode(eCase);
        setOutput(response);
        console.log(response);
    };

    return (
        <Fragment>
            <AceEditor
                id="code"
                value={code}
                mode="java"
                onChange={handleChangeCode}
                theme="monokai"
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
            />
            <textarea onChange={handleChangeInput} id="input" />
            <button className="btn btn-secondary" onClick={handleTest}>Test</button>
            <pre>{output}</pre>
            <TestInputBtn code={code} />
            <TestExamplesCasesBtn />
            <SubmitCodeBtn />
        </Fragment>
    );
}

export default Editor;