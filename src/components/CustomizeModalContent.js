import React from "react";
import themeColors from "../themeColours.js";

const newTasksLocations = ["before", "after"];

function CustomizeModalContent({
    setTheme,
    setNewTaskLocation,
    newTaskLocation,
}) {
    return (
        <>
            <div className="themeColorCustomize">
                <div className="customizeLabel themeColorCustomizeLabel">
                    Theme Colour
                </div>
                <div className="themeColorCustomiseColors">
                    {themeColors.map(({ lightHex, darkHex, name }) => (
                        <div
                            className="customizeColorName"
                            style={{ backgroundColor: name }}
                            onClick={(e) => {
                                setTheme(e.currentTarget.textContent);
                            }}
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>
            <div className="setNewTaskLocation">
                <div className="customizeLabel setNewTaskLocationLabel">
                    New Task Location
                </div>
                <div className="newTaskLocationsSelect">
                    {newTasksLocations.map((taskLocation, index) => (
                        <div
                            className="newTaskLocationSelectOption"
                            key={index}
                            style={
                                newTaskLocation === taskLocation
                                    ? { fontWeight: "bold" }
                                    : {}
                            }
                            onClick={() => setNewTaskLocation(taskLocation)}
                        >
                            {taskLocation}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default CustomizeModalContent;
