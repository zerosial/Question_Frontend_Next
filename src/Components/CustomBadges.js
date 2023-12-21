import {
  GrayBadge,
  RedBadge,
  YellowBadge,
  GreenBadge,
  BlueBadge,
} from "./Badges";

export const CustomBadges = ({ badge }) => {
  let BadgeComponent;

  switch (badge) {
    case "회원정보":
      BadgeComponent = <BlueBadge badge={badge} />;
      break;
    case "카셰어링":
      BadgeComponent = <GreenBadge badge={badge} />;
      break;
    case "차량관제":
      BadgeComponent = <RedBadge badge={badge} />;
      break;
    case "기타":
      BadgeComponent = <YellowBadge badge={badge} />;
      break;
    default:
      BadgeComponent = <GrayBadge badge={badge} />;
  }

  return <>{BadgeComponent}</>;
};
