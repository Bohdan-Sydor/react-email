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
  backgroundColor = "#E85C41",
}: ButtonProps) => {
  return (
    <ReactEmailButton
      href={href}
      style={{
        backgroundColor,
        color: "#ffffff",
        // height: "48px",
        fontSize: "16px",
        fontWeight: "bold",
        // lineHeight: "18px",
        textAlign: "center",
        borderRadius: "4px",
        padding: "15px 30px",
      }}
    >
      {children}
    </ReactEmailButton>
  );
};

export default Button;
