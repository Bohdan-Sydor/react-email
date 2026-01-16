import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "../src/components/email/Card";
import { Button } from "../src/components/email/Button";
import { EmailPreview } from "./EmailPreview";
import { Tailwind } from "@react-email/tailwind";
import { Text, Link } from "@react-email/components";

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
      <Text style={headingStyle}>You're all set!</Text>
      <Text style={textStyle}>
        Thank you for reactivating your membership. Your next monthly charge of
        $45 will be on 01/02/2020. Feel free to cancel anytime.
      </Text>
      <Text style={textStyle}>
        You have access to our network of 12,000 Experts as part of your
        membership, so don't miss out on getting Expert help from doctors,
        lawyers, mechanics and more!
      </Text>
      <div style={{ marginBottom: "32px" }}>
        <Button href="https://example.com/ask">Ask a question</Button>
      </div>
      <Text style={{ ...textStyle, fontWeight: "bold", marginBottom: "4px" }}>
        Need help?
      </Text>
      <Text style={{ ...textStyle, margin: 0 }}>
        We're here 24/7. Please{" "}
        <Link href="#" style={{ color: "#00B4D8", textDecoration: "none" }}>
          contact us
        </Link>{" "}
        if you need assistance with anything else.
      </Text>
    </Card>
  ),
};

export const Simple: Story = {
  render: () => (
    <Card>
      <Text style={headingStyle}>Welcome!</Text>
      <Text style={textStyle}>This is a simple card with minimal content.</Text>
    </Card>
  ),
};
