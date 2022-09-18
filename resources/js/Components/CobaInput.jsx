import { useState } from "react";

const CobaInput = (data) => {
    const [coba, setCoba] = useState("");
    return (
        <div>
            <label htmlFor="">Masukan Text</label>
            <input
                onChange={(coba) => setCoba(coba.target.value)}
                type="text"
            />
        </div>
    );
};

export default CobaInput;
