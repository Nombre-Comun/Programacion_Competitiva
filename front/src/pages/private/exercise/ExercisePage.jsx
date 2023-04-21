import { useParams } from "react-router-dom";
import { GetExercise } from "../../../services/ExercisesService";
import { Fragment } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import Navigator from "../../../components/Navigator";
import Editor from "./Editor";

function Exercise() {
    const { id } = useParams();
    const exercise = GetExercise(id);
    const examples = exercise.Examples;
    return (
        <Fragment>
            <Navigator />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <div className="container">
                                {exercise && examples ? (
                                    <>
                                        <h2>{exercise.Title}</h2>
                                        <p>{exercise.Description}</p>
                                        {examples.map((item, index) => (
                                            <Fragment key={index}>
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
                                        <pre>{JSON.stringify(exercise, null, 2)}</pre>
                                    </>
                                ) : (
                                    <p>Loading exercise...</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <Editor solutionTemplate={exercise.SolutionTemplate} id={id}/>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>

    );
}

export default Exercise;
