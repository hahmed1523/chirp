import React from "react";

export const renderErrors = (props) => {
    if (props.errors.length > 0){
        return (
            <ul className="errors">
                {props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }
}