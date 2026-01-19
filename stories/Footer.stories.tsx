import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Footer, FooterProps } from "../src/components/email/Footer";
import { EmailPreview } from "./EmailPreview";
import { Tailwind } from "@react-email/tailwind";

const meta: Meta<FooterProps> = {
  title: "Email Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A footer component with logo, copyright, links, and app store badges for email campaigns. Supports 'default' and 'fount' variants.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "fount"],
      description: "Footer variant style",
    },
    logoSrc: {
      control: "text",
      description: "The URL of the logo image (default variant only)",
    },
    logoAlt: {
      control: "text",
      description: "Alt text for the logo image (default variant only)",
    },
    companyName: {
      control: "text",
      description: "Company name for copyright notice",
    },
    copyrightYears: {
      control: "text",
      description: "Year range for copyright (e.g., '2003-2026')",
    },
    address: {
      control: "text",
      description: "Company address",
    },
    unsubscribeUrl: {
      control: "text",
      description: "URL for unsubscribe link",
    },
    privacyPolicyUrl: {
      control: "text",
      description: "URL for privacy policy link",
    },
    contactUrl: {
      control: "text",
      description: "URL for contact us link (fount variant only)",
    },
    websiteUrl: {
      control: "text",
      description: "URL for the main website link (default variant only)",
    },
    appStoreUrl: {
      control: "text",
      description: "URL for App Store download (default variant only)",
    },
    googlePlayUrl: {
      control: "text",
      description: "URL for Google Play download (default variant only)",
    },
  },
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
type Story = StoryObj<FooterProps>;

export const Default: Story = {
  args: {
    variant: "default",
  },
};

export const Fount: Story = {
  args: {
    variant: "fount",
  },
};

