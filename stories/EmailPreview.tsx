import React, { useEffect, useState } from "react";
import { render } from "@react-email/render";
import { Html, Head, Body, Container } from "@react-email/components";
import { Tailwind, type EmailTheme } from "../src/components/email/Tailwind";

interface EmailPreviewProps {
  children: React.ReactNode;
  width?: number;
  theme?: EmailTheme;
  subject?: string;
  from?: string;
  to?: string;
}

/**
 * Wrapper component for previewing email components in Storybook.
 * Renders the email HTML in an iframe for accurate email client simulation.
 */
export const EmailPreview = ({
  children,
  width = 600,
  theme = "justanswer",
  subject = "Welcome to JustAnswer",
  from = "noreply@justanswer.com",
  to = "customer@example.com",
}: EmailPreviewProps) => {
  const [html, setHtml] = useState<string>("");

  useEffect(() => {
    const EmailWrapper = () => (
      <Html>
        <Head />
        <Tailwind theme={theme}>
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
  }, [children, width, theme]);

  if (!html) {
    return (
      <div style={{ padding: "40px", textAlign: "center", color: "#6b7280" }}>
        <div style={{ fontSize: "24px", marginBottom: "8px" }}>✉️</div>
        Loading preview...
      </div>
    );
  }

  return (
    <div style={{ padding: "24px" }}>
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow:
            "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.05)",
          background: "#fff",
          maxWidth: `${width + 48}px`,
        }}
      >
        {/* Window Title Bar */}
        <div
          style={{
            background: "linear-gradient(180deg, #f7f7f7 0%, #e8e8e8 100%)",
            padding: "10px 16px",
            borderBottom: "1px solid #d1d1d1",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: "flex", gap: "6px", marginRight: "8px" }}>
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#ff5f57",
                border: "1px solid #e0443e",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#febc2e",
                border: "1px solid #dea123",
              }}
            />
            <div
              style={{
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "#28c840",
                border: "1px solid #1aab29",
              }}
            />
          </div>
          {/* Title */}
          <div
            style={{
              flex: 1,
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 500,
              color: "#4a4a4a",
            }}
          >
            ✉️ Email Preview
          </div>
          <div style={{ width: "52px" }} />
        </div>

        {/* Email Header */}
        <div
          style={{
            padding: "16px 20px",
            borderBottom: "1px solid #e5e5e5",
            background: "#fff",
          }}
        >
          {/* Subject */}
          <div
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#1a1a1a",
              marginBottom: "12px",
            }}
          >
            {subject}
          </div>

          {/* From/To info */}
          <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            {/* Avatar */}
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "16px",
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              {from.charAt(0).toUpperCase()}
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "8px",
                  marginBottom: "2px",
                }}
              >
                <span style={{ fontWeight: 600, color: "#1a1a1a", fontSize: "14px" }}>
                  {from.split("@")[0]}
                </span>
                <span style={{ color: "#9ca3af", fontSize: "12px" }}>
                  &lt;{from}&gt;
                </span>
              </div>
              <div style={{ fontSize: "12px", color: "#6b7280" }}>
                To: {to}
              </div>
            </div>

            {/* Timestamp */}
            <div
              style={{
                fontSize: "12px",
                color: "#9ca3af",
                whiteSpace: "nowrap",
              }}
            >
              {new Date().toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>

        {/* Email Content */}
        <div
          style={{
            background: "#ffffff",
            padding: "24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <iframe
            srcDoc={html}
            style={{
              width: `${width}px`,
              height: "700px",
              border: "none",
              display: "block",
              background: "#fff",
            }}
            title="Email Preview"
          />
        </div>

        {/* Footer */}
        <div
          style={{
            background: "#f5f5f5",
            padding: "8px 16px",
            borderTop: "1px solid #e5e5e5",
            fontSize: "11px",
            color: "#9ca3af",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span>Email width: {width}px</span>
          <span>Theme: {theme}</span>
        </div>
      </div>
    </div>
  );
};

export default EmailPreview;
