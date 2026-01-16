import { useState, useEffect } from "react";
import { render } from "@react-email/render";
import { WelcomeEmail } from "./emails/WelcomeEmail";

type EmailTemplate = "welcome";

interface EmailConfig {
  userName: string;
  companyName: string;
}

function App() {
  const [activeTemplate, setActiveTemplate] = useState<EmailTemplate>("welcome");
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [config, setConfig] = useState<EmailConfig>({
    userName: "John",
    companyName: "Acme Inc",
  });

  useEffect(() => {
    const renderEmail = async () => {
      let rendered = "";

      switch (activeTemplate) {
        case "welcome":
          rendered = await render(
            <WelcomeEmail
              userName={config.userName}
              companyName={config.companyName}
            />
          );
          break;
      }

      setHtml(rendered);
    };

    renderEmail();
  }, [activeTemplate, config]);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(html);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">
              React Email Sandbox
            </h1>
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
          {/* Sidebar */}
          <aside className="col-span-3">
            {/* Template Selector */}
            <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                Email Templates
              </h2>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveTemplate("welcome")}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTemplate === "welcome"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  Welcome Email
                </button>
              </div>
            </div>

            {/* Configuration */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">
                Configuration
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    User Name
                  </label>
                  <input
                    type="text"
                    value={config.userName}
                    onChange={(e) =>
                      setConfig({ ...config, userName: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={config.companyName}
                    onChange={(e) =>
                      setConfig({ ...config, companyName: e.target.value })
                    }
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </aside>

          {/* Main Preview Area */}
          <main className="col-span-9">
            {/* Actions Bar */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                {activeTemplate === "welcome" && "Welcome Email"}
              </h2>
              <button
                onClick={copyToClipboard}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  copied
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                {copied ? "✓ Copied!" : "Copy HTML"}
              </button>
            </div>

            {/* Email Preview */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-50 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <span className="text-xs text-gray-500 ml-2">
                  Email Preview (600px)
                </span>
              </div>
              <div className="flex justify-center bg-gray-100 p-8">
                {html ? (
                  <iframe
                    srcDoc={html}
                    className="w-[600px] h-[700px] bg-white border border-gray-200 rounded shadow-lg"
                    title="Email Preview"
                  />
                ) : (
                  <div className="w-[600px] h-[700px] bg-white border border-gray-200 rounded shadow-lg flex items-center justify-center">
                    <p className="text-gray-400">Loading preview...</p>
                  </div>
                )}
              </div>
            </div>

            {/* Raw HTML View */}
            <details className="mt-6">
              <summary className="cursor-pointer text-sm font-medium text-gray-700 hover:text-gray-900">
                View Raw HTML
              </summary>
              <div className="mt-3 bg-gray-900 rounded-xl p-4 overflow-auto max-h-96">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap">
                  {html}
                </pre>
              </div>
            </details>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
