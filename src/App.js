import React, { useState } from "react";
import "./index.css";
import Card from "./Card";

function App() {

  const exerciseArray = {
    hackSquat: {name: "Hack Squat", sets: "4", reps: "6-8", completed: false, expanded: false, id: Math.random() * 1000},
    legPress: {name: "Leg Press", sets: "3", reps: "10-15", completed: false, expanded: false, id: Math.random() * 1000},
    hipThrusts: {name: "Hip Thrusts", sets: "3", reps: "10-12", completed: false, expanded: false, id: Math.random() * 1000},
    shoulderPress: {name: "Shoulder Press", sets: "3", reps: "8", completed: false, expanded: false, id: Math.random() * 1000},
    dumbellCurl: {name: "Dumbell Curl", sets: "3", reps: "8", completed: false, expanded: false, id: Math.random() * 1000},
    overheadPress: {name: "Overhead Press", sets: "4", reps: "8", completed: false, expanded: false, id: Math.random() * 1000},
    oneArmDumbellRow: {name: "One Arm Dumbell Row", sets: "4", reps: "6-8", completed: false, expanded: false, id: Math.random() * 1000},
    latPullDown: {name: "Lat Pull Down", sets: "3", reps: "8-12", completed: false, expanded: false, id: Math.random() * 1000},
  };

  const workoutArray = [
    [exerciseArray.hackSquat, exerciseArray.legPress, exerciseArray.hipThrusts, exerciseArray.overheadPress, exerciseArray.oneArmDumbellRow, exerciseArray.latPullDown],
    [exerciseArray.shoulderPress],
    [exerciseArray.dumbellCurl]
  ]

  const [currentWorkout, setCurrentWorkout] = useState(0);
  const [exercises, setExercises] = useState(workoutArray[0]);

  console.log(exerciseArray.hackSquat.id);

  const handleWorkoutChange = (workoutIndex) => {
    setCurrentWorkout(workoutIndex);
    setExercises(workoutArray[workoutIndex]);
  }

  const renderWorkout = () => {
    return(exercises.map((exercise, exerciseIndex) => {
      return (
        <Card key={exercise.id} exercise={exercise} exercises={exercises} setExercises={setExercises} />
      )
    }))
  }

  return (
    <div className="App">
      <main>
        <section className="glass">
            <div className="dashboard">
                <div className="links">
                    <div className={(currentWorkout === 0) ? "active-workout" : "inactive-workout"}>
                        <h3 onClick={(event) => handleWorkoutChange(0, event)}>Workout 1</h3>
                    </div>
                    <div className={(currentWorkout === 1) ? "active-workout" : "inactive-workout"}>
                        <h3 onClick={(event) => handleWorkoutChange(1, event)}>Workout 2</h3>
                    </div>
                    <div className={(currentWorkout === 2) ? "active-workout" : "inactive-workout"}>
                        <h3 onClick={(event) => handleWorkoutChange(2, event)}>Workout 3</h3>
                    </div>
                    <div className="inactive-workout">
                        <h3>Custom</h3>
                    </div>
                </div>
            </div>
            <div className="display-window">
                <div className="cards">
                    {renderWorkout()}        
                </div>
            </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
