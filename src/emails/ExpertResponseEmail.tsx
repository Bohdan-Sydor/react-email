import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Preview,
  Img,
  Row,
  Column,
  Link,
} from "@react-email/components";
import { Tailwind, NewWrapper, Button, Card } from "../components/email";

interface ExpertResponseEmailProps {
  customerName?: string;
  expertName?: string;
  expertTitle?: string;
  expertAvatar?: string;
  questionPreview?: string;
  responsePreview?: string;
  responseUrl?: string;
  category?: string;
}

export const ExpertResponseEmail = ({
  customerName = "Michael",
  expertName = "Dr. Sarah Chen",
  expertTitle = "Board Certified Physician",
  expertAvatar = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
  questionPreview = "I've been experiencing recurring headaches for the past week, usually in the afternoon...",
  responsePreview = "Thank you for reaching out. Based on your description, there are several potential factors we should consider. Afternoon headaches can often be related to...",
  responseUrl = "https://example.com/conversation/12345",
  category = "Medical",
}: ExpertResponseEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        {expertName} has responded to your {category.toLowerCase()} question
      </Preview>
      <Tailwind>
        <Body className="m-0 bg-[#F1F8FA] py-6 font-sans">
          <Container className="mx-auto max-w-[658px] bg-white">
            <NewWrapper showAnimatedBanner={true}>
              <Section className="px-8 py-6">
                {/* Main Heading */}
                <Heading className="m-0 mb-2 text-2xl font-bold text-gray-900">
                  You Have a New Response! 💬
                </Heading>

                <Text className="mb-8 text-base text-gray-600">
                  Hi {customerName}, an expert has answered your question.
                </Text>

                {/* Expert Info Card */}
                <Card>
                  <Row>
                    <Column style={{ width: "80px", verticalAlign: "top" }}>
                      <Img
                        src={expertAvatar}
                        alt={expertName}
                        width="64"
                        height="64"
                        style={{
                          borderRadius: "50%",
                          border: "3px solid #139BC9",
                        }}
                      />
                    </Column>
                    <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
                      <Text className="m-0 text-lg font-bold text-gray-900">
                        {expertName}
                      </Text>
                      <Text className="m-0 mb-2 text-sm text-gray-500">
                        {expertTitle}
                      </Text>
                      <Text className="m-0 text-xs font-semibold text-cyan-700">
                        ✓ Verified Expert
                      </Text>
                    </Column>
                  </Row>
                </Card>

                {/* Your Question */}
                <Section className="mt-6">
                  <Text className="m-0 mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Your Question
                  </Text>
                  <Text className="m-0 text-sm italic text-gray-600">
                    "{questionPreview}"
                  </Text>
                </Section>

                {/* Expert Response Preview */}
                <Section className="mt-6">
                  <Text className="m-0 mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    Expert Response
                  </Text>
                  <Text className="m-0 text-sm text-gray-700">
                    {responsePreview}
                  </Text>
                  <Link
                    href={responseUrl}
                    className="mt-2 inline-block text-sm font-semibold text-url"
                  >
                    Read full response →
                  </Link>
                </Section>

                {/* CTA */}
                <Section className="mt-8 text-center">
                  <Button href={responseUrl}>View Full Conversation</Button>
                </Section>

                <Text className="mt-6 text-center text-sm text-gray-500">
                  Have follow-up questions? Reply directly in the conversation.
                </Text>
              </Section>
            </NewWrapper>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ExpertResponseEmail;
