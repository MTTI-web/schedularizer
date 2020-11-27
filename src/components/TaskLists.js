import React from "react";
import { Link } from "react-router-dom";
import CreateNewTaskListForm from "./CreateNewTaskListForm";

function TaskLists({ taskLists, setTaskLists, showModal, setTasks, tasks }) {
    return (
        <div className="taskLists">
            {taskLists.map((list, index) => (
                <Link
                    to={`/schedularizer/tasks/${list.url}`}
                    className="taskListOpenLink"
                    key={index}
                >
                    <div className="taskListName">{list.name}</div>
                    <div className="additionalTaskListInformation">
                        {list.name === "My Day" ? "All Tasks" : ""}
                    </div>
                    {list.name !== "My Day" ? (
                        <button
                            className="deleteTaskListButton"
                            type="button"
                            onClick={(e) => {
                                e.preventDefault();
                                setTaskLists(
                                    taskLists.filter(
                                        ({ name }) => name !== list.name
                                    )
                                );
                                setTasks(
                                    tasks.filter(
                                        ({ listSource }) =>
                                            listSource !== list.url
                                    )
                                );
                            }}
                        >
                            <ion-icon name="trash-outline"></ion-icon>
                        </button>
                    ) : null}
                </Link>
            ))}
            <button
                className="createTaskListButton"
                onClick={() => {
                    showModal(
                        true,
                        <CreateNewTaskListForm
                            taskLists={taskLists}
                            setTaskLists={setTaskLists}
                            showModal={showModal}
                        />
                    );
                }}
            >
                &#43;
            </button>
        </div>
    );
}

export default TaskLists;
