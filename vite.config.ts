import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      {
        name: "resend-proxy",
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url !== "/api/send-test" || req.method !== "POST") {
              next();
              return;
            }

            if (!env.RESEND_API_KEY) {
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ message: "Missing RESEND_API_KEY in .env." }));
              return;
            }

            const chunks: Buffer[] = [];
            req.on("data", (chunk) => chunks.push(chunk));
            req.on("end", async () => {
              try {
                const body = JSON.parse(Buffer.concat(chunks).toString("utf-8"));
                const response = await fetch("https://api.resend.com/emails", {
                  method: "POST",
                  headers: {
                    Authorization: `Bearer ${env.RESEND_API_KEY}`,
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(body),
                });

                const text = await response.text();
                res.statusCode = response.status;
                res.setHeader("Content-Type", "application/json");
                res.end(text);
              } catch (error) {
                res.statusCode = 500;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ message: "Failed to send test email." }));
              }
            });
          });
        },
      },
    ],
  };
});
