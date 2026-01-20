import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Preview,
  Link,
} from "@react-email/components";
import { Tailwind, Footer, Button, Card, Header } from "../components/email";

interface MembershipReactivationEmailProps {
  monthlyCharge?: string;
  nextBillingDate?: string;
  expertCount?: string;
  askQuestionUrl?: string;
  contactUrl?: string;
}

export const MembershipReactivationEmail = ({
  monthlyCharge = "$45",
  nextBillingDate = "01/02/2020",
  expertCount = "12,000",
  askQuestionUrl = "https://www.justanswer.com",
  contactUrl = "https://www.justanswer.com/help/contact-us",
}: MembershipReactivationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>You're all set! Your membership has been reactivated.</Preview>
      <Tailwind>
        <Body className="m-0 bg-gray-100 font-sans">
          <Container className="mx-auto max-w-xl">
            {/* Header */}
            <Section className="px-8 py-6">
              <Header logoAlt="Ask A Doctor Help - JustAnswer" />
            </Section>

            {/* Main Content Card */}
            <Section className="px-4 pb-8">
              <Card>
                <Heading className="m-0 mb-6 text-2xl font-bold text-gray-900">
                  You're all set!
                </Heading>

                <Text className="mb-6 text-base leading-relaxed text-gray-600">
                  Thank you for reactivating your membership. Your next monthly
                  charge of {monthlyCharge} will be on {nextBillingDate}. Feel
                  free to cancel anytime.
                </Text>

                <Text className="mb-8 text-base leading-relaxed text-gray-600">
                  You have access to our network of {expertCount} Experts as
                  part of your membership, so don't miss out on getting Expert
                  help from doctors, lawyers, mechanics and more!
                </Text>

                {/* CTA Button */}
                <Section className="mb-8">
                  <Button href={askQuestionUrl}>Ask a question</Button>
                </Section>

                {/* Need Help Section */}
                <Section>
                  <Text className="m-0 mb-1 text-base font-bold text-gray-900">
                    Need help?
                  </Text>
                  <Text className="m-0 text-base text-gray-600">
                    We're here 24/7. Please{" "}
                    <Link href={contactUrl} className="text-url">
                      contact us
                    </Link>{" "}
                    if you need assistance with anything else.
                  </Text>
                </Section>
              </Card>
            </Section>

            {/* Footer */}
            <Footer
              companyName="JustAnswer LLC"
              address="440 N Barranca Ave #7508, Covina, CA 91723"
              unsubscribeUrl="https://www.justanswer.com/account/emailpreferences"
              privacyPolicyUrl="https://www.justanswer.com/info/privacy-security"
              websiteUrl="https://www.justanswer.com"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MembershipReactivationEmail;
