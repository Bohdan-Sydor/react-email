import { Img, Link, Section, Text, Row, Column } from "@react-email/components";

export interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  companyName?: string;
  copyrightYears?: string;
  address?: string;
  unsubscribeUrl?: string;
  privacyPolicyUrl?: string;
  websiteUrl?: string;
  appStoreUrl?: string;
  googlePlayUrl?: string;
}

export const Footer = ({
  logoSrc = "https://ww2.justanswer.com//static/Touchpoint/3rd_Party_Personalization/logo-just-answer.png",
  logoAlt = "JustAnswer",
  companyName = "JustAnswer LLC",
  copyrightYears = "2003-2026",
  address = "440 N Barranca Ave #7508, Covina, CA 91723",
  unsubscribeUrl = "#",
  privacyPolicyUrl = "#",
  websiteUrl = "https://www.justanswer.com",
  appStoreUrl = "https://apps.apple.com/app/justanswer",
  googlePlayUrl = "https://play.google.com/store/apps/details?id=com.justanswer.mobile",
}: FooterProps) => {
  const textStyle = {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#666666",
    margin: "0",
    textAlign: "center" as const,
  };

  const linkStyle = {
    color: "#00B4D8",
    textDecoration: "none",
  };

  return (
    <Section style={{ backgroundColor: "#f5f5f5", padding: "32px 20px" }}>
      {/* Logo */}
      <Row>
        <Column align="center">
          <Img
            src={logoSrc}
            alt={logoAlt}
            style={{
              height: "40px",
              width: "auto",
              margin: "0 auto",
            }}
          />
        </Column>
      </Row>

      {/* Copyright */}
      <Text style={{ ...textStyle, marginTop: "24px" }}>
        © {copyrightYears} {companyName}. All rights reserved.
      </Text>

      {/* Address */}
      <Text style={{ ...textStyle, marginTop: "4px" }}>
        {address}
      </Text>

      {/* Reason for email */}
      <Text style={{ ...textStyle, marginTop: "20px" }}>
        This email was sent to you because you asked a question on{" "}
        <Link href={websiteUrl} style={linkStyle}>
          JustAnswer.com
        </Link>
        .
      </Text>

      {/* Unsubscribe and Privacy links */}
      <Text style={{ ...textStyle, marginTop: "4px" }}>
        <Link href={unsubscribeUrl} style={linkStyle}>
          Unsubscribe
        </Link>
        {" | "}
        <Link href={privacyPolicyUrl} style={linkStyle}>
          Privacy Policy
        </Link>
      </Text>

      {/* App Store Badges */}
      <Row style={{ marginTop: "24px" }}>
        <Column align="right" style={{ paddingRight: "8px" }}>
          <Link href={appStoreUrl}>
            <Img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/200px-Download_on_the_App_Store_Badge.svg.png"
              alt="Download on the App Store"
              style={{
                height: "40px",
                width: "auto",
              }}
            />
          </Link>
        </Column>
        <Column align="left" style={{ paddingLeft: "8px" }}>
          <Link href={googlePlayUrl}>
            <Img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/200px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              style={{
                height: "40px",
                width: "auto",
              }}
            />
          </Link>
        </Column>
      </Row>
    </Section>
  );
};

export default Footer;
