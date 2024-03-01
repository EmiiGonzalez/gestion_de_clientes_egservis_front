import { useState } from "react"

export const HandleDarkTheme = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    const setLocalStorage = () => {
        try {
            localStorage.setItem("theme", theme);
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
        setLocalStorage()
    }

    return {theme, handleTheme}
}