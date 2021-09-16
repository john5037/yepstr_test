export const convertStringToValue = (cardValue: string): number => {
  switch (cardValue) {
    case "ACE":
      return 1;
    case "JACK":
      return 11;
    case "QUEEN":
      return 12;
    case "KING":
      return 13;
    default:
      return parseInt(cardValue);
  }
};
export const  cardCompare = (value1: string, value2: string): number => {
  const Value1 = convertStringToValue(value1);
  const Value2 = convertStringToValue(value2);
  if (Value1 > Value2) {
    return 1;
  } else if (Value1 === Value2) {
    return 0;
  } else {
    return -1;
  }
};