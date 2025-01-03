import { createSystem, defaultConfig } from "@chakra-ui/react";

const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: { value: "#4A90E2" },
        secondary: { value: "#95A5A6" },
        background: { value: "#F4F4F4" },
        accent: { value: "#50E3C2" },
        border: { value: "#4A90E2" },
        "text-primary": { value: "#2C3E50" },
        "text-secondary": { value: "#7F8C8D" },
        "icon-inverse": { value: "#F4F4F4" },
        header: { value: "#2C75A6" },
      },
    },
    recipes: {
      button: {
        variants: {
          size: {
            header: {
              h: "11",
              minW: "11",
              textStyle: "md",
              px: "5",
              gap: "3",
              _icon: {
                width: "7",
                height: "7",
              },
            },
          },
          variant: {
            header: {
              color: "icon-inverse",
              _hover: {
                outline: "2px solid",
                outlineColor: "colorPalette.muted",
              },
              _focusWithin: {
                outline: "2px solid",
                outlineColor: "colorPalette.muted",
              },
            },
          },
        },
      },
      input: {
        variants: {
          variant: {
            inverse: {
              borderRadius: "20px",
              _focus: { outline: "3px solid {colors.accent}" },
            },
          },
        },
      },
    },
  },
});

export default system;
