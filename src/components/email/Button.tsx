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
  // backgroundColor = "#E85C41",
}: ButtonProps) => {
  return (
    <ReactEmailButton
      href={href}
      className="px-6 py-3 text-white font-bold text-center rounded-md font-sans bg-primary"
    >
      {children}
    </ReactEmailButton>
  );
};

export default Button;
