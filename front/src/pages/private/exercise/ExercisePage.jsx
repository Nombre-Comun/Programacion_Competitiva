import { useParams } from "react-router-dom";
import { GetExercise } from "../../../services/ExercisesService";
import { Fragment } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";

function Exercise() {
    const { id } = useParams();
    const exercise = GetExercise(id);
    const examples = exercise.Examples;

    return (
        <div>
            {exercise && examples ? (
                <>
                    <h2>{exercise.Title}</h2>
                    <p>{exercise.Description}</p>
                    {examples.map((item) => (
                        <Fragment key={item.id}>
                            <h4>Input</h4>
                            <pre>{item.input}</pre>
                            <h4>Output</h4>
                            <pre>{item.output}</pre>
                        </Fragment>
                    ))}
                    <p>Time Limit: {exercise.TimeLimit}</p>
                    <p>Memory Limit: {exercise.MemoryLimit}</p>
                    <p>Function Signatured: {exercise.FunctionSignature}</p>
                    <p>Author: {exercise.Author}</p>
                    <AceEditor
                        id="code"
                        value={exercise.SolutionTemplate}
                        mode="java"
                        theme="monokai"
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                    />
                    <pre>{JSON.stringify(exercise, null, 2)}</pre>
                </>
            ) : (
                <p>Loading exercise...</p>
            )}
        </div>
    );
}

export default Exercise;
