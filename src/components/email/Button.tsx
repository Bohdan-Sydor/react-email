import { Button as ReactEmailButton } from "@react-email/components";

export interface ButtonProps {
  href: string;
  children: React.ReactNode;
  fullWidth?: boolean;
  backgroundColor?: string;
}

export const Button = ({
  href,
  children,
  fullWidth = false,
  backgroundColor = "#E85C41",
}: ButtonProps) => {
  return (
    <ReactEmailButton
      href={href}
      style={{
        backgroundColor,
        color: "#ffffff",
        fontFamily: "Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontWeight: "bold",
        lineHeight: "48px",
        display: "inline-block",
        textDecoration: "none",
        textAlign: "center",
        borderRadius: "4px",
        padding: "0 40px",
        width: fullWidth ? "100%" : "auto",
      }}
    >
      {children}
    </ReactEmailButton>
  );
};

export default Button;
