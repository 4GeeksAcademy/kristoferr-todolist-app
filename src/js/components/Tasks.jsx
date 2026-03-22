export const Tasks = () => {
    
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
                            <ul className="tasks">
                                <li>Task 1</li>
                                <li>Task 2</li>
                                <li>Task 3</li>
                                <li>Task 4</li>
                            </ul>

                            <div className="task-count">
                                <h6>4 Items Left</h6>
                            </div>
                    </div>
                </div>
                <div className="col-3"></div>
            </div>
        </div>

    );
};