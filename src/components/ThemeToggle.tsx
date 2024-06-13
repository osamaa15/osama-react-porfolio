import { Affix, ActionIcon } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import React, { useState } from "react";

function ThemeToggle() {
  // Hooks
  const [toogle, setToogle] = useState(false);

  // Handle funtions
  function handleToggle() {
    setToogle(!toogle);
  }
  // Template
  return (
    <Affix position={{ top: 20, right: 10 }}>
      <ActionIcon
        variant="filled"
        bg={"#F08C00"}
        size={"xl"}
        radius={"xl"}
        onClick={handleToggle}
      >
        {toogle ? <IconSun size={24} /> : <IconMoon size={24} />}
      </ActionIcon>
    </Affix>
  );
}

export default ThemeToggle;
