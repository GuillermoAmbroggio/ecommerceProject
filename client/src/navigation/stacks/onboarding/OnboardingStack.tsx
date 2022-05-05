import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { OnboardingParamList } from './onboardingParamList';
import { StepOne, StepThree, StepTwo } from 'screens/onboarding';
import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer
} from '@react-navigation/native';
import { ColorSchemeName, View } from 'react-native';
import { OnboardingLinkingConfig } from './onboardingLinkingConfig';

const Tab = createMaterialTopTabNavigator<OnboardingParamList>();

interface IOnboardingStackProps {
    colorScheme: ColorSchemeName;
}

function MyTabBar(): JSX.Element {
    return <View />;
}

const OnboardingStack = ({
    colorScheme
}: IOnboardingStackProps): JSX.Element => {
    return (
        <NavigationContainer
            linking={OnboardingLinkingConfig}
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <Tab.Navigator tabBar={() => <MyTabBar />}>
                <Tab.Screen name="StepOne" component={StepOne} />
                <Tab.Screen name="StepTwo" component={StepTwo} />
                <Tab.Screen name="StepThree" component={StepThree} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default OnboardingStack;
