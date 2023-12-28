const conversionMap = {
  회원정보: "MEMBER_INFO",
  카셰어링: "CAR_SHARING",
  차량관제: "VEHICLE_CONTROL",
  기타: "OTHER",
  "개인정보 변경": "PERSONAL_INFO_CHANGE",
  소속변경: "AFFILIATION_CHANGE",
  "면허/카드 등록": "LICENSE_CARD_REGISTRATION",
  예약문의: "RESERVATION_INQUIRY",
  반납문의: "RETURN_INQUIRY",
  결제문의: "PAYMENT_INQUIRY",
  도어제어문의: "DOOR_CONTROL_INQUIRY",
};

export const convertKoreanToEnglish = (text) => {
  return conversionMap[text] || "OTHER";
};
