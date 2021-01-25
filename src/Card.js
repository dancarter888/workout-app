import React, { useEffect } from "react";
import CardExpand from "./CardExpand";
import Checked from "./Images/Checked.png";
import Unchecked from "./Images/Unchecked.png";
import "./index.css";
import {TweenLite} from "gsap";

function Card({exercise, exercises, setExercises}) {
    var image;
    var alt;

    if (exercise.completed === false) {
        image = Unchecked;
        alt = "Unchekced";
    } else {
        image = Checked;
        alt = "Checked";
    }

    // const handleDelete = () => {
    //     setExercises(exercises.filter((el) => el.id !== exercise.id));
    // }

    const handleCompletion = () => {
        setExercises(exercises.map((item) => {
            if (item.id === exercise.id) {
                return {
                    ...exercise, completed: !exercise.completed
                }
            }
            return item;
        }))
    }

    const handleExpanded = () => {

        var timeOut = 0;

        if (exercise.expanded) {
            TweenLite.to(".card-expanded", {duration: 0.2, height: 0});
            TweenLite.to(".card-expanded-info", {duration: 0.1, top: -200});
            timeOut = 200;
        }

        setTimeout(function(){setExercises(exercises.map((item) => {
            if (item.id === exercise.id) {
                if (exercise.expanded) {
                   
                    
                 }
                return {
                    ...exercise, expanded: !exercise.expanded
                }
            } else if (item.expanded === true) {
                return {
                    ...item, expanded: false
                }
            }
            return item;
        }))}, timeOut);
    }

    useEffect(() => {
        if (exercise.expanded){
            TweenLite.to(".card-expanded", {duration: 0.1, height: 80+(32*exercise.sets)});
            TweenLite.to(".card-expanded-info", {duration: 0.2, top: -15});
        }
    });

    if (!exercise.expanded) {
        return (
            <div className="container">
                <div className="card" onClick={handleExpanded}>
                    <div className="card-info">
                        <h2>{exercise.name}</h2>
                        <div className="exercise-info">
                            <p className="sets">Sets: {exercise.sets}</p>
                            <p className="reps">Reps: {exercise.reps}</p>
                        </div>
                    </div>
                    <div className="check-mark">
                        <img src={image} alt={alt} height="60" width="60" onClick={(e) => {
                                                                                    e.stopPropagation(); 
                                                                                    handleCompletion();}}/>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="card" onClick={handleExpanded}>
                    <div className="card-info">
                        <h2>{exercise.name}</h2>
                        <div className="exercise-info">
                            <p className="sets">Sets: {exercise.sets}</p>
                            <p className="reps">Reps: {exercise.reps}</p>
                        </div>
                    </div>
                    <div className="check-mark">
                        <img src={image} alt={alt} height="60" width="60" onClick={(e) => {
                                                                                    e.stopPropagation(); 
                                                                                    handleCompletion();}}/>
                    </div>
                </div>
                <CardExpand exercise={exercise} exercises={exercises} setExercises={setExercises}/>
            </div>
        );
    }   
}

export default Card;