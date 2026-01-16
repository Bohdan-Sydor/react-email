import { Img } from "@react-email/components";

export interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
}

export const Header = ({
  logoSrc = "https://ww2-secure.justanswer.com/static/Touchpoint/Fully_Branded_Javatar/Logo_JAvatar_www_askadoctor_help.png",
  logoAlt = "Logo",
}: HeaderProps) => {
  return (
    <Img
      src={logoSrc}
      alt={logoAlt}
      style={{
        height: "40px",
        width: "auto",
      }}
    />
  );
};

export default Header;
