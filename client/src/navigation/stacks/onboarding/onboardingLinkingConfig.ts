import * as Linking from 'expo-linking';

const config = {
    screens: {
        StepOne: '/onboarding/stepone',
        StepTwo: '/onboarding/steptwo',
        StepThree: '/onboarding/stepthree'
    }
};

export const OnboardingLinkingConfig = {
    prefixes: [Linking.makeUrl('/')],
    config
};
