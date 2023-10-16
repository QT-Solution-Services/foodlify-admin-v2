import React, { useState } from "react";
import { useTheme } from "next-themes";

import Switch from "@mui/material/Switch";

function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const currentState = theme === "light" ? false : true;
  const [checked, setChecked] = useState(currentState);

  function handleChange(e: any) {
    setChecked(e.target.checked);
  }
  return (
    <>
      {/* <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme}
      </button> */}
      <Switch
        checked={checked}
        onChange={handleChange}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        inputProps={{ "aria-label": "controlled" }}
      />
    </>
  );
}

export default ThemeToggler;
