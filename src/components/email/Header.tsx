import { Img } from "@react-email/components";

export interface HeaderProps {
  logoSrc?: string;
  logoAlt?: string;
  logoHeight?: string;
}

export const Header = ({
  logoSrc = "https://ww2-secure.justanswer.com/static/Touchpoint/Fully_Branded_Javatar/Logo_JAvatar_www_askadoctor_help.png",
  logoAlt = "Logo",
  logoHeight = "40px",
}: HeaderProps) => {
  return (
    <Img
      src={logoSrc}
      alt={logoAlt}
      style={{
        height: logoHeight,
        width: "auto",
      }}
    />
  );
};

export default Header;
