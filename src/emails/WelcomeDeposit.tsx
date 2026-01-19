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
  Hr,
  Preview,
} from "@react-email/components";
import { Tailwind } from "../components/email";
import { Header, Button } from "../components/email";

const BASE_IMAGE_URL = "https://ww2.justanswer.com/static/Touchpoint/notrial-tnt-depositreceipt";

const TEMPLATE_LAYOUT = {
  bannerImageSrc: `${BASE_IMAGE_URL}/General-Welcome-Deposit-Email-Hero-desktop.png`,
  preheaderText: "Your answer is on the way",
  categoryIconsUrl: [
    `${BASE_IMAGE_URL}/General-Welcome-Deposit-Icon-1.png`,
    `${BASE_IMAGE_URL}/General-Welcome-Deposit-Icon-5.png`,
    `${BASE_IMAGE_URL}/General-Welcome-Deposit-Icon-3.png`,
  ] as const,
  bulletPoints: [
    "Get help from licensed Experts across dozens of specialties like medical, legal, car, home, and pet care.",
    "Connect anytime—no appointments, no waiting rooms.",
    "Real Experts. Fast answers. No office visits.",
  ] as const,
};

const BASE_DOMAIN = "https://www.justanswer.com";
const LOGO_URL = "https://ww2.justanswer.com/static/Touchpoint/3rd_Party_Personalization/logo-just-answer.png";
const BUTTON_COLOR = "#E85C41";
const BG_COLOR = "#F1F8FA";
const ARTICLE_TITLE = "5 Tips for Keeping Your House Cool Without Busting the Budget in Extreme Heat";
const ARTICLE_DESCRIPTION =
  "This article gives expert driven tips on how to optimize AC performance, which ties into understanding and preventing common air conditioner issues like what the user may be facing with their unit.";

// Quick link card component
interface QuickLinkCardProps {
  iconSrc: string;
  label: string;
  href: string;
  showArrow?: boolean;
}

const QuickLinkCard = ({ iconSrc, label, href, showArrow = false }: QuickLinkCardProps) => (
  <td
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #E8EBEE",
      borderRadius: "16px",
      boxShadow: "0 2px 12px 0 rgba(41,69,255,.08)",
      padding: "15px 16px 32px",
      textAlign: "center",
    }}
  >
    <Img
      src={iconSrc}
      width="33"
      alt=""
      style={{ width: "33px", marginBottom: "12px" }}
    />
    <Link
      href={href}
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "13px",
        fontWeight: 600,
        lineHeight: "20px",
        color: "#2E3538",
        textDecoration: "none",
      }}
    >
      {label}
      {showArrow && (
        <Img
          src="https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/ico-05.png"
          width="12"
          alt="→"
          style={{ width: "12px", display: "inline", verticalAlign: "-2px", marginLeft: "4px" }}
        />
      )}
    </Link>
  </td>
);

// Bullet point item component
interface BulletPointProps {
  iconSrc: string;
  text: string;
}

const BulletPoint = ({ iconSrc, text }: BulletPointProps) => (
  <Row style={{ marginBottom: "24px" }}>
    <Column style={{ width: "24px", verticalAlign: "top" }}>
      <Img src={iconSrc} width="24" alt="" style={{ width: "24px" }} />
    </Column>
    <Column style={{ width: "16px" }} />
    <Column style={{ verticalAlign: "top" }}>
      <Text
        style={{
          fontFamily: "Helvetica, Arial, sans-serif",
          fontSize: "16px",
          lineHeight: "24px",
          color: "#333333",
          margin: 0,
        }}
      >
        {text}
      </Text>
    </Column>
  </Row>
);

