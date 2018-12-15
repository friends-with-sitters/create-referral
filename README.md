# Create Referral

An admin application used to manually create referrals for our system; for those parents or babysitters that may not have a network to rely on.

**Admin referrals are strictly vetted by the employee themselves before a code is sent.**

## Getting Started

The following configuration is required in a `.env` file:

```
REFERRAL_TABLE
AWS_PROFILE #if a profile is configured
AWS_REGION
```

## Creating a Referral

Once `npm install` has been executed, you can create a referral by providing a mobile phone number in either E.164 or national format and running the following command:

```
npm start -- --number 07500XXXXXX
```