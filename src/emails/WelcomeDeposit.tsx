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
import { Tailwind } from "@react-email/tailwind";
import { Header, Footer, Button } from "../components/email";

// Question type configuration
export type QuestionType =
  | "medical"
  | "medicalPrescriptions"
  | "tech"
  | "legal"
  | "legalE2E"
  | "pet"
  | "car"
  | "homeImprovement"
  | "general";

export interface TemplateLayout {
  bannerImageSrc: string;
  preheaderText: string;
  expertsWorkingOnText: string;
  yourQuestionText: string;
  weWillRespondYouText: string;
  categoryIconsUrl: [string, string, string];
  bulletPoints: [string, string, string];
  expertsDescriptionText: string;
}

export interface WelcomeDepositProps {
  questionType?: QuestionType;
  isReactivated?: boolean;
  reactivationSource?: string;
  logoUrl?: string;
  baseDomain?: string;
  buttonColor?: string;
  bgColor?: string;
  // Dynamic content props
  expertTitlePlural?: string;
  expertTitleSingular?: string;
  categoryName?: string;
  // Pet-specific
  petName?: string;
  petBreed?: string;
  animalType?: string;
  // Car-specific
  carBrand?: string;
  carModel?: string;
  carYear?: string;
  // Home Improvement specific
  hiBrand?: string;
  hiProduct?: string;
  // Tech specific
  techTheme?: string;
  // Legal specific
  legalSpecialty?: string;
  legalLocation?: string;
  legalTheme?: string;
  legalSubtheme?: string;
  // Article section
  articleTitle?: string;
  articleDescription?: string;
  articleUrl?: string;
  // URLs
  verifyContactInfoUrl?: string;
  myQuestionsUrl?: string;
  meetExpertsUrl?: string;
  aboutUsUrl?: string;
  expertQualityUrl?: string;
  unsubscribeUrl?: string;
  privacyPolicyUrl?: string;
  contactUsUrl?: string;
}

const BASE_IMAGE_URL = "https://ww2.justanswer.com/static/Touchpoint/notrial-tnt-depositreceipt";

