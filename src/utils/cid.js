export const verifyCid = (cid) => {
  if (!cid) return false;
  let idCardNumber = cid;
  if (typeof cid === 'number') {
    idCardNumber = idCardNumber.toString();
  }
  const cidArr = idCardNumber.toString().split('');
  const regex = /^[0-9]\d*$/;
  if (idCardNumber.match(regex) == null) {
    return false;
  }
  if (cidArr.length < 1 || cidArr.length != 13) {
    return false;
  }
  let sum = 0;
  for (let i = 0; i < cidArr.length - 1; i++) {
    sum += parseInt(cidArr[i]) * (13 - i);
  }
  const checkDigit = (11 - (sum % 11)) % 10;
  if (cidArr[cidArr.length - 1] == checkDigit) {
    return true;
  }
  return false;
};

export const generateCid = () => {
  let result = '';
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digitalNumber = Math.floor(Math.random(9) * 10);
    result += digitalNumber;
    sum += parseInt(digitalNumber) * (13 - i);
  }
  const lastDigit = (11 - (sum % 11)) % 10;
  return `${result}${lastDigit}`;
};
