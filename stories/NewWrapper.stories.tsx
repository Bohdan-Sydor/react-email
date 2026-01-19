import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { NewWrapper, NewWrapperProps } from "../src/components/email/NewWrapper";
import { EmailPreview } from "./EmailPreview";
import { Section, Text, Link, Hr } from "@react-email/components";
import { Button } from "../src/components/email/Button";

// Sample content component for demonstration
const SampleContent = () => (
  <Section style={{ padding: "40px 64px 40px", backgroundColor: "#ffffff" }}>
    <Text
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: "28px",
        color: "#333333",
        margin: "0 0 24px 0",
      }}
    >
      Your answer is on the way
    </Text>

    <Text
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#333333",
        margin: "0 0 24px 0",
      }}
    >
      Tech Specialists are currently reviewing{" "}
      <Link
        href="#"
        style={{
          color: "#52BAD5",
          textDecoration: "none",
        }}
      >
        your iPhone question.
      </Link>{" "}
      You'll be notified via email or SMS when an Expert is ready to assist you.
      Click below to verify that your contact information is accurate for prompt
      communication.
    </Text>

    <Section style={{ marginBottom: "24px" }}>
      <Button href="#" backgroundColor="#E85C41">
        Verify Contact Info
      </Button>
    </Section>

    <Hr
      style={{
        border: "none",
        height: "1px",
        backgroundColor: "#333333",
        opacity: 0.2,
        margin: "24px 0",
      }}
    />

    <Text
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px",
        color: "#333333",
        margin: "0 0 8px 0",
      }}
    >
      Need help?
    </Text>

    <Text
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#333333",
        margin: 0,
      }}
    >
      We're here 24/7. Please{" "}
      <Link
        href="#"
        style={{
          color: "#52BAD5",
          textDecoration: "none",
        }}
      >
        contact us
      </Link>{" "}
      if you need assistance with anything else.
    </Text>
  </Section>
);

// Minimal content example
const MinimalContent = () => (
  <Section style={{ padding: "40px 64px", backgroundColor: "#ffffff" }}>
    <Text
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "24px",
        fontWeight: "bold",
        lineHeight: "28px",
        color: "#333333",
        margin: "0 0 24px 0",
        textAlign: "center",
      }}
    >
      Thank you for your question!
    </Text>
    <Text
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        lineHeight: "24px",
        color: "#666666",
        margin: 0,
        textAlign: "center",
      }}
    >
      An expert will respond shortly.
    </Text>
  </Section>
);

const meta: Meta<NewWrapperProps> = {
  title: "Email Components/NewWrapper",
  component: NewWrapper,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A wrapper component that provides the JustAnswer email template structure with header, animated banner, footer with quick links, and expert quality card. Children are rendered in the middle section.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logoUrl: {
      control: "text",
      description: "URL for the header logo",
    },
    logoAlt: {
      control: "text",
      description: "Alt text for the logo",
    },
    showAnimatedBanner: {
      control: "boolean",
      description: "Whether to show the animated banner below the header",
    },
    heroImageSrc: {
      control: "text",
      description: "Optional hero image URL",
    },
    heroImageWidth: {
      control: "text",
      description: "Width of the hero image in pixels",
    },
  },
  decorators: [
    (Story) => (
      <EmailPreview width={660} subject="Your answer is on the way">
        <Story />
      </EmailPreview>
    ),
  ],
};

export default meta;
type Story = StoryObj<NewWrapperProps>;

export const Default: Story = {
  args: {
    showAnimatedBanner: true,
    children: <SampleContent />,
  },
};

export const WithHeroImage: Story = {
  args: {
    showAnimatedBanner: true,
    heroImageSrc:
      "https://ww2.justanswer.com//static/Touchpoint/notrial-tnt-depositreceipt/Tech-Welcome-Deposit-Email-Hero-desktop.png",
    heroImageWidth: "658",
    children: <SampleContent />,
  },
};

export const WithoutAnimatedBanner: Story = {
  args: {
    showAnimatedBanner: false,
    children: <SampleContent />,
  },
};

export const CustomLogo: Story = {
  args: {
    logoUrl:
      "https://ww2-secure.justanswer.com/static/Touchpoint/Fount/Logos/fount%20logo%20black.png",
    logoAlt: "Fount",
    showAnimatedBanner: true,
    children: <SampleContent />,
  },
};

export const MinimalExample: Story = {
  args: {
    showAnimatedBanner: true,
    children: <MinimalContent />,
  },
};
