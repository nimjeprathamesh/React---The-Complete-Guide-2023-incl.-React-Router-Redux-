import React from "react";
import '../Home_Page/AboutUs/AboutUs.css';

export default function Input({textarea, ...prop}) {
    return (
        <>
            {textarea ? (
                <textarea {...prop} required />
            ) : (
                <input className="field" {...prop} required />
            )}
        </>
    );
};