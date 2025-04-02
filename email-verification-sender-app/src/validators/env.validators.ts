import {
  optional,
  standardString,
  standardKey,
  standardUrl
} from './helpers.validators';

/**
 * Create here your own validators
 */
const envValidators = [
  standardString(
    ['clientId'],
    {
      code: 'InValidClientId',
      message: 'Client id should be 24 characters.',
      referencedBy: 'environmentVariables',
    },
    { min: 24, max: 24 }
  ),

  standardString(
    ['clientSecret'],
    {
      code: 'InvalidClientSecret',
      message: 'Client secret should be 32 characters.',
      referencedBy: 'environmentVariables',
    },
    { min: 32, max: 32 }
  ),

  standardKey(['projectKey'], {
    code: 'InvalidProjectKey',
    message: 'Project key should be a valid string.',
    referencedBy: 'environmentVariables',
  }),

  optional(standardString)(
    ['scope'],
    {
      code: 'InvalidScope',
      message: 'Scope should be at least 2 characters long.',
      referencedBy: 'environmentVariables',
    },
    { min: 2, max: undefined }
  ),

  standardUrl(['apiUrl'], {
    code: 'InvalidUrl',
    message: 'API URL should be a valid url.',
    referencedBy: 'environmentVariables',
  }),

  standardUrl(['authUrl'], {
    code: 'InvalidUrl',
    message: 'Auth URL should be a valid url.',
    referencedBy: 'environmentVariables',
  }),
  
];

export default envValidators;
