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
  Link,
} from "@react-email/components";
import { Tailwind, Header, Footer, Button, Card } from "../components/email";

interface PasswordResetEmailProps {
  userName?: string;
  resetUrl?: string;
  expiresIn?: string;
  ipAddress?: string;
  location?: string;
}

export const PasswordResetEmail = ({
  userName = "Alex",
  resetUrl = "https://example.com/reset-password?token=abc123",
  expiresIn = "1 hour",
  ipAddress = "192.168.1.***",
  location = "San Francisco, CA",
}: PasswordResetEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Reset your password - link expires in {expiresIn}</Preview>
      <Tailwind>
        <Body className="m-0 bg-gray-100 font-sans">
          <Container className="mx-auto max-w-xl bg-white">
            {/* Header */}
            <Section className="px-8 py-6">
              <Header
                logoSrc="https://ww2-secure.justanswer.com/static/Touchpoint/Fully_Branded_Javatar/Logo_JAvatar_www_askadoctor_help.png"
                logoAlt="JustAnswer"
                logoHeight="40px"
              />
            </Section>

            <Hr className="m-0 border-gray-200" />

            {/* Main Content */}
            <Section className="px-8 py-10">
              <Heading className="m-0 mb-4 text-2xl font-bold text-gray-900">
                Reset Your Password 🔐
              </Heading>

              <Text className="mb-6 text-base leading-relaxed text-gray-600">
                Hi {userName}, we received a request to reset your password. Click
                the button below to create a new one.
              </Text>

              {/* CTA Button */}
              <Section className="mb-8 text-center">
                <Button href={resetUrl}>Reset Password</Button>
              </Section>

              {/* Security Info Card */}
              <Card>
                <Text className="m-0 mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500">
                  Security Details
                </Text>

                <Text className="m-0 mb-1 text-sm text-gray-600">
                  <strong>Request from:</strong> {ipAddress}
                </Text>
                <Text className="m-0 mb-1 text-sm text-gray-600">
                  <strong>Location:</strong> {location}
                </Text>
                <Text className="m-0 text-sm text-gray-600">
                  <strong>Expires:</strong> {expiresIn}
                </Text>
              </Card>

              <Hr className="my-6 border-gray-200" />

              {/* Warning */}
              <Text className="m-0 text-sm leading-relaxed text-gray-600">
                ⚠️ If you didn't request this password reset, please ignore
                this email or{" "}
                <Link
                  href="https://example.com/support"
                  className="font-semibold text-url underline"
                >
                  contact support
                </Link>{" "}
                if you're concerned about your account security.
              </Text>

              <Text className="mt-6 text-center text-xs text-gray-400">
                This link will expire in {expiresIn}. After that, you'll need to
                request a new password reset.
              </Text>
            </Section>

            {/* Footer */}
            <Footer
              variant="fount"
              companyName="JustAnswer LLC"
              address="440 N Barranca Ave #7508, Covina, CA 91723"
              unsubscribeUrl="https://example.com/unsubscribe"
              privacyPolicyUrl="https://example.com/privacy"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;
