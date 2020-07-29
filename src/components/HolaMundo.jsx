import React from "react";

const HolaMundo = () => {
    const Hello = "Hola Mundo";
    const isTrue = false;
    return (
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Esencial de React</h2>
            <img
                src="https://arepa.s3.amazonaws.com/react.png"
                alt="Logo de React"
            />
            {isTrue ? <h4>Es verdadero</h4> : <h3>Es falso</h3>}
            {isTrue && <h4>Soy Verdadero wuw</h4>}
        </div>
    );
};

export default HolaMundo;
