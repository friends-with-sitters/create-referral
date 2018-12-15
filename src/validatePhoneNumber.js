const Pinpoint = require('aws-sdk/clients/pinpoint');
const LibPhoneNumber = require('google-libphonenumber');
const PNF = LibPhoneNumber.PhoneNumberFormat;

const phone = LibPhoneNumber.PhoneNumberUtil.getInstance();

const pinpoint = new Pinpoint({ region: 'us-east-1' });

module.exports = async (raw, CountryCode = 'GB') => {
  const PhoneNumber = phone.parseAndKeepRawInput(raw, CountryCode);
  if (!phone.isValidNumber(PhoneNumber)) {
    throw new Error(`The phone number "${raw}" is invalid.`);
  }
  const formattedPhoneNumber = phone.format(PhoneNumber, PNF.E164);
  const NumberValidateRequest = { PhoneNumber: formattedPhoneNumber };
  const validated = await pinpoint.phoneNumberValidate({ NumberValidateRequest }).promise();
  const { NumberValidateResponse: { PhoneType } } = validated;
  if (PhoneType !== 'MOBILE') {
    throw new Error(`Expected type "MOBILE", received "${PhoneType}" for "${raw}"`);
  }
  return formattedPhoneNumber;
};