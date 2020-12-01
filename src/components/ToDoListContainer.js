import React from "react";
import tasksImage from "../tasksImage.svg";

function ToDoListContainer({
    tasks,
    setTasks,
    setEditingState,
    setEditID,
    setCurrentTaskValue,
    showAlert,
    listURL,
    setShowCongratsRain,
    theme,
}) {
    let filteredTasks = [];
    if (listURL !== "My_Day") {
        filteredTasks = tasks.filter(
            ({ listSource, completed }) => listSource === listURL && !completed
        );
    } else {
        filteredTasks = tasks.filter(({ completed }) => !completed);
    }
    return filteredTasks.length > 0 ? (
        <div className="toDoListContainer">
            {filteredTasks.map(({ id, name }) => (
                <div
                    className="taskContainer"
                    id={id}
                    draggable="true"
                    onDragStart={(e) => {
                        e.dataTransfer.setData("taskID", id);
                        e.currentTarget.style.color = "#fff";
                        e.currentTarget
                            .querySelectorAll("button")
                            .forEach((button) => (button.style.color = "#fff"));
                        e.currentTarget.style.borderColor = "#fff";
                    }}
                    onDragEnd={(e) => {
                        e.currentTarget.style.color = "#000";
                        e.currentTarget
                            .querySelectorAll("button")
                            .forEach((button) => {
                                button.style.color =
                                    theme !== "dark-pro" ? "#000" : "#adff2f";
                            });
                        e.currentTarget.style.borderColor =
                            theme !== "dark-pro" ? "#000" : "#adff2f";
                    }}
                    onDragOver={(e) => {
                        e.preventDefault();
                    }}
                    onDrop={(e) => {
                        e.preventDefault();
                        const taskID = e.dataTransfer.getData("taskID");
                        const task = tasks.find(({ id }) => id === taskID);
                        setTasks(
                            tasks.map((currentTask) => {
                                if (id === currentTask.id) {
                                    return task;
                                } else if (taskID === currentTask.id) {
                                    return tasks.find((t) => t.id === id);
                                } else {
                                    return currentTask;
                                }
                            })
                        );
                    }}
                    key={id}
                    onMouseEnter={(e) => {
                        e.currentTarget
                            .querySelectorAll("button")
                            .forEach((button) => {
                                button.style.opacity = "100%";
                            });
                        e.currentTarget.querySelector(
                            ".taskContent"
                        ).style.transform = "translateX(0)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget
                            .querySelectorAll("button")
                            .forEach((button) => {
                                button.style.opacity = "0%";
                            });
                        e.currentTarget.querySelector(
                            ".taskContent"
                        ).style.transform = "translateX(-20px)";
                    }}
                >
                    <button
                        className="completeTaskButton"
                        onClick={() => {
                            setTasks(
                                tasks.map((task) => {
                                    if (task.id === id) {
                                        task.completed = true;
                                    }
                                    return task;
                                })
                            );
                            setEditingState(false);
                            setCurrentTaskValue("");
                            setShowCongratsRain(true);
                            showAlert(true, "Task complete!", "success");
                        }}
                    >
                        <ion-icon name="checkmark-outline"></ion-icon>
                    </button>
                    <div className="taskContent">{name}</div>
                    <div className="taskEditOptions">
                        <button
                            className="deleteTaskButton"
                            onClick={() => {
                                setTasks(
                                    tasks.filter((task) => task.id !== id)
                                );
                                setEditingState(false);
                                setCurrentTaskValue("");
                                showAlert(true, "Task deleted", "warning");
                            }}
                        >
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                        <button
                            className="editTaskButton"
                            onClick={() => {
                                setEditingState(true);
                                setEditID(id);
                                setCurrentTaskValue(name);
                            }}
                        >
                            <ion-icon name="create-outline"></ion-icon>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    ) : (
        <div className="noTasksMessage">No Tasks</div>
    );
}

export default ToDoListContainer;
