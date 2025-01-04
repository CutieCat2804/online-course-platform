import Header from "@/components/Header";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "Example/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {};
