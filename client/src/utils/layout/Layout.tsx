import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import layoutStyle from './layout.style';

interface ILayoutProps {
  style?: StyleProp<ViewStyle>;
  ph?: 16 | 60;
  pv?: 16 | 60;
}

interface LayoutSubComponent {
  Row: React.FC<ILayoutProps>;
  Column: React.FC<ILayoutProps>;
  Content: React.FC<ILayoutProps>;
}

const Layout: React.FC<ILayoutProps> & LayoutSubComponent = ({
  style,
  ph,
  children
}) => {
  const styles = layoutStyle();
  return (
    <View style={[styles.container, { paddingHorizontal: ph ?? ph }, style]}>
      {children}
    </View>
  );
};

const Row: React.FC<ILayoutProps> = ({ children, ph, style }) => {
  const styles = layoutStyle();
  return (
    <View style={[styles.row, { paddingHorizontal: ph ?? ph }, style]}>
      {children}
    </View>
  );
};

const Column: React.FC<ILayoutProps> = ({ children, ph, style }) => {
  return (
    <View style={[{ paddingHorizontal: ph ?? ph }, style]}>{children}</View>
  );
};

const Content: React.FC<ILayoutProps> = ({ children, ph, pv, style }) => {
  const styles = layoutStyle();
  return (
    <View
      style={[
        { paddingHorizontal: ph ?? ph, paddingVertical: pv ?? pv },
        styles.content,
        style
      ]}
    >
      {children}
    </View>
  );
};
Layout.Row = Row;
Layout.Column = Column;
Layout.Content = Content;

export default Layout;
