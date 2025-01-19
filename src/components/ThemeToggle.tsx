import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

function ThemeToggle({ size }: { size?: string }) {
  // Hooks
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  // Handle functions
  function handleThemeToggle() {
    setColorScheme(computedColorScheme === "light" ? "dark" : "light");
  }

  // Template
  return (
    <ActionIcon
      variant="filled"
      bg={"#F08C00"}
      size={size ?? 'xl'}
      radius={"xl"}
      onClick={handleThemeToggle}
    >
      {computedColorScheme === "dark" ? (
        <IconSun size={24} />
      ) : (
        <IconMoon size={24} />
      )}
    </ActionIcon>
  );
}

export default ThemeToggle;
