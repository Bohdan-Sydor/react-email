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
          "A footer component with logo, copyright, links, and app store badges for email campaigns.",
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
    websiteUrl: {
      control: "text",
      description: "URL for the main website link",
    },
    appStoreUrl: {
      control: "text",
      description: "URL for App Store download",
    },
    googlePlayUrl: {
      control: "text",
      description: "URL for Google Play download",
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
  args: {},
};

export const CustomCompany: Story = {
  args: {
    companyName: "Your Company Inc",
    copyrightYears: "2020-2026",
    address: "123 Main Street, New York, NY 10001",
    websiteUrl: "https://www.example.com",
  },
};

export const WithCustomLinks: Story = {
  args: {
    unsubscribeUrl: "https://www.justanswer.com/unsubscribe",
    privacyPolicyUrl: "https://www.justanswer.com/privacy",
    appStoreUrl: "https://apps.apple.com/app/justanswer",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.justanswer.mobile",
  },
};
