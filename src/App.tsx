import { useState, useEffect } from "react";
import { render } from "@react-email/render";
import { WelcomeEmail } from "./emails/WelcomeEmail";

type EmailTemplate = "welcome" | "welcomeDeposit";
type PreviewMode = "rendered" | "html";
type SendState = "idle" | "sending" | "success" | "error";

const templateMeta: Record<EmailTemplate, { label: string; subject: string }> = {
  welcome: {
    label: "Welcome Email",
    subject: "Welcome to Acme Inc",
  },
  welcomeDeposit: {
    label: "Welcome Deposit",
    subject: "Your answer is on the way",
  },
};

const senderEmail = "onboarding@resend.dev";

function App() {
  const [activeTemplate, setActiveTemplate] = useState<EmailTemplate>("welcome");
  const [previewMode, setPreviewMode] = useState<PreviewMode>("rendered");
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [sendState, setSendState] = useState<SendState>("idle");
  const [sendMessage, setSendMessage] = useState("");

  useEffect(() => {
    const renderEmail = async () => {
      let rendered = "";

      switch (activeTemplate) {
        case "welcome":
          rendered = await render(<WelcomeEmail />);
          break;
      }

      setHtml(rendered);
      setSendState("idle");
      setSendMessage("");
    };

    renderEmail();
  }, [activeTemplate]);

  const copyToClipboard = async () => {
    if (!html) {
      return;
    }

    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const sendTestEmail = async () => {
    if (!recipientEmail.trim()) {
      setSendState("error");
      setSendMessage("Enter a recipient email address.");
      return;
    }

    if (!html) {
      setSendState("error");
      setSendMessage("Email HTML is not ready yet.");
      return;
    }

    setSendState("sending");
    setSendMessage("");

    try {
      const response = await fetch("/api/send-test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: senderEmail,
          to: [recipientEmail.trim()],
          subject: templateMeta[activeTemplate].subject,
          html,
        }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setSendState("error");
        setSendMessage(data?.message || "Failed to send test email.");
        return;
      }

      setSendState("success");
      setSendMessage(`Sent test email to ${recipientEmail.trim()}.`);
    } catch (error) {
      setSendState("error");
      setSendMessage("Failed to send test email.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">React Email Sandbox</h1>
            <p className="text-sm text-gray-500">
              Preview and test your email templates
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="http://localhost:6006"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Open Storybook
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-12 gap-6">
          <aside className="col-span-3 space-y-6">
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                Email Templates
              </h2>
              <div className="space-y-2">
                {Object.entries(templateMeta).map(([key, template]) => (
                  <button
                    key={key}
                    onClick={() => setActiveTemplate(key as EmailTemplate)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeTemplate === key
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    {template.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                Send Test Email
              </h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Recipient
                  </label>
                  <input
                    type="email"
                    value={recipientEmail}
                    onChange={(event) => setRecipientEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  onClick={sendTestEmail}
                  disabled={sendState === "sending"}
                  className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    sendState === "sending"
                      ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {sendState === "sending" ? "Sending..." : "Send Test Email"}
                </button>
                {sendMessage ? (
                  <p
                    className={`text-xs ${
                      sendState === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {sendMessage}
                  </p>
                ) : null}
                <p className="text-xs text-gray-500">
                  From: {senderEmail}
                </p>
              </div>
            </div>
          </aside>

          <main className="col-span-9">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {templateMeta[activeTemplate].label}
              </h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setPreviewMode("rendered")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      previewMode === "rendered"
                        ? "bg-white text-gray-900 shadow"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Rendered
                  </button>
                  <button
                    onClick={() => setPreviewMode("html")}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      previewMode === "html"
                        ? "bg-white text-gray-900 shadow"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    HTML
                  </button>
                </div>
                <button
                  onClick={copyToClipboard}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    copied
                      ? "bg-green-600 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {copied ? "Copied!" : "Copy HTML"}
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs text-gray-500 ml-2">
                  {previewMode === "rendered" ? "Email Preview (600px)" : "HTML Output"}
                </span>
              </div>
              <div className="flex justify-center bg-gray-100 p-8">
                {previewMode === "rendered" ? (
                  html ? (
                    <iframe
                      srcDoc={html}
                      className="w-[600px] h-[900px] bg-white border border-gray-200 rounded shadow-lg"
                      title="Email Preview"
                    />
                  ) : (
                    <div className="w-[600px] h-[900px] bg-white border border-gray-200 rounded shadow-lg flex items-center justify-center">
                      <p className="text-gray-400">Loading preview...</p>
                    </div>
                  )
                ) : (
                  <div className="w-full bg-gray-900 rounded-xl p-4 overflow-auto max-h-[900px]">
                    <pre className="text-xs text-gray-300 whitespace-pre-wrap">
                      {html}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
