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

export function SetNewExercise(newExercise) {
  axios.post("https://localhost:7253/api/Codes/add", newExercise)
    .then((response) => {
      console.log(response);
      alert("Agregado exitosamente!");
      return "Agregado";
    })
    .catch((error) => {
      console.error(error.response);
      alert("¡Error al registrar el ejercicio!");
      return "No ha sido agregado";
    });
}

export function CompileCustomCode(eCase) {
  const requestBody = {
    script: eCase.script,
    stdin: eCase.stdin,
    language: "java",
    version: "4"
  };
  return axios.post('https://localhost:7253/api/Codes', requestBody, {
    headers: {
      'accept': '*/*',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log('La compilación fue:', response.data);
      return response.data.output;
    })
    .catch(error => {
      console.error('Hubo un error:', error);
      return "Error en la compilación";
    });
}

