import React from "react";
import { currentTheme } from "../../themes";
export default function Btn() {

    const stl = {
        color: currentTheme.txt,
        backgroundColor: currentTheme.bg,


    }
    return <button style={stl}>ASD</button>
}