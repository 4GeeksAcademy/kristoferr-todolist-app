import { useState } from "react";

export const Tasks = () => {
    
    const [tasks, setTasks] = useState([]);
    const [userInput, setUserInput] = useState("");
    
    function updateTasks(task,index){
        {tasks.map((task, index)=>{
            //console.log(tasks);
            return (
                <li 
                    onMouseOver={(event)=>{
                        console.log("i hovered mouse", task, index);
                        //return <h1>test</h1>;
                    }}
                    onClick={(event)=>{
                        console.log("you clicked", task, index);
                        //tasks.pop.task;
                        tasks.splice(index,1);

                    }}
                    key={index}>{task}
                </li>
            );
        })}
    }
    
    return(

        <div className="container">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6 d-flex justify-content-center">
                        <h1 className="header">todos</h1>
                </div>
                <div className="col-3"></div>
            </div>

            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="tasks-container">
                            <div className="task-input">
                                <input 
                                    type="text" 
                                    placeholder="What needs to be done today?"
                                    //onChange={(event)=>{setInputValue(event.target.value)}}
                                    onChange={(event) => setUserInput(event.target.value)}
                                    value={userInput}
                                />
                                <button 
                                className="btn btn-primary"
                                onClick={(event) => {
                                    const newTasks = [...tasks,userInput];
                                    //console.log(newTasks);
                                    setTasks(newTasks);
                                    setUserInput("");

                                }} 
                                >
                                    Add Task
                                </button>
                            </div>
                            
                            <ul className="tasks">
                                {tasks.map((task, index)=>{
                                    //console.log(tasks);
                                    return (
                                        <li 
                                            onMouseOver={(event)=>{
                                                console.log("i hovered mouse", task, index);
                                                //return <h1>test</h1>;
                                            }}
                                            onClick={(event)=>{
                                                console.log("you clicked", task, index);
                                                //tasks.pop.task;
                                                tasks.splice(index,1);

                                            }}
                                            key={index}>{task}
                                        </li>
                                    );
                                })}
                            </ul>

                            <div className="task-count">
                                <h6>{tasks.length} Items Left</h6>
                            </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>

    );
};