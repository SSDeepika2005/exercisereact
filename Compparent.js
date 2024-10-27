import React from 'react';
import Homepage2 from './Homepage2';

const Compparent = () => {
    const data = "PROPS";

    return (
        <>
            <div>
                <h1>PROPS</h1>
            </div>
            <Homepage2 value={data} />
        </>
    );
};

export default Compparent;
