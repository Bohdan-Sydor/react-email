import type { ReactNode } from "react";
import { Tailwind as ReactEmailTailwind } from "@react-email/tailwind";

export type EmailTheme = "justanswer" | "fount";

export interface TailwindProps {
  children: ReactNode;
  theme?: EmailTheme;
}

const THEME_TOKENS: Record<EmailTheme, { primary: string; url: string }> = {
  justanswer: {
    primary: "#E85C41",
    url: "#00B4D8",
  },
  fount: {
    primary: "#3FD056",
    url: "#3FD056",
  },
};

export const Tailwind = ({ children, theme = "justanswer" }: TailwindProps) => {
  const { primary, url } = THEME_TOKENS[theme];

  return (
    <ReactEmailTailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary,
              url,
            },
          },
        },
      }}
    >
      {children}
    </ReactEmailTailwind>
  );
};

export default Tailwind;