function getTemplateLayout(
  questionType: QuestionType,
  props: WelcomeDepositProps
): TemplateLayout {
  const {
    expertTitlePlural,
    expertTitleSingular,
    categoryName,
    petName,
    petBreed,
    animalType,
    carBrand,
    carModel,
    carYear,
    hiBrand,
    hiProduct,
    techTheme,
    legalSpecialty,
    legalLocation,
    legalTheme,
    legalSubtheme,
  } = props;

  switch (questionType) {
    case "medicalPrescriptions":
    case "medical":
      return {
        bannerImageSrc: `${BASE_IMAGE_URL}/Health-Welcome-Deposit-Email-Hero-desktop.png`,
        preheaderText: "Your answer is on the way",
        expertsWorkingOnText: `${expertTitlePlural || "Verified doctors"} are currently reviewing`,
        yourQuestionText: " your question.",
        weWillRespondYouText: `You'll be notified via email or SMS when a ${expertTitleSingular || "doctor"} is ready to assist you.`,
        categoryIconsUrl: [
          `${BASE_IMAGE_URL}/Health-Welcome-Deposit-Icon-2.png`,
          `${BASE_IMAGE_URL}/Health-Welcome-Deposit-Icon-5.png`,
          `${BASE_IMAGE_URL}/Health-Welcome-Deposit-Icon-1.png`,
        ],
        bulletPoints: [
          "Ask doctors and therapists about symptoms, medications, or health concerns.",
          "Talk confidentially with licensed professionals, 24/7.",
          questionType === "medicalPrescriptions"
            ? "Keep asking follow-ups as your situation changes."
            : "Ask follow-up questions as your situation changes.",
        ],
        expertsDescriptionText:
          "You have access to our network of 12,000 Experts as part of your membership, so don't miss out on getting expert help from lawyers, mechanics, technicians and more!",
      };

    case "legalE2E": {
      const specialty = legalSpecialty?.toLowerCase() || "law";
      let secondBullet = "";
      switch (specialty) {
        case "immigration":
          secondBullet = "Get help with green cards, visas, passports, work permits & more.";
          break;
        case "family":
          secondBullet = `Get help with ${legalLocation || ""} child support, divorce, custody, emancipation & more.`;
          break;
        case "employment":
          secondBullet = "Get help with hostile work environments, disability, wages, work hours & more.";
          break;
        case "landlord-tenant":
          secondBullet = "Get help with lease agreements, rent, evictions, security deposits & more.";
          break;
        case "criminal":
          secondBullet = "Get help with criminal charges, warrants, arrests, DUIs, assault & more.";
          break;
        case "real estate":
          secondBullet = "Get help with quitclaim deeds, property taxes, real estate contracts & more.";
          break;
        default:
          secondBullet = "Get help with restraining orders, Social Security, immigration, employment issues, traffic tickets & more.";
      }
      const specialtyPrefix = specialty !== "law" ? `${specialty} ` : "";
      return {
        bannerImageSrc: `${BASE_IMAGE_URL}/Law-Welcome-Deposit-Email-Hero-desktop.png`,
        preheaderText: `Your ${categoryName || ""} answer is on the way`,
        expertsWorkingOnText: `${expertTitlePlural || "Lawyers"} are currently reviewing`,
        yourQuestionText: ` your ${legalSubtheme || legalTheme || ""} question.`,
        weWillRespondYouText: ` You'll be notified via email or SMS when a ${specialtyPrefix}lawyer is ready to assist you.`,
        categoryIconsUrl: [
          `${BASE_IMAGE_URL}/Law-Welcome-Deposit-Icon-1.png`,
          `${BASE_IMAGE_URL}/Law-Welcome-Deposit-Icon-2.png`,
          `${BASE_IMAGE_URL}/Law-Welcome-Deposit-Icon-Chat.png`,
        ],
        bulletPoints: [
          `Get answers from ${specialty !== "law" ? specialty : ""} lawyers in minutes, 24/7.`,
          secondBullet,
          "Chat with licensed Experts across dozens of specialties like medical, legal, car, home, and pet care.",
        ],
        expertsDescriptionText:
          "You have access to our network of 12,000 Experts as part of your membership, so don't miss out on getting expert help from doctors, mechanics, technicians and more!",
      };
    }

    case "legal":
      return {
        bannerImageSrc: `${BASE_IMAGE_URL}/Law-Welcome-Deposit-Email-Hero-desktop.png`,
        preheaderText: `Your ${categoryName || ""} answer is on the way`,
        expertsWorkingOnText: `${expertTitlePlural || "Lawyers"} are currently reviewing`,
        yourQuestionText: " your question.",
        weWillRespondYouText: `You'll be notified via email or SMS when a ${expertTitleSingular || "lawyer"} is ready to assist you.`,
        categoryIconsUrl: [
          `${BASE_IMAGE_URL}/Law-Welcome-Deposit-Icon-1.png`,
          `${BASE_IMAGE_URL}/Law-Welcome-Deposit-Icon-2.png`,
          `${BASE_IMAGE_URL}/Law-Welcome-Deposit-Icon-3.png`,
        ],
        bulletPoints: [
          "Talk to lawyers about divorce, custody, contracts, immigration, and more.",
          "Get clear answers without office visits or hourly fees.",
          "Follow up as your legal situation changes.",
        ],
        expertsDescriptionText:
          "You have access to our network of 12,000 Experts as part of your membership, so don't miss out on getting expert help from doctors, mechanics, technicians and more!",
      };

    case "tech":
      return {
        bannerImageSrc: `${BASE_IMAGE_URL}/Tech-Welcome-Deposit-Email-Hero-desktop.png`,
        preheaderText: "Your answer is on the way",
        expertsWorkingOnText: `${expertTitlePlural || "Tech Specialists"} are currently reviewing`,
        yourQuestionText: ` your ${techTheme || ""} question.`,
        weWillRespondYouText: "You'll be notified via email or SMS when an Expert is ready to assist you.",
        categoryIconsUrl: [
          `${BASE_IMAGE_URL}/Tech-Welcome-Deposit-Icon-1.png`,
          `${BASE_IMAGE_URL}/Tech-Welcome-Deposit-Icon-3.png`,
          `${BASE_IMAGE_URL}/Tech-Welcome-Deposit-Icon-2.png`,
        ],
        bulletPoints: [
          "Get step-by-step help from IT and device Experts.",
          "Access support on your schedule—no waiting on hold.",
          "Reconnect if the issue comes back.",
        ],
        expertsDescriptionText:
          "You have access to our network of 12,000 Experts as part of your membership, so don't miss out on getting expert help from doctors, lawyers, mechanics and more!",
      };

    case "pet": {
      const petDescription = petName || `your ${petBreed || animalType || "pet"}`;
      return {
        bannerImageSrc: `https://ww2.justanswer.com/static/Touchpoint/notrial-tnt-depositreceipt/Pets-Welcome-Deposit-Email-Hero-desktop.png`,
        preheaderText: "Your answer is on the way",
        expertsWorkingOnText: `${expertTitlePlural || "Veterinarians"} are currently reviewing`,
        yourQuestionText: ` your question about ${petDescription}.`,
        weWillRespondYouText: `You'll be notified via email or SMS when a ${expertTitleSingular || "veterinarian"} is ready to assist you.`,
        categoryIconsUrl: [
          `https://ww2.justanswer.com/static/Touchpoint/notrial-tnt-depositreceipt/Pets-Welcome-Deposit-Icon-2.png`,
          `https://ww2.justanswer.com/static/Touchpoint/notrial-tnt-depositreceipt/Pets-Welcome-Deposit-Icon-1.png`,
          `https://ww2.justanswer.com/static/Touchpoint/notrial-tnt-depositreceipt/Pets-Welcome-Deposit-Icon-4.png`,
        ],
        bulletPoints: [
          "Chat with licensed vets about health, behavior, and diet.",
          "Get help anytime—whether it's an emergency or a quick concern.",
          "Check back in if things change or don't improve.",
        ],
        expertsDescriptionText:
          "You have access to our network of 12,000 Experts as part of your membership, so don't miss out on getting expert help from doctors, lawyers, mechanics and more!",
      };
    }

    case "car": {
      const carDescription = carModel
        ? carYear
          ? `${carYear} ${carModel} `
          : `${carModel} `
        : "";
      return {
        bannerImageSrc: `${BASE_IMAGE_URL}/Cars-Welcome-Deposit-Email-Hero-desktop.png`,
        preheaderText: `Your ${carBrand || categoryName || ""} answer is on the way`,
        expertsWorkingOnText: `${carBrand ? `${carBrand} ` : ""}Mechanics are currently reviewing`,
        yourQuestionText: ` your ${carDescription}question.`,
        weWillRespondYouText: `You'll be notified via email or SMS when a ${expertTitleSingular || "mechanic"} is ready to assist you.`,
        categoryIconsUrl: [
          `${BASE_IMAGE_URL}/Cars-Welcome-Deposit-Icon-3.png`,
          `${BASE_IMAGE_URL}/Cars-Welcome-Deposit-Icon-2.png`,
          `${BASE_IMAGE_URL}/Cars-Welcome-Deposit-Icon-1.png`,
        ],
        bulletPoints: [
          "Talk to mechanics about repairs, maintenance, and car issues.",
          "Connect with lawyers for questions about traffic tickets or accident claims.",
          "Get help fast—whether you're at home or on the road.",
        ],
        expertsDescriptionText:
          "You have access to our network of 12,000 Experts as part of your membership, so don't miss out on getting expert help from doctors, lawyers, technicians and more!",
      };
    }

    case "homeImprovement": {
      const hiDescription =
        hiBrand && hiProduct ? `${hiBrand} ${hiProduct}` : categoryName || "";
      return {
        bannerImageSrc: `${BASE_IMAGE_URL}/HI-Welcome-Deposit-Email-Hero-desktop.png`,
        preheaderText: `Your ${hiDescription} answer is on the way`,
        expertsWorkingOnText: `${expertTitlePlural || "Home Improvement Experts"} are currently reviewing`,
        yourQuestionText: ` your ${hiDescription} question.`,
        weWillRespondYouText: "You'll be notified via email or SMS when an Expert is ready to assist you.",
        categoryIconsUrl: [
          `${BASE_IMAGE_URL}/HI-Welcome-Deposit-Icon-1.png`,
          `${BASE_IMAGE_URL}/HI-Welcome-Deposit-Icon-5.png`,
          `${BASE_IMAGE_URL}/HI-Welcome-Deposit-Icon-3.png`,
        ],
        bulletPoints: [
          "Talk to contractors, electricians, and repair Experts.",
          "Ask follow-up questions as your project evolves.",
          "Get help whenever problems pop up—no scheduling required.",
        ],
        expertsDescriptionText:
          "You have access to our network of 12,000 Experts as part of your membership, so don't miss out on getting expert help from doctors, lawyers, mechanics and more!",
      };
    }

    default:
      return {
        bannerImageSrc: `${BASE_IMAGE_URL}/General-Welcome-Deposit-Email-Hero-desktop.png`,
        preheaderText: "Your answer is on the way",
        expertsWorkingOnText: `${expertTitlePlural || "Experts"} are currently reviewing`,
        yourQuestionText: " your question.",
        weWillRespondYouText: " You'll be notified via email or SMS when an Expert is ready to assist you.",
        categoryIconsUrl: [
          `${BASE_IMAGE_URL}/General-Welcome-Deposit-Icon-1.png`,
          `${BASE_IMAGE_URL}/General-Welcome-Deposit-Icon-5.png`,
          `${BASE_IMAGE_URL}/General-Welcome-Deposit-Icon-3.png`,
        ],
        bulletPoints: [
          "Get help from licensed Experts across dozens of specialties like medical, legal, car, home, and pet care.",
          "Connect anytime—no appointments, no waiting rooms.",
          "Real Experts. Fast answers. No office visits.",
        ],
        expertsDescriptionText:
          "You have access to our network of 12,000 Experts as part of your membership, so don't miss out on getting expert help from doctors, lawyers, mechanics and more!",
      };
  }
}

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

