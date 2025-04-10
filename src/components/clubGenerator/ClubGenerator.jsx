import { useState } from "react";

function ClubGenerator() {
    // custom bag (setClubs) not implemented yet
    const [clubs, setClubs] = useState([
        "Driver",
        "3 Wood",
        "5 Wood",
        "6 Iron",
        "7 Iron",
        "8 Iron",
        "9 Iron",
        "Pitching Wedge",
        "Gap Wedge",
        "Sand Wedge",
        "Lob Wedge"
    ]);

    const [currentClub, setCurrentClub] = useState(clubs[0]);

    function setRandomClub() {
        const clubNr = Math.floor(Math.random() * clubs.length);
        // Prevent same club again
        if (clubs[clubNr] == currentClub) {
            setRandomClub();
            return;
        }
        setCurrentClub(clubs[clubNr]);
    };

    return (
        <div>
            <h2>{currentClub}</h2>
            <button onClick={setRandomClub}>New Club</button>
        </div>
    );
};

export default ClubGenerator;