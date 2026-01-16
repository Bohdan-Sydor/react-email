import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Link,
  Img,
  Row,
  Column,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import {
  DualLogoHeader,
  ContentCard,
  Button,
  AppStoreBadges,
} from "../components/email";

// Logo URLs - replace with your CDN-hosted assets in production
// Using placehold.co for demo - replace with actual logo URLs
const ASK_A_DOCTOR_LOGO =
  "https://placehold.co/150x50/ffffff/d4a847?text=ASK+A+DOCTOR&font=arial";
const JUSTANSWER_LOGO =
  "https://placehold.co/140x45/5bc0de/ffffff?text=JustAnswer&font=arial";
const JUSTANSWER_FOOTER_LOGO =
  "https://placehold.co/130x40/5bc0de/ffffff?text=JustAnswer&font=arial";

export interface MembershipReactivationProps {
  memberName?: string;
  nextChargeAmount?: string;
  nextChargeDate?: string;
  expertsCount?: string;
  askQuestionUrl?: string;
  contactUrl?: string;
  unsubscribeUrl?: string;
  privacyUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
  primaryLogoUrl?: string;
  secondaryLogoUrl?: string;
  footerLogoUrl?: string;
}

export const MembershipReactivation = ({
  memberName = "Member",
  nextChargeAmount = "$45",
  nextChargeDate = "01/02/2020",
  expertsCount = "12,000",
  askQuestionUrl = "https://justanswer.com/ask",
  contactUrl = "https://justanswer.com/contact",
  unsubscribeUrl = "https://justanswer.com/unsubscribe",
  privacyUrl = "https://justanswer.com/privacy",
  appStoreUrl = "https://apps.apple.com/app/justanswer",
  playStoreUrl = "https://play.google.com/store/apps/justanswer",
  primaryLogoUrl = ASK_A_DOCTOR_LOGO,
  secondaryLogoUrl = JUSTANSWER_LOGO,
  footerLogoUrl = JUSTANSWER_FOOTER_LOGO,
}: MembershipReactivationProps) => {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      </Head>
      <Tailwind>
        <Body
          style={{
            backgroundColor: "#f0f0f0",
            margin: 0,
            padding: 0,
            fontFamily: "Arial, sans-serif",
          }}
        >
          <Container
            style={{ maxWidth: "600px", margin: "0 auto", padding: "20px 0" }}
          >
            {/* Dual Logo Header */}
            <DualLogoHeader
              primaryLogo={{
                src: primaryLogoUrl,
                alt: "Ask A Doctor Help",
                width: 150,
                height: 50,
              }}
              secondaryLogo={{
                src: secondaryLogoUrl,
                alt: "JustAnswer",
                width: 140,
                height: 45,
              }}
              backgroundColor="#ffffff"
              separatorColor="#d1d5db"
            />

            {/* Main Content Card */}
            <Section style={{ padding: "0 16px" }}>
              <ContentCard
                title="You're all set!"
                backgroundColor="#ffffff"
                borderRadius={12}
                borderColor="#e8e8e8"
                padding={40}
              >
                <Tailwind>
                  <Text
                    style={{
                      fontSize: "17px",
                      color: "#333333",
                      lineHeight: "1.7",
                      margin: "0 0 20px 0",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Thank you for reactivating your membership. Your next
                    monthly charge of {nextChargeAmount} will be on{" "}
                    {nextChargeDate}. Feel free to cancel anytime.
                  </Text>

                  <Text
                    style={{
                      fontSize: "17px",
                      color: "#333333",
                      lineHeight: "1.7",
                      margin: "0 0 28px 0",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    You have access to our network of {expertsCount} Experts as
                    part of your membership, so don't miss out on getting Expert
                    help from doctors, lawyers, mechanics and more!
                  </Text>

                  <Button href={askQuestionUrl}>Ask a question</Button>

                  <Text
                    style={{
                      fontSize: "17px",
                      fontWeight: "bold",
                      color: "#333333",
                      margin: "36px 0 8px 0",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Need help?
                  </Text>

                  <Text
                    style={{
                      fontSize: "17px",
                      color: "#333333",
                      lineHeight: "1.7",
                      margin: 0,
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    We're here 24/7. Please{" "}
                    <Link
                      href={contactUrl}
                      style={{ color: "#5bc0de", textDecoration: "none" }}
                    >
                      contact us
                    </Link>{" "}
                    if you need assistance with anything else.
                  </Text>
                </Tailwind>
              </ContentCard>
            </Section>

            {/* Footer Section */}
            <Section
              style={{ padding: "32px 16px", textAlign: "center" as const }}
            >
              {/* Footer Logo */}
              <Img
                src={footerLogoUrl}
                alt="JustAnswer"
                width={130}
                height={40}
                style={{ margin: "0 auto 20px auto", display: "block" }}
              />

              {/* Copyright and Address */}
              <Text
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  margin: "0 0 4px 0",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                © 2003-2026 JustAnswer LLC. All rights reserved.
              </Text>
              <Text
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  margin: "0 0 20px 0",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                440 N Barranca Ave #7508, Covina, CA 91723
              </Text>

              {/* Email explanation */}
              <Text
                style={{
                  fontSize: "14px",
                  color: "#888888",
                  margin: "0 0 8px 0",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                This email was sent to you because you asked a question on{" "}
                <Link
                  href="https://justanswer.com"
                  style={{ color: "#5bc0de", textDecoration: "none" }}
                >
                  JustAnswer.com.
                </Link>
              </Text>

              {/* Legal Links */}
              <Text
                style={{
                  fontSize: "14px",
                  color: "#888888",
                  margin: "0 0 24px 0",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                <Link
                  href={unsubscribeUrl}
                  style={{ color: "#5bc0de", textDecoration: "none" }}
                >
                  Unsubscribe
                </Link>
                {" | "}
                <Link
                  href={privacyUrl}
                  style={{ color: "#5bc0de", textDecoration: "none" }}
                >
                  Privacy Policy
                </Link>
              </Text>

              {/* App Store Badges */}
              <AppStoreBadges
                appStoreUrl={appStoreUrl}
                playStoreUrl={playStoreUrl}
                alignment="center"
                badgeHeight={44}
              />
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MembershipReactivation;
