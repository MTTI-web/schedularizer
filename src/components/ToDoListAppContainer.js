import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import ToDoListContainer from "./ToDoListContainer";

function ToDoListAppContainer(props) {
    const listURL = props.match.params.id;
    const [editingState, setEditingState] = useState(false);
    const [editID, setEditID] = useState("");
    const [currentTaskValue, setCurrentTaskValue] = useState("");
    const [alert, setAlert] = useState({
        show: false,
        message: "Hello world!",
        type: "warning",
    });
    const [isInputFocused, setIsInputFocused] = useState(false);

    useEffect(() => {
        document.querySelector(".toDoListAppContainer").focus();
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            showAlert();
        }, 1000);
        return () => clearTimeout(timeout);
    }, [alert]);

    const handleTaskSubmit = (e) => {
        e.preventDefault();
        const taskName = e.currentTarget.listInput.value.trimStart().trimEnd();
        let newItem = {};
        if (!taskName && !editingState) {
            // display alert
            setCurrentTaskValue("");
            showAlert(true, "No value entered", "warning");
        } else if (taskName && !editingState) {
            newItem = {
                id: new Date().getTime().toString(),
                name: taskName,
                listSource: listURL,
            };
            if (props.newTaskLocation === "before") {
                props.setTasks([newItem, ...props.tasks]);
            } else if (props.newTaskLocation === "after") {
                props.setTasks([...props.tasks, newItem]);
            }
            setCurrentTaskValue("");
            showAlert(true, "Task added!", "success");
        } else if (taskName && editingState) {
            props.setTasks(
                props.tasks.map((task) => {
                    if (task.id === editID) {
                        task.name = taskName;
                    }
                    return task;
                })
            );
            setEditingState(false);
            setEditID("");
            setCurrentTaskValue("");
            showAlert(true, "Task edited", "success");
        } else if (!taskName && editingState) {
            props.setTasks(props.tasks.filter(({ id }) => id !== editID));
            showAlert(true, "Task deleted", "warning");
        }
        e.currentTarget.listInput.value = "";
    };

    const showAlert = (show = true, message = "", type = "") => {
        setAlert({ show, message, type });
    };

    return (
        <div className="toDoListAppContainer">
            <div className="taskListNameInTasksList">
                {listURL.replace("_", " ")}
            </div>
            {alert.show ? (
                <div className={`alertMessage alert-type-${alert.type}`}>
                    {alert.message}
                </div>
            ) : null}
            <ToDoListContainer
                tasks={props.tasks}
                setEditingState={setEditingState}
                setEditID={setEditID}
                setCurrentTaskValue={setCurrentTaskValue}
                setTasks={props.setTasks}
                showAlert={showAlert}
                listURL={listURL}
                setShowCongratsRain={props.setShowCongratsRain}
            />
            <div
                className="tasksControlArea"
                style={{
                    gridTemplateColumns: `${
                        props.tasks.filter(
                            ({ listSource }) => listSource === listURL
                        ).length > 0
                            ? "5fr 1.5fr"
                            : "100%"
                    }`,
                }}
            >
                <form className="listInputForm" onSubmit={handleTaskSubmit}>
                    <div className="taskInputArea">
                        <input
                            type="text"
                            placeholder="Enter task here..."
                            name="listInput"
                            id="listInput"
                            autoComplete="off"
                            value={currentTaskValue}
                            onChange={(e) =>
                                setCurrentTaskValue(e.currentTarget.value)
                            }
                            onFocus={() => setIsInputFocused(true)}
                            onBlur={() => setIsInputFocused(false)}
                        />
                        <div
                            className="inputFocusUnderline"
                            style={{
                                width: `${isInputFocused ? "100%" : "0"}`,
                            }}
                        ></div>
                    </div>
                    <button type="submit">
                        {editingState ? "Edit" : "Create"}
                    </button>
                </form>
                {props.tasks.filter(({ listSource }) => listSource === listURL)
                    .length > 0 ? (
                    <button
                        className="clearTasksButton"
                        type="button"
                        onClick={() => {
                            props.setTasks([]);
                            setEditingState(false);
                            setCurrentTaskValue("");
                            showAlert(true, "Tasks cleared", "warning");
                        }}
                    >
                        Clear Tasks
                    </button>
                ) : null}
            </div>
        </div>
    );
}

export default withRouter(ToDoListAppContainer);
