import { useState, useEffect } from 'react';
import axios from 'axios';

export function GetExercises() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      const response = await axios.get('https://localhost:7253/api/Codes');
      setExercises(response.data);
    };
    fetchExercises();
  }, []);

  return exercises;
}

export function GetExercise(id) {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    const fetchExercise = async () => {
      const response = await axios.get('https://localhost:7253/api/Codes/' + id);
      const object = response.data;
      const examples = JSON.parse(object.Examples);
      object.Examples = examples; 
      setExercise(object);
    };
    fetchExercise();
  }, [id]);

  return exercise;
}