export const WelcomeDeposit = () => {
  const currentYear = new Date().getFullYear();

  const layout = TEMPLATE_LAYOUT;

  const urls = {
    verifyContactInfo: `${BASE_DOMAIN}/verifycontactinfo`,
    myQuestions: BASE_DOMAIN,
    meetExperts: `${BASE_DOMAIN}/info/meet-the-experts`,
    aboutUs: `${BASE_DOMAIN}/about`,
    expertQuality: `${BASE_DOMAIN}/info/expert-quality-process`,
    unsubscribe: `${BASE_DOMAIN}/account/emailpreferences`,
    privacyPolicy: `${BASE_DOMAIN}/info/privacy-security`,
    contactUs: `${BASE_DOMAIN}/help/contact-us`,
    article: `${BASE_DOMAIN}/help/contact-us`,
  };

  const showWelcomeBack = false;

  const linkStyle = {
    color: "#52BAD5",
    textDecoration: "none",
  };

  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      </Head>
      <Preview>{layout.preheaderText}</Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: "#ffffff",
            margin: 0,
            padding: 0,
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <Container
            style={{
              maxWidth: "660px",
              margin: "0 auto",
              padding: "30px 0",
            }}
          >
            {/* Main wrapper with border */}
            <Section
              style={{
                border: "1px solid #139BC9",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              {/* Header */}
              <Section style={{ padding: "22px 15px 28px" }}>
                <Link href={BASE_DOMAIN}>
                  <Header logoSrc={LOGO_URL} logoAlt="JustAnswer" logoHeight="40px" />
                </Link>
              </Section>

              {/* Animated Banner Strip */}
              <Section style={{ backgroundColor: BG_COLOR, padding: "10px 15px 9px" }}>
                <Img
                  src="https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/JustAnswer_Straight%20Wrapper.gif"
                  width="360"
                  alt=""
                  style={{ width: "360px" }}
                />
              </Section>

              {/* Hero Image */}
              <Section style={{ paddingBottom: "40px", textAlign: "center" }}>
                <Img
                  src={layout.bannerImageSrc}
                  width="658"
                  alt=""
                  style={{ width: "100%", maxWidth: "658px", verticalAlign: "bottom" }}
                />
              </Section>

              {/* Main Content */}
              <Section style={{ padding: "0 64px 40px", backgroundColor: "#ffffff" }}>
                {/* Welcome Title */}
                <Text
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "24px",
                    fontWeight: "bold",
                    lineHeight: "28px",
                    color: "#333333",
                    margin: "0 0 24px 0",
                  }}
                >
                  {showWelcomeBack ? "Welcome Back!" : "Welcome to JustAnswer"}
                </Text>

                {/* Intro Text */}
                <Text
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#333333",
                    margin: "0 0 24px 0",
                  }}
                >
                  You now have access to a trusted network of verified experts, including experienced
                  HVAC professionals who help homeowners make sense of issues like inverter alerts
                  and system behavior. Our goal is to give you clear, reliable guidance so you can
                  feel confident about what's happening with your equipment and what steps to take
                  next.
                </Text>

                {/* Divider */}
                <Hr style={{ border: "none", height: "1px", backgroundColor: "#333333", opacity: 0.2, margin: "0 0 15px 0" }} />

                {/* Now that you're a member */}
                <Text
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#333333",
                    margin: "0 0 24px 0",
                  }}
                >
                  Now that you're a member, you can:
                </Text>

                {/* Bullet Points */}
                <Section style={{ marginBottom: "24px" }}>
                  {layout.bulletPoints.map((point, index) => (
                    <BulletPoint
                      key={index}
                      iconSrc={layout.categoryIconsUrl[index]}
                      text={point}
                    />
                  ))}
                </Section>

                {/* CTA Button */}
                <Section style={{ marginBottom: "24px" }}>
                  <Button href={urls.verifyContactInfo} backgroundColor={BUTTON_COLOR}>
                    Verify Contact Info
                  </Button>
                </Section>

                {/* Article Section */}
                <Text
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "22px",
                    fontWeight: "bold",
                    lineHeight: "26px",
                    color: "#333333",
                    margin: "24px 0 12px 0",
                  }}
                >
                  {ARTICLE_TITLE}
                </Text>

                <Text
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#333333",
                    margin: "0 0 24px 0",
                  }}
                >
                  {ARTICLE_DESCRIPTION}{" "}
                  <Link href={urls.article} style={linkStyle}>
                    Read more
                  </Link>
                  .
                </Text>
              </Section>

              {/* Quick Links Section */}
              <Section style={{ backgroundColor: BG_COLOR, padding: "31px 23px 56px" }}>
                {/* Quick Link Cards */}
                <table
                  cellPadding="0"
                  cellSpacing="0"
                  style={{ width: "100%", marginBottom: "32px" }}
                >
                  <tr>
                    <QuickLinkCard
                      iconSrc="https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/ico-01.png"
                      label="My questions"
                      href={urls.myQuestions}
                    />
                    <td style={{ width: "16px" }} />
                    <QuickLinkCard
                      iconSrc="https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/ico-02.png"
                      label="Meet the Experts"
                      href={urls.meetExperts}
                    />
                    <td style={{ width: "16px" }} />
                    <QuickLinkCard
                      iconSrc="https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/ico-03.png"
                      label="About us"
                      href={urls.aboutUs}
                      showArrow
                    />
                  </tr>
                </table>

                {/* Expert Quality Card */}
                <Section
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #E8EBEE",
                    borderRadius: "24px",
                    boxShadow: "0 8px 24px 0 rgba(0,0,0,.06)",
                    padding: "15px 30px 15px 16px",
                    marginBottom: "24px",
                  }}
                >
                  <Row>
                    <Column style={{ width: "211px", verticalAlign: "top" }}>
                      <Img
                        src="https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/img-02.png"
                        width="211"
                        alt=""
                        style={{ width: "211px", verticalAlign: "top" }}
                      />
                    </Column>
                    <Column style={{ width: "20px" }} />
                    <Column style={{ verticalAlign: "top" }}>
                      <Text
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: "20px",
                          fontWeight: 700,
                          lineHeight: "40px",
                          color: "#1D2530",
                          margin: "0 0 12px 0",
                        }}
                      >
                        <Img
                          src="https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/ico-04.png"
                          width="31"
                          alt=""
                          style={{
                            width: "31px",
                            display: "inline",
                            verticalAlign: "-7px",
                            marginRight: "8px",
                          }}
                        />
                        Verified Expert Quality
                      </Text>
                      <Text
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: "16px",
                          lineHeight: "20px",
                          color: "#67717E",
                          letterSpacing: "0.1px",
                          margin: "0 0 24px 0",
                        }}
                      >
                        Learn how we ensure you get the most knowledgeable, trustworthy help
                        available.
                      </Text>
                      <Link
                        href={urls.expertQuality}
                        style={{
                          fontFamily: "Helvetica, Arial, sans-serif",
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                          color: "#139BC9",
                          textDecoration: "none",
                          letterSpacing: "0.1px",
                        }}
                      >
                        Learn more about the experts{" "}
                        <Img
                          src="https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/ico-06.png"
                          width="12"
                          alt=""
                          style={{ width: "12px", display: "inline" }}
                        />
                      </Link>
                    </Column>
                  </Row>
                </Section>

                {/* Footer */}
                <Section style={{ padding: "0 15px" }}>
                  {/* Logo */}
                    <Img
                      src={LOGO_URL}

                    alt="JustAnswer"
                    style={{ height: "30px", width: "auto", marginBottom: "20px" }}
                  />

                  {/* Copyright */}
                  <Text
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: "12px",
                      lineHeight: "20px",
                      color: "#4A5565",
                      margin: "0 0 12px 0",
                    }}
                  >
                    © 2003-{currentYear} JustAnswer LLC. All rights reserved.
                    <br />
                    440 N Barranca Ave #7508, Covina, CA 91723
                  </Text>

                  <Text
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: "12px",
                      lineHeight: "20px",
                      color: "#4A5565",
                      margin: "0 0 13px 0",
                    }}
                  >
                    This email was sent to you because you asked a question on{" "}
                    <Link href={BASE_DOMAIN} style={linkStyle}>
                      JustAnswer.com.
                    </Link>
                  </Text>

                  {/* Legal Links */}
                  <Text
                    style={{
                      fontFamily: "Helvetica, Arial, sans-serif",
                      fontSize: "11px",
                      lineHeight: "16px",
                      color: "#718288",
                      margin: 0,
                      paddingBottom: "24px",
                      borderBottom: "1px solid #E5E7EB",
                    }}
                  >
                    <Link href={urls.unsubscribe} style={linkStyle}>
                      Unsubscribe
                    </Link>
                    {" | "}
                    <Link href={urls.privacyPolicy} style={linkStyle}>
                      Privacy Policy
                    </Link>
                    {" | "}
                    <Link href={urls.contactUs} style={linkStyle}>
                      Contact Us
                    </Link>
                  </Text>
                </Section>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeDeposit;
