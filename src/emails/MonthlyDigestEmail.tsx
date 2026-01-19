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
  Img,
  Link,
} from "@react-email/components";
import { Tailwind, Header, Footer, Button, Card } from "../components/email";

interface TopicItem {
  title: string;
  description: string;
  icon: string;
  url: string;
}

interface MonthlyDigestEmailProps {
  userName?: string;
  month?: string;
  questionsAnswered?: number;
  topExperts?: number;
  satisfactionRate?: string;
  trendingTopics?: TopicItem[];
}

export const MonthlyDigestEmail = ({
  userName = "Jordan",
  month = "January 2026",
  questionsAnswered = 125847,
  topExperts = 2340,
  satisfactionRate = "98%",
  trendingTopics = [
    {
      title: "Tax Season Tips",
      description:
        "Get expert advice on filing your 2025 taxes and maximizing your refund.",
      icon: "💰",
      url: "https://example.com/topics/tax",
    },
    {
      title: "Winter Health Guide",
      description:
        "Stay healthy this season with tips from our medical experts.",
      icon: "❄️",
      url: "https://example.com/topics/health",
    },
    {
      title: "Tech Troubleshooting",
      description:
        "Solve common tech problems with step-by-step expert guidance.",
      icon: "💻",
      url: "https://example.com/topics/tech",
    },
  ],
}: MonthlyDigestEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Your {month} digest - See what's trending on JustAnswer</Preview>
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
              <Heading className="m-0 mb-2 text-2xl font-bold text-gray-900">
                Your Monthly Digest 📬
              </Heading>
              <Text className="mb-6 text-sm text-gray-500">{month}</Text>

              <Text className="mb-6 text-base leading-relaxed text-gray-600">
                Hi {userName}, here's what happened in the JustAnswer community
                this month!
              </Text>

              {/* Stats Card */}
              <Card>
                <Row>
                  <Column align="center" className="px-2">
                    <Text className="m-0 text-2xl font-bold text-gray-900">
                      {questionsAnswered.toLocaleString()}
                    </Text>
                    <Text className="m-0 text-xs text-gray-500">
                      Questions Answered
                    </Text>
                  </Column>
                  <Column align="center" className="px-2">
                    <Text className="m-0 text-2xl font-bold text-gray-900">
                      {topExperts.toLocaleString()}
                    </Text>
                    <Text className="m-0 text-xs text-gray-500">
                      Active Experts
                    </Text>
                  </Column>
                  <Column align="center" className="px-2">
                    <Text className="m-0 text-2xl font-bold text-gray-900">
                      {satisfactionRate}
                    </Text>
                    <Text className="m-0 text-xs text-gray-500">
                      Satisfaction
                    </Text>
                  </Column>
                </Row>
              </Card>

              <Hr className="my-6 border-gray-200" />

              {/* Trending Topics */}
              <Heading className="m-0 mb-4 text-lg font-bold text-gray-900">
                🔥 Trending This Month
              </Heading>

              {trendingTopics.map((topic, index) => (
                <Section key={index} className="mb-4">
                  <Row>
                    <Column style={{ width: "40px", verticalAlign: "top" }}>
                      <Text className="m-0 text-2xl">{topic.icon}</Text>
                    </Column>
                    <Column style={{ verticalAlign: "top" }}>
                      <Link
                        href={topic.url}
                        className="text-base font-semibold text-gray-900 no-underline"
                      >
                        {topic.title}
                      </Link>
                      <Text className="m-0 mt-1 text-sm text-gray-600">
                        {topic.description}
                      </Text>
                    </Column>
                  </Row>
                </Section>
              ))}

              <Hr className="my-6 border-gray-200" />

              {/* Featured Expert */}
              <Heading className="m-0 mb-4 text-lg font-bold text-gray-900">
                ⭐ Featured Expert of the Month
              </Heading>

              <Card>
                <Row>
                  <Column style={{ width: "80px", verticalAlign: "top" }}>
                    <Img
                      src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face"
                      alt="Dr. James Wilson"
                      width="64"
                      height="64"
                      style={{
                        borderRadius: "50%",
                        border: "3px solid #139BC9",
                      }}
                    />
                  </Column>
                  <Column style={{ verticalAlign: "top", paddingLeft: "12px" }}>
                    <Text className="m-0 text-base font-bold text-gray-900">
                      Dr. James Wilson
                    </Text>
                    <Text className="m-0 text-sm text-gray-500">
                      Family Medicine Specialist
                    </Text>
                    <Text className="m-0 mt-2 text-sm text-gray-600">
                      "Helping patients understand their health is my
                      passion. Every question matters."
                    </Text>
                    <Text className="m-0 mt-2 text-xs text-gray-500">
                      🏆 4,892 questions answered • 99.2% satisfaction
                    </Text>
                  </Column>
                </Row>
              </Card>

              {/* CTA */}
              <Section className="mt-8 text-center">
                <Button href="https://example.com/ask">
                  Ask an Expert Now
                </Button>
              </Section>
            </Section>

            {/* Footer */}
            <Footer
              companyName="JustAnswer LLC"
              address="440 N Barranca Ave #7508, Covina, CA 91723"
              unsubscribeUrl="https://example.com/unsubscribe"
              privacyPolicyUrl="https://example.com/privacy"
              websiteUrl="https://www.justanswer.com"
              appStoreUrl="https://apps.apple.com/app/justanswer"
              googlePlayUrl="https://play.google.com/store/apps/details?id=com.justanswer.mobile"
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MonthlyDigestEmail;