export const WelcomeDeposit = ({
  questionType = "general",
  isReactivated = false,
  reactivationSource,
  logoUrl = "https://ww2.justanswer.com/static/Touchpoint/3rd_Party_Personalization/logo-just-answer.png",
  baseDomain = "https://www.justanswer.com",
  buttonColor = "#E85C41",
  bgColor = "#F1F8FA",
  articleTitle = "5 Tips for Keeping Your House Cool Without Busting the Budget in Extreme Heat",
  articleDescription = "This article gives expert driven tips on how to optimize AC performance, which ties into understanding and preventing common air conditioner issues like what the user may be facing with their unit.",
  articleUrl,
  verifyContactInfoUrl,
  myQuestionsUrl,
  meetExpertsUrl,
  aboutUsUrl,
  expertQualityUrl,
  unsubscribeUrl,
  privacyPolicyUrl,
  contactUsUrl,
  ...props
}: WelcomeDepositProps) => {
  const layout = getTemplateLayout(questionType, { questionType, ...props });
  const currentYear = new Date().getFullYear();

  // Construct URLs with baseDomain
  const urls = {
    verifyContactInfo: verifyContactInfoUrl || `${baseDomain}/verifycontactinfo`,
    myQuestions: myQuestionsUrl || baseDomain,
    meetExperts: meetExpertsUrl || `${baseDomain}/info/meet-the-experts`,
    aboutUs: aboutUsUrl || `${baseDomain}/about`,
    expertQuality: expertQualityUrl || `${baseDomain}/info/expert-quality-process`,
    unsubscribe: unsubscribeUrl || `${baseDomain}/account/emailpreferences`,
    privacyPolicy: privacyPolicyUrl || `${baseDomain}/info/privacy-security`,
    contactUs: contactUsUrl || `${baseDomain}/help/contact-us`,
    article: articleUrl || `${baseDomain}/help/contact-us`,
  };

  const showWelcomeBack =
    isReactivated && reactivationSource !== "mvcMyAccountSubscriptionReactivationPage";

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
                <Link href={baseDomain}>
                  <Header logoSrc={logoUrl} logoAlt="JustAnswer" logoHeight="40px" />
                </Link>
              </Section>

              {/* Animated Banner Strip */}
              <Section style={{ backgroundColor: bgColor, padding: "10px 15px 9px" }}>
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
                  <Button href={urls.verifyContactInfo} backgroundColor={buttonColor}>
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
                  {articleTitle}
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
                  {articleDescription}{" "}
                  <Link href={urls.article} style={linkStyle}>
                    Read more
                  </Link>
                  .
                </Text>
              </Section>

              {/* Quick Links Section */}
              <Section style={{ backgroundColor: bgColor, padding: "31px 23px 56px" }}>
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
                    src={logoUrl}
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
                    <Link href={baseDomain} style={linkStyle}>
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
