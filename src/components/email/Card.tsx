import { Section } from "@react-email/components";

export interface CardProps {
  children: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
    <Section
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "24px",
        padding: "48px",
        border: "1px solid #e5e5e5",
      }}
    >
      {children}
    </Section>
  );
};

export default Card;
