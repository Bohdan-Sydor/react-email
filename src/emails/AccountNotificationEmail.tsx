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

interface AccountNotificationEmailProps {
  userName?: string;
  title?: string;
  message?: string;
  actionLabel?: string;
  actionUrl?: string;
  details?: { label: string; value: string }[];
}

export const AccountNotificationEmail = ({
  userName = "Chris",
  title = "Your Subscription is Active!",
  message = "Great news! Your JustAnswer membership is now active. You have unlimited access to verified experts across all categories.",
  actionLabel = "Explore Your Benefits",
  actionUrl = "https://example.com/account",
  details = [
    { label: "Plan", value: "Premium Monthly" },
    { label: "Start Date", value: "January 19, 2026" },
    { label: "Next Billing", value: "February 19, 2026" },
    { label: "Amount", value: "$45.00/month" },
  ],
}: AccountNotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{title}</Preview>
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
                {title} 🎉
              </Heading>

              <Text className="mb-6 text-base leading-relaxed text-gray-600">
                Hi {userName}, {message}
              </Text>

              {/* Details Card */}
              {details.length > 0 && (
                <Card>
                  <Text className="m-0 mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Details
                  </Text>

                  {details.map((detail, index) => (
                    <Section key={index} className={index > 0 ? "mt-3" : ""}>
                      <Text className="m-0 text-sm text-gray-500">
                        {detail.label}
                      </Text>
                      <Text className="m-0 text-base font-semibold text-gray-900">
                        {detail.value}
                      </Text>
                    </Section>
                  ))}
                </Card>
              )}

              {/* What's Included */}
              <Section className="mt-6">
                <Text className="m-0 mb-3 font-semibold text-gray-900">
                  What's Included:
                </Text>
                <Text className="m-0 mb-2 text-sm text-gray-700">
                  ✅ Unlimited questions to verified experts
                </Text>
                <Text className="m-0 mb-2 text-sm text-gray-700">
                  ✅ Access to 12,000+ specialists across 700+ categories
                </Text>
                <Text className="m-0 mb-2 text-sm text-gray-700">
                  ✅ 24/7 support, day or night
                </Text>
                <Text className="m-0 text-sm text-gray-700">
                  ✅ Satisfaction guaranteed or your money back
                </Text>
              </Section>

              <Hr className="my-6 border-gray-200" />

              {/* CTA */}
              <Section className="text-center">
                <Button href={actionUrl}>{actionLabel}</Button>
              </Section>

              <Text className="mt-6 text-center text-sm text-gray-500">
                Questions? We're here to help 24/7.{" "}
                <Link href="https://example.com/support" className="text-url underline">
                  Contact Support
                </Link>
              </Text>
            </Section>

            {/* Footer */}
            <Footer
              companyName="JustAnswer LLC"
              address="440 N Barranca Ave #7508, Covina, CA 91723"
              unsubscribeUrl="https://example.com/unsubscribe"
              privacyPolicyUrl="https://example.com/privacy"
              websiteUrl="https://www.justanswer.com"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default AccountNotificationEmail;
