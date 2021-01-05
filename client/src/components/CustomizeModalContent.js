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
                    <div className="proColorsLabel">Pro Colors</div>
                    <div className="proColorsCustomize">
                        {themeColors.proColors.map(({ name }, index) => (
                            <div
                                className="customizeColorName"
                                style={{
                                    backgroundColor: `${
                                        name === "dark-pro"
                                            ? "#282828"
                                            : "#fefefe"
                                    }`,
                                    color:
                                        name === "dark-pro"
                                            ? "#fff"
                                            : "#282828",
                                }}
                                onClick={(e) => {
                                    if (name === "dark-pro") {
                                        document
                                            .querySelectorAll(
                                                ".customizeColorName"
                                            )
                                            .forEach(
                                                (colorContainer) =>
                                                    (colorContainer.style.fontWeight =
                                                        "500")
                                            );
                                        e.currentTarget.style.fontWeight =
                                            "700";
                                        setTheme(name);
                                    }
                                }}
                                key={index}
                            >
                                {name.replace("-", " ")}
                            </div>
                        ))}
                    </div>
                    <div className="primaryColorsLabel">Primary Colors</div>
                    <div className="primaryColorsCustomize">
                        {themeColors.primaryColors.map(({ name }, index) => (
                            <div
                                className="customizeColorName"
                                style={{ backgroundColor: name }}
                                onClick={(e) => {
                                    document
                                        .querySelectorAll(".customizeColorName")
                                        .forEach(
                                            (colorContainer) =>
                                                (colorContainer.style.fontWeight =
                                                    "500")
                                        );
                                    e.currentTarget.style.fontWeight = "700";
                                    setTheme(e.currentTarget.textContent);
                                }}
                                key={index}
                            >
                                {name}
                            </div>
                        ))}
                    </div>
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
