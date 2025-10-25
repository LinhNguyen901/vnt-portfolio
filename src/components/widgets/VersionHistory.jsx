import React from "react";

const changelog = [
    {
        date: "2025-09-10",
        messages: ["Updated new cover letter"],
    },
    {
        date: "2025-04-05",
        messages: ["Updated new cover letter"],
    },
    {
        date: "2025-03-18",
        messages: ["Updated new cover letter"],
    },
    {
        date: "2025-03-16",
        messages: ["Added Version History session", "Fixed mobile menu display bug", "Improved navbar animation", "Changed avatar", "Changed information"],
    },
    {
        date: "2025-01-10",
        messages: ["Updated avatar", "Changed homepage banner"],
    },
    {
        date: "2024-12-18",
        messages: ["Launched portfolio version 1"],
    },
];

const VersionHistory = () => {
    return (
        <div className="container mt-4">
            <ul className="list-unstyled">
                {changelog.map((item, index) => (
                    <li
                        key={index}
                        className="p-3 rounded shadow-sm mb-3"
                        style={{
                            backgroundColor: "var(--theme-main-2)",
                            color: "var(--theme-white)",
                        }}
                    >
                        <strong>{item.date}</strong>
                        <ul className="mt-2">
                            {item.messages.map((msg, i) => (
                                <li key={i} className="ms-3">{msg}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VersionHistory;
