import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Header, HeaderProps } from "../src/components/email/Header";
import { EmailPreview } from "./EmailPreview";
import { Section } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const meta: Meta<HeaderProps> = {
  title: "Email Components/Header",
  component: Header,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A header component with a logo image for email campaigns.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    logoSrc: {
      control: "text",
      description: "The URL of the logo image",
    },
    logoAlt: {
      control: "text",
      description: "Alt text for the logo image",
    },
    logoHeight: {
      control: "text",
      description: "Height of the logo image",
    },
  },
  decorators: [
    (Story, context) => (
      <EmailPreview width={400}>
        <Tailwind>
          <Section className="p-8">
            <Story {...context} />
          </Section>
        </Tailwind>
      </EmailPreview>
    ),
  ],
};

export default meta;
type Story = StoryObj<HeaderProps>;

export const Default: Story = {
  args: {},
};

export const CustomLogo: Story = {
  args: {
    logoSrc: "https://ww2-secure.justanswer.com/static/Touchpoint/Fully_Branded_Javatar/Logo_JAvatar_www_askadoctor_help.png",
    logoAlt: "JustAnswer Logo",
  },
};

export const Fount: Story = {
  args: {
    logoSrc: "https://ww2-secure.justanswer.com/static/Touchpoint/Fount/Logos/fount%20logo%20black.png",
    logoAlt: "Fount Logo",
    logoHeight: "31px",
  },
};
