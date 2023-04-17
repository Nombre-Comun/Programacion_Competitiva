import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GetExercises } from '../../../services/ExercisesService';
import Navigator from '../../../components/Navigator';

function App() {
    const exercises = GetExercises();
    return (
        <Fragment>
            <Navigator />
            <h1>Exercises</h1>
            <pre>{JSON.stringify(exercises, null, 2)}</pre>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Difficulty Level</th>
                        <th>Categories</th>
                        <th>Last Update</th>
                    </tr>
                </thead>
                <tbody>
                    {exercises.map((item) => (
                        <tr key={item.id}>
                            <td>{item.Title}</td>
                            <td>{item.Description}</td>
                            <td>{item.DifficultyLevel}</td>
                            <td>{item.Categories}</td>
                            <td>{item.LastUpdated}</td>
                            <td><Link to="/exercise/2">Exercise {item.Id}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

export default App;
