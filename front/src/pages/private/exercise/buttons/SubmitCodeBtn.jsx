import { Fragment, useState } from "react";
import { CompileCustomCode } from "../../../../services/ExercisesService";

export function TestInputBtn(props){
    const [stdin, setStdin] = useState('');
    const [output, setOutput] = useState('');
    const eCase = useState({
        script: '',
        stdin: ''
    });
    function onSubmit(){
        eCase.script = props.code;
        eCase.stdin = stdin;
        alert("Enviando " + eCase.script + " input " + eCase.stdin);
        const response = CompileCustomCode(eCase);
        setOutput(response);
        console.log(response);
    };
    
    return (
        <Fragment>
            
            <button className="btn btn-secondary" onClick={onSubmit}>Test Input</button>
            <p>{output}</p>
        </Fragment>
    );
}

export function TestExamplesCasesBtn(){
    return (
        <Fragment>
            <button className="btn btn-primary">Test Examples</button>
        </Fragment>
    );
}

export function SubmitCodeBtn(){
    return (
        <Fragment>
            <button className="btn btn-success">Submit Code</button>
        </Fragment>
    );
}
