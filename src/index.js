require('dotenv').config();

const chalk = require('chalk');
const minimist = require('minimist');

const { number } = minimist(process.argv.slice(2), { string: 'number' });

const saveReferral = require('./saveReferral');
const validatePhoneNumber = require('./validatePhoneNumber');
const generator = require('./generator');

const main = async () => {
  try {
    const validated = await validatePhoneNumber(number);
    if (validated) {
      const referral = {
        phone_number: validated,
        referral_code: generator(),
        principal_id: 'ADMIN',
      };
      await saveReferral(referral);
      console.log(chalk.green(`Created shortcode "${referral.referral_code}" for "${validated}"`))
    }
  } catch (err) {
    // throw err;
    console.log(chalk.red(err.message));
  }
};

main();

