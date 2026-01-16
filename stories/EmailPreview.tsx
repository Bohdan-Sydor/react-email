import { render } from "@react-email/render";
import { Html, Head, Body, Container } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { useEffect, useState } from "react";

interface EmailPreviewProps {
  children: React.ReactNode;
  width?: number;
}

/**
 * Wrapper component for previewing email components in Storybook.
 * Renders the email HTML in an iframe for accurate email client simulation.
 */
export const EmailPreview = ({ children, width = 600 }: EmailPreviewProps) => {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const EmailWrapper = () => (
      <Html>
        <Head />
        <Tailwind>
          <Body style={{ backgroundColor: "#ffffff", margin: 0 }}>
            <Container style={{ maxWidth: `${width}px`, margin: "0 auto" }}>
              {children}
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );

    const renderEmail = async () => {
      try {
        const rendered = await render(<EmailWrapper />);
        setHtml(rendered);
      } catch (error) {
        console.error("Failed to render email:", error);
      }
    };

    renderEmail();
  }, [children, width]);

  if (!html) {
    return <div>Loading preview...</div>;
  }

  return (
    <div
      style={{
        border: "1px solid #e5e5e5",
        borderRadius: "8px",
        overflow: "hidden",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "8px 12px",
          borderBottom: "1px solid #e5e5e5",
          fontSize: "12px",
          color: "#666",
        }}
      >
        Email Preview ({width}px)
      </div>
      <iframe
        srcDoc={html}
        style={{
          width: `${width}px`,
          height: "400px",
          border: "none",
          display: "block",
        }}
        title="Email Preview"
      />
    </div>
  );
};

export default EmailPreview;
