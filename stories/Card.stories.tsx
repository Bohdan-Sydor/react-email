import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "../src/components/email/Card";
import { EmailPreview } from "./EmailPreview";
import { Tailwind } from "@react-email/tailwind";
import { Text } from "@react-email/components";

const meta: Meta<CardProps> = {
  title: "Email Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card container component that wraps content with rounded corners and padding.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story, context) => (
      <EmailPreview width={600}>
        <Tailwind>
          <Story {...context} />
        </Tailwind>
      </EmailPreview>
    ),
  ],
};

export default meta;
type Story = StoryObj<CardProps>;

const textStyle = {
  fontFamily: "Helvetica, Arial, sans-serif",
  fontSize: "18px",
  lineHeight: "1.5",
  color: "#333333",
  margin: "0 0 24px 0",
};

const headingStyle = {
  fontFamily: "Helvetica, Arial, sans-serif",
  fontSize: "32px",
  fontWeight: "bold" as const,
  color: "#1a1a1a",
  margin: "0 0 24px 0",
};

export const Default: Story = {
  render: () => (
    <Card>
      <Text style={headingStyle}>Welcome!</Text>
      <Text style={textStyle}>This is a simple card with minimal content.</Text>
    </Card>
  ),
};
