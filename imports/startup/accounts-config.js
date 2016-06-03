import { Accounts } from 'meteor/accounts-base';

accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});