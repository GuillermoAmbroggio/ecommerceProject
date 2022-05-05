import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import tabsStyle, { TabStyles } from './tabs.style';

interface ITabsProps {
  containerStyle?: StyleProp<ViewStyle>;
}
interface ITabsPropsSubcomponent {
  Tab: React.FC<ITabProps>;
}

interface ITabProps {
  active?: boolean;
  tabStyle?: StyleProp<ViewStyle>;
  size?: number;
}

const Tabs: React.FC<ITabsProps> & ITabsPropsSubcomponent = ({
  children,
  containerStyle
}) => {
  const styles = tabsStyle();

  return <View style={[styles.container, containerStyle]}>{children}</View>;
};
const Tab: React.FC<ITabProps> = ({ active = false, tabStyle, size = 10 }) => {
  const styles = TabStyles(active, size);
  return <View style={styles.tab} />;
};
Tabs.Tab = Tab;

export default Tabs;
