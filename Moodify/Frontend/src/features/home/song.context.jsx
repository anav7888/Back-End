import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {

    const [song, setSong] = useState({

        url: "https://ik.imagekit.io/Anav/cohort-2/moodify/songs/Boney_M._-_Rasputin__Sopot_Festival_1979__hx4rJmBeE.mp3",
        posterUrl: "https://ik.imagekit.io/Anav/cohort-2/moodify/posters/Boney_M._-_Rasputin__Sopot_Festival_1979__3rL72LAP1.jpeg",
        title: "Boney M. - Rasputin (Sopot Festival 1979)",
        mood: "happy",

    })

    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
            {children}
        </SongContext.Provider>
    )

}