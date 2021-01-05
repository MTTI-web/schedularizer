import React, { useEffect, useState } from "react";
import "../App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToDoListAppContainer from "./ToDoListAppContainer.js";
import Header from "./Header.js";
import TaskLists from "./TaskLists.js";
import Modal from "./Modal.js";
import CustomizeModalContent from "./CustomizeModalContent.js";
import CongratsRain from "./CongratsRain.js";
import AboutUsSection from "./AboutUsSection";

const getItemFromLocalStorage = (item) => {
    const themeFromLocalStorage = localStorage.getItem(item);
    if (themeFromLocalStorage) {
        return themeFromLocalStorage;
    } else {
        return null;
    }
};

const getTasksFromLocalStorage = () => {
    const lsTasks = JSON.parse(localStorage.getItem("Tasks"));
    if (lsTasks) {
        return lsTasks;
    } else {
        return [];
    }
};

function App() {
    const [tasks, setTasks] = useState(getTasksFromLocalStorage());
    const [taskLists, setTaskLists] = useState(
        JSON.parse(getItemFromLocalStorage("TaskLists")) || [
            { name: "My Day", url: "My_Day" },
        ]
    );
    const [modalProps, setModalProps] = useState({
        show: false,
        children: null,
    });
    const [showCongratsRain, setShowCongratsRain] = useState(false);
    const showModal = (show = false, children = null) => {
        setModalProps({ show: show, children: children });
    };
    const [theme, setTheme] = useState(
        getItemFromLocalStorage("Theme") || "yellow"
    );
    const [newTaskLocation, setNewTaskLocation] = useState("after");

    useEffect(() => {
        localStorage.setItem("Theme", theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem("TaskLists", JSON.stringify(taskLists));
    }, [taskLists]);

    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify([...tasks]));
    }, [tasks]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowCongratsRain(false);
        }, [3500]);
        return () => clearTimeout(timeout);
    }, [showCongratsRain]);

    return (
        <div className={`App ${theme}`}>
            <Modal show={modalProps.show} setModalProps={setModalProps}>
                {modalProps.children}
            </Modal>
            <Router>
                <Header />
                <Switch>
                    <Route
                        path="/schedularizer"
                        render={() => (
                            <TaskLists
                                taskLists={taskLists}
                                setTaskLists={setTaskLists}
                                showModal={showModal}
                                setTasks={setTasks}
                                tasks={tasks}
                            />
                        )}
                        exact
                    />
                    <Route
                        path="/schedularizer/tasks/:id"
                        render={() => (
                            <>
                                <CongratsRain
                                    showCongratsRain={showCongratsRain}
                                />
                                <ToDoListAppContainer
                                    newTaskLocation={newTaskLocation}
                                    tasks={tasks}
                                    setTasks={setTasks}
                                    setShowCongratsRain={setShowCongratsRain}
                                    theme={theme}
                                />
                            </>
                        )}
                        exact
                    />
                    <Route
                        path="/schedularizer/about"
                        component={AboutUsSection}
                    />
                </Switch>
            </Router>
            <button
                className="customizeDialogueBoxOpenButton"
                onClick={() =>
                    showModal(
                        true,
                        <CustomizeModalContent
                            setTheme={setTheme}
                            setNewTaskLocation={setNewTaskLocation}
                            newTaskLocation={newTaskLocation}
                        />
                    )
                }
            >
                Customize
            </button>
        </div>
    );
}

export default App;
