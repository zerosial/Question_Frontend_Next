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
    case "MEMBER_INFO":
      BadgeComponent = <BlueBadge badge="회원정보" />;
      break;
    case "CAR_SHARING":
      BadgeComponent = <GreenBadge badge="카셰어링" />;
      break;
    case "VEHICLE_CONTROL":
      BadgeComponent = <RedBadge badge="차량관제" />;
      break;
    case "OTHER":
      BadgeComponent = <YellowBadge badge="기타" />;
      break;
    default:
      BadgeComponent = <GrayBadge badge={badge} />;
  }

  return <>{BadgeComponent}</>;
};
