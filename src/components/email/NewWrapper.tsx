import type { ReactNode } from "react";
import {
  Section,
  Text,
  Link,
  Img,
  Row,
  Column,
} from "@react-email/components";

const BASE_DOMAIN = "https://www.justanswer.com";
const LOGO_URL =
  "https://ww2-secure.justanswer.com/static/Touchpoint/Fully_Branded_Javatar/Logo_JAvatar_www_askadoctor_help.png";
const ANIMATED_BANNER_URL =
  "https://ww2-secure.justanswer.com/static/Touchpoint/Welcome_email_Wrapper/JustAnswer_Straight%20Wrapper.gif";
const BG_COLOR = "#F1F8FA";

interface QuickLinkCardProps {
  iconSrc: string;
  label: string;
  href: string;
  showArrow?: boolean;
}

const QuickLinkCard = ({
  iconSrc,
  label,
  href,
  showArrow = false,
}: QuickLinkCardProps) => (
  <td
    style={{
      backgroundColor: "#ffffff",
      border: "1px solid #E8EBEE",
      borderRadius: "16px",
      boxShadow: "0 2px 12px 0 rgba(41,69,255,.08)",
      padding: "15px 16px 32px",
      textAlign: "center",
      verticalAlign: "top",
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
          style={{
            width: "12px",
            display: "inline",
            verticalAlign: "-2px",
            marginLeft: "4px",
          }}
        />
      )}
    </Link>
  </td>
);

export interface NewWrapperProps {
  children: ReactNode;
  logoUrl?: string;
  logoAlt?: string;
  showAnimatedBanner?: boolean;
  heroImageSrc?: string;
  heroImageWidth?: string;
}

export const NewWrapper = ({
  children,
  logoUrl = LOGO_URL,
  logoAlt = "JustAnswer",
  showAnimatedBanner = true,
  heroImageSrc,
  heroImageWidth = "658",
}: NewWrapperProps) => {
  const currentYear = new Date().getFullYear();

  const urls = {
    home: BASE_DOMAIN,
    myQuestions: BASE_DOMAIN,
    meetExperts: `${BASE_DOMAIN}/info/meet-the-experts`,
    aboutUs: `${BASE_DOMAIN}/about`,
    expertQuality: `${BASE_DOMAIN}/info/expert-quality-process`,
    unsubscribe: `${BASE_DOMAIN}/account/emailpreferences`,
    privacyPolicy: `${BASE_DOMAIN}/info/privacy-security`,
    contactUs: `${BASE_DOMAIN}/help/contact-us`,
  };

  const linkStyle = {
    color: "#52BAD5",
    textDecoration: "none",
  };

  return (
    <Section
      style={{
        border: "1px solid #139BC9",
        borderRadius: "24px",
        overflow: "hidden",
      }}
    >
      {/* ========== HEADER ========== */}
      <Section style={{ padding: "22px 15px 28px" }}>
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            maxWidth: "536px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          <tr>
            <td style={{ width: "250px" }}>
              <Link href={urls.home}>
                <Img
                  src={logoUrl}
                  alt={logoAlt}
                  height="40"
                  style={{
                    height: "40px",
                    width: "auto",
                    display: "block",
                  }}
                />
              </Link>
            </td>
          </tr>
        </table>
      </Section>

      {/* Animated Banner Strip */}
      {showAnimatedBanner && (
        <Section
          style={{ backgroundColor: BG_COLOR, padding: "10px 15px 9px" }}
        >
          <table
            cellPadding="0"
            cellSpacing="0"
            style={{
              maxWidth: "536px",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <tr>
              <td style={{ padding: "5px 15px 5px 5px" }}>
                <Img
                  src={ANIMATED_BANNER_URL}
                  width="360"
                  alt=""
                  style={{ width: "360px", verticalAlign: "bottom" }}
                />
              </td>
            </tr>
          </table>
        </Section>
      )}

      {/* Optional Hero Image */}
      {heroImageSrc && (
        <Section style={{ paddingBottom: "40px", textAlign: "center" }}>
          <Img
            src={heroImageSrc}
            width={heroImageWidth}
            alt=""
            style={{
              width: "100%",
              maxWidth: `${heroImageWidth}px`,
              verticalAlign: "bottom",
            }}
          />
        </Section>
      )}

      {/* ========== CHILDREN CONTENT ========== */}
      {children}

      {/* ========== FOOTER ========== */}
      <Section
        style={{ backgroundColor: BG_COLOR, padding: "31px 23px 56px" }}
      >
        {/* Quick Link Cards */}
        <table
          cellPadding="0"
          cellSpacing="0"
          style={{
            maxWidth: "572px",
            width: "100%",
            margin: "0 auto 32px",
          }}
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
            maxWidth: "572px",
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
                Learn how we ensure you get the most knowledgeable,
                trustworthy help available.
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

        {/* Footer Links & Copyright */}
        <Section
          style={{ padding: "0 15px", maxWidth: "536px", margin: "0 auto" }}
        >
          {/* Logo */}
          <Img
            src={logoUrl}
            alt={logoAlt}
            style={{
              height: "30px",
              width: "auto",
              marginBottom: "20px",
            }}
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
            <Link href={urls.home} style={linkStyle}>
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
  );
};

export default NewWrapper;
