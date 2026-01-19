import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Preview,
  Hr,
} from "@react-email/components";
import { Tailwind } from "../components/email";
import { Header, Footer, Button } from "../components/email";

export const WelcomeEmail = () => {
  const userName = "John";
  const companyName = "Acme Inc";
  const ctaUrl = "https://example.com/get-started";

  return (
    <Html>
      <Head />
      <Preview>Welcome to {companyName}! Let's get you started.</Preview>
      <Tailwind>
        <Body className="m-0 bg-gray-100 font-sans">
          <Container className="mx-auto max-w-xl bg-white">
            {/* Header */}
            <Header
              logoSrc="https://via.placeholder.com/140x40/0284c7/ffffff?text=ACME"
              logoAlt={companyName}
              logoHeight="40px"
            />

            {/* Main Content */}
            <Section className="px-8 py-10">
              <Heading className="m-0 mb-4 text-2xl font-bold text-gray-900">
                Welcome, {userName}! 👋
              </Heading>

              <Text className="mb-6 text-base leading-relaxed text-gray-600">
                We're thrilled to have you on board. {companyName} helps you
                build and send beautiful emails that your customers will love.
              </Text>

              <Text className="mb-6 text-base leading-relaxed text-gray-600">
                Here are a few things you can do to get started:
              </Text>

              {/* Feature List */}
              <Section className="mb-6">
                <Text className="m-0 mb-2 text-base text-gray-700">
                  ✅ Set up your profile and preferences
                </Text>
                <Text className="m-0 mb-2 text-base text-gray-700">
                  ✅ Create your first email template
                </Text>
                <Text className="m-0 mb-2 text-base text-gray-700">
                  ✅ Connect your sending domain
                </Text>
                <Text className="m-0 text-base text-gray-700">
                  ✅ Send a test email to yourself
                </Text>
              </Section>

              <Hr className="my-6 border-gray-200" />

              {/* CTA Button */}
              <Section className="text-center">
                <Button href={ctaUrl}>
                  Get Started Now
                </Button>
              </Section>

              <Text className="mt-6 text-center text-sm text-gray-500">
                Need help? Just reply to this email — we're here to assist!
              </Text>
            </Section>

            {/* Footer */}
            <Footer
              companyName={companyName}
              address="123 Main Street, San Francisco, CA 94102"
              unsubscribeUrl="https://example.com/unsubscribe"
              privacyPolicyUrl="https://example.com/privacy"
              websiteUrl="https://example.com"
              appStoreUrl="https://apps.apple.com/app/justanswer"
              googlePlayUrl="https://play.google.com/store/apps/details?id=com.justanswer.mobile"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeEmail;
