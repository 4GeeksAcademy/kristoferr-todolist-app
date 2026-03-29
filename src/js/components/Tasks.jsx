import { useEffect, useState } from "react";

export const Tasks = () => {
    
    const [tasks, setTasks] = useState([]);
    const [userInput, setUserInput] = useState("");

    function addTask(userInput){
        
        console.log("testing user input from add task function", userInput);

        const payload = {
            label: userInput,
            is_done: false
        };

        console.log(payload);
        
        fetch('https://playground.4geeks.com/todo/todos/kristofer', {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if(response.ok){
                //refresh task list
                getTasksfromAPI();
            }
            else{
                return alert("there is an error sending a task");
            }
        }).catch(error => console.log(error));

        // const postTaskURL = "https://playground.4geeks.com/todo/todos/kristofer";

        // fetch(
        //     postTaskURL, {
        //         method: "POST",
        //         body: JSON.stringify(payload),
        //         headers: {
        //             "Content-Type": "application/json"
        //         }
        //     }
        // ).then(response => {
        //     if(response.ok){
        //         getTasksfromAPI();
        //     }
        // }).catch((error)=> console.log("error", error));

    }

    function getTasksfromAPI(){

        console.log("updating tasks");

       fetch("https://playground.4geeks.com/todo/users/kristofer",{
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
       }).then((response)=>{
        console.log(response);
        return response.json();
       }).then((data)=>{
        console.log(data);
        
        const todolist = data.todos;
        const todoArray = [];
        for(const todo of todolist){
            todoArray.push(todo.label);
        }

        // for(let key in todolist){
        //     todoArray.push(todolist[key].label);
        // }

        setTasks(todoArray);
       });

        // fetch('https://playground.4geeks.com/todo/users/kristofer', {
        // method: "GET",
        // headers: {
        //   "Content-Type": "application/json"
        // }
        // })
        // .then(resp => {
        //     console.log(resp.ok); // Will be true if the response is successful
        //     console.log(resp.status); // Status code 201, 300, 400, etc.
        //     return resp.json(); // Will attempt to parse the result to JSON and return a promise where you can use .then to continue the logic
        // })
        // .then(data => {
        //     // This is where your code should start after the fetch is complete
        //     console.log(data); // This will print the exact object received from the server to the console
        // })
        // .catch(error => {
        //     // Error handling
        //     console.log(error);
        // });
        
        

    }
    
    useEffect(()=>{
        //console.log("loading for first time");

        // fetch('https://playground.4geeks.com/todo/users/kristofer', {
        //     method: "GET",
        // }).then((response)=>{
        //     console.log(response);
        // }).then((data)=>{
        //     console.log(data);
        // });
        
        fetch('https://playground.4geeks.com/todo/users/kristofer', {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
        })
        .then(resp => {
            console.log(resp.ok); // Will be true if the response is successful
            console.log(resp.status); // Status code 201, 300, 400, etc.
            return resp.json(); // Will attempt to parse the result to JSON and return a promise where you can use .then to continue the logic
        })
        .then(data => {
            // This is where your code should start after the fetch is complete
            console.log(data); // This will print the exact object received from the server to the console
            console.log(data.name);
            console.log(data.todos);
            console.log(data.todos[0].label);

            const todolist = data.todos;
            const todoArray = [];
            for(const todo of todolist){
                todoArray.push(todo.label);
            }

            // for(let key in todolist){
            //     todoArray.push(todolist[key].label);
            // }

            setTasks(todoArray);
        })
        .catch(error => {
            // Error handling
            console.log(error);
        });
        
    },[]);
    
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
                                    // const newTasks = [...tasks,userInput];
                                    // //console.log(newTasks);
                                    // setTasks(newTasks);
                                    // setUserInput("");
                                    addTask(userInput);

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
                                                const newTasks = [...tasks];
                                                newTasks.splice(index,1);
                                                setTasks(newTasks);

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