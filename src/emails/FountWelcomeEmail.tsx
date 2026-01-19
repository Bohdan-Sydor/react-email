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
  Row,
  Column,
} from "@react-email/components";
import { Tailwind, Header, Footer, Button, Card } from "../components/email";

interface FountWelcomeEmailProps {
  userName?: string;
  planName?: string;
}

export const FountWelcomeEmail = ({
  userName = "Taylor",
  planName = "Wellness Plus",
}: FountWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to Fount! Your wellness journey starts now.</Preview>
      <Tailwind theme="fount">
        <Body className="m-0 bg-gray-100 font-sans">
          <Container className="mx-auto max-w-xl bg-white">
            {/* Header */}
            <Section className="px-8 py-6">
              <Header
                logoSrc="https://ww2-secure.justanswer.com/static/Touchpoint/Fount/Logos/fount%20logo%20black.png"
                logoAlt="Fount"
                logoWidth="150px"
              />
            </Section>

            <Hr className="m-0 border-gray-200" />

            {/* Main Content */}
            <Section className="px-8 py-10">
              <Heading className="m-0 mb-4 text-2xl font-bold text-gray-900">
                Welcome to Your Wellness Journey 🌿
              </Heading>

              <Text className="mb-6 text-base leading-relaxed text-gray-600">
                Hi {userName}, we're thrilled to have you join the Fount
                community! Your <strong>{planName}</strong> membership is now
                active.
              </Text>

              {/* Features */}
              <Card>
                <Text className="m-0 mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Your Benefits
                </Text>
                <Row>
                  <Column align="center" className="p-2">
                    <Text className="m-0 mb-1 text-2xl">🧘</Text>
                    <Text className="m-0 text-xs text-gray-700">
                      Guided Meditation
                    </Text>
                  </Column>
                  <Column align="center" className="p-2">
                    <Text className="m-0 mb-1 text-2xl">💚</Text>
                    <Text className="m-0 text-xs text-gray-700">
                      Health Tracking
                    </Text>
                  </Column>
                  <Column align="center" className="p-2">
                    <Text className="m-0 mb-1 text-2xl">🥗</Text>
                    <Text className="m-0 text-xs text-gray-700">
                      Nutrition Plans
                    </Text>
                  </Column>
                  <Column align="center" className="p-2">
                    <Text className="m-0 mb-1 text-2xl">👩‍⚕️</Text>
                    <Text className="m-0 text-xs text-gray-700">
                      Expert Coaching
                    </Text>
                  </Column>
                </Row>
              </Card>

              <Hr className="my-6 border-gray-200" />

              {/* Getting Started Steps */}
              <Heading className="m-0 mb-4 text-lg font-bold text-gray-900">
                Get Started in 3 Simple Steps
              </Heading>

              <Section className="mb-4">
                <Text className="m-0 text-sm text-gray-700">
                  <strong>1. Complete Your Profile</strong> — Tell us about your
                  wellness goals and preferences.
                </Text>
              </Section>

              <Section className="mb-4">
                <Text className="m-0 text-sm text-gray-700">
                  <strong>2. Take Your First Assessment</strong> — Our 5-minute
                  assessment creates your personalized plan.
                </Text>
              </Section>

              <Section className="mb-4">
                <Text className="m-0 text-sm text-gray-700">
                  <strong>3. Start Your Journey</strong> — Access your
                  personalized wellness dashboard.
                </Text>
              </Section>

              {/* CTA */}
              <Section className="mt-8 text-center">
                <Button href="https://example.com/fount/start">
                  Begin Your Wellness Journey
                </Button>
              </Section>

              <Text className="mt-6 text-center text-sm italic text-gray-500">
                "The journey of a thousand miles begins with a single step." —
                Lao Tzu
              </Text>
            </Section>

            {/* Footer */}
            <Footer
              variant="fount"
              companyName="Fount"
              copyrightYears="2024-2026"
              address="123 Wellness Way, Boulder, CO 80301"
              unsubscribeUrl="https://example.com/unsubscribe"
              privacyPolicyUrl="https://example.com/privacy"
              contactUrl="https://example.com/contact"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default FountWelcomeEmail;
