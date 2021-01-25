import React from "react";
import "./index.css";

function CardExpand({exercise, exercises, setExercises}) {
    var setRows = [];

    for (let i=0; i < parseInt(exercise.sets); i++) {
        setRows.push(
            <tr className="set-row">
                <td className="input-col">
                    <input className="table-input" type="text"/>
                </td>
                <td className="input-col">
                    <input className="table-input" type="text"/>
                </td>
                <td className="input-col">
                    <input className="table-input" type="text"/>
                </td>
            </tr>
        );
    }

    return(
        <div className="card-expanded">
            <div className="card-expanded-info">
                <table>
                    <thead>
                        <tr>
                            <th><h4>Previous</h4></th>
                            <th><h4>KG</h4></th>
                            <th><h4>Reps</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        {setRows}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CardExpand;
