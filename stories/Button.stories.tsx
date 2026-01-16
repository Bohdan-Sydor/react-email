import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "../src/components/email/Button";
import { EmailPreview } from "./EmailPreview";
import { Section } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const meta: Meta<ButtonProps> = {
  title: "Email Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A CTA button component for email campaigns.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "The URL the button links to",
    },
    fullWidth: {
      control: "boolean",
      description: "Whether the button should span full width",
    },
    children: {
      control: "text",
      description: "Button label text",
    },
  },
  decorators: [
    (Story, context) => (
      <EmailPreview width={400}>
        <Tailwind>
          <Section className="p-8 text-center">
            <Story {...context} />
          </Section>
        </Tailwind>
      </EmailPreview>
    ),
  ],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    href: "https://example.com",
    children: "Get Started",
  },
};

export const FullWidth: Story = {
  args: {
    href: "https://example.com",
    children: "Full Width Button",
    fullWidth: true,
  },
};
