import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../src/components/email/Header";
import { Card } from "../src/components/email/Card";
import { Button } from "../src/components/email/Button";
import { Footer } from "../src/components/email/Footer";
import { EmailPreview } from "./EmailPreview";
import { Section, Text, Link } from "@react-email/components";

interface MembershipReactivationEmailProps {
  userName?: string;
  monthlyCharge?: string;
  nextChargeDate?: string;
  expertCount?: string;
  askQuestionUrl?: string;
  contactUrl?: string;
}

const MembershipReactivationEmail = ({
  monthlyCharge = "$45",
  nextChargeDate = "01/02/2020",
  expertCount = "12,000",
  askQuestionUrl = "https://www.justanswer.com/ask",
  contactUrl = "https://www.justanswer.com/contact",
}: MembershipReactivationEmailProps) => {
  const textStyle = {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "18px",
    lineHeight: "28px",
    color: "#333333",
    margin: "0 0 20px 0",
  };

  const headingStyle = {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "32px",
    fontWeight: "bold" as const,
    color: "#333333",
    margin: "0 0 24px 0",
  };

  const highlightStyle = {
    backgroundColor: "#FFF3B0",
    padding: "0 4px",
  };

  const subheadingStyle = {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "18px",
    fontWeight: "bold" as const,
    color: "#333333",
    margin: "32px 0 8px 0",
  };

  const linkStyle = {
    color: "#00B4D8",
    textDecoration: "none",
  };

  return (
    <Section style={{ backgroundColor: "#f5f5f5" }}>
      {/* Header */}
      <Section style={{ padding: "24px 20px" }}>
        <Header />
      </Section>

      {/* Main Content Card */}
      <Section style={{ padding: "0 20px" }}>
        <Card>
          <Text style={headingStyle}>
            <span style={highlightStyle}>You're</span> all set!
          </Text>

          <Text style={textStyle}>
            Thank you for reactivating your membership. Your next monthly
            charge of {monthlyCharge} will be on {nextChargeDate}. Feel free to cancel anytime.
          </Text>

          <Text style={textStyle}>
            You have access to our network of {expertCount} Experts as part of your
            membership, so don't miss out on getting Expert help from
            doctors, lawyers, mechanics and more!
          </Text>

          <Section style={{ marginTop: "24px", marginBottom: "16px" }}>
            <Button href={askQuestionUrl}>Ask a question</Button>
          </Section>

          <Text style={subheadingStyle}>Need help?</Text>
          <Text style={{ ...textStyle, margin: "0" }}>
            We're here 24/7. Please{" "}
            <Link href={contactUrl} style={linkStyle}>
              contact us
            </Link>{" "}
            if you need assistance with anything else.
          </Text>
        </Card>
      </Section>

      {/* Footer */}
      <Section style={{ marginTop: "32px" }}>
        <Footer />
      </Section>
    </Section>
  );
};

const meta: Meta<MembershipReactivationEmailProps> = {
  title: "Email Templates/Membership Reactivation",
  component: MembershipReactivationEmail,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A complete email template for membership reactivation confirmation. Uses Header, Card, Button, and Footer components.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    monthlyCharge: {
      control: "text",
      description: "The monthly membership charge amount",
    },
    nextChargeDate: {
      control: "text",
      description: "The date of the next charge",
    },
    expertCount: {
      control: "text",
      description: "Number of experts available",
    },
    askQuestionUrl: {
      control: "text",
      description: "URL for the ask a question button",
    },
    contactUrl: {
      control: "text",
      description: "URL for the contact us link",
    },
  },
  decorators: [
    (Story, context) => (
      <EmailPreview width={600}>
        <Story {...context} />
      </EmailPreview>
    ),
  ],
};

export default meta;
type Story = StoryObj<MembershipReactivationEmailProps>;

export const Default: Story = {
  args: {
    monthlyCharge: "$45",
    nextChargeDate: "01/02/2020",
    expertCount: "12,000",
    askQuestionUrl: "https://www.justanswer.com/ask",
    contactUrl: "https://www.justanswer.com/contact",
  },
};

export const CustomCharge: Story = {
  args: {
    monthlyCharge: "$29",
    nextChargeDate: "02/15/2026",
    expertCount: "15,000",
    askQuestionUrl: "https://www.justanswer.com/ask",
    contactUrl: "https://www.justanswer.com/contact",
  },
};
