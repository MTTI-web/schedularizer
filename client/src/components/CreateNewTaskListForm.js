import React from "react";

function CreateNewTaskListForm({ taskLists, setTaskLists, showModal }) {
    return (
        <>
            <label className="newTaskListCreateLabel">New Task List Name</label>
            <form
                className="newTaskListCreateForm"
                onSubmit={(e) => {
                    e.preventDefault();
                    const newTaskList = {
                        name: e.currentTarget.newTaskListCreateInput.value
                            .trimStart()
                            .trimEnd(),
                    };
                    newTaskList.url = newTaskList.name.replace(" ", "_");
                    console.log(newTaskList);
                    if (newTaskList) {
                        setTaskLists([...taskLists, newTaskList]);
                        showModal(false, null);
                    }
                }}
            >
                <input
                    type="text"
                    id="newTaskListCreateInput"
                    name="newTaskListCreateInput"
                    autoComplete="off"
                />
                <button
                    type="submit"
                    className="newTaskListCreateSubmitButton"
                >
                    Create
                </button>
            </form>
        </>
    );
}

export default CreateNewTaskListForm;
