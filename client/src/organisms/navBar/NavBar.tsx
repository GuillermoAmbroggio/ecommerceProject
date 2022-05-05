import { StackNavigationProp } from '@react-navigation/stack';
import { Button, Hoverable, Icon, Link, Text } from 'atoms';
import { useClientStore, useScreenSize, useTheme } from 'hooks';
import { RootParamListWeb } from 'navigation/stacks/rootWeb/rootParamListWeb';
import InputSearch from 'organisms/inputSearch/InputSearch';
import { useLogoutWeb } from 'particules/serverStore/mutations/auth/useLogout';
import React, { useEffect, useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { Login, Register } from 'screens/account';
import { Layout } from 'utils';
import NavBarStyle from './navBar.styles';

interface INavBarProps {
  navigation: StackNavigationProp<RootParamListWeb, 'Home'>;
}

type ILinkMenu = {
  title: string;
  navigation: 'Home' | 'Company' | 'Store' | 'Contact';
};

const NavBar: React.FC<INavBarProps> = ({ navigation }) => {
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const screen = useScreenSize();
  const styles = NavBarStyle();
  const theme = useTheme();
  const { dispatch, authentication } = useClientStore();
  const webLogout = useLogoutWeb();
  const { Row } = Layout;
  useEffect(() => {
    if (webLogout.isError) {
      dispatch({ type: 'LOADING', payload: false });
    }
  }, [webLogout.isError, dispatch]);
  const linksMenu: ILinkMenu[] = [
    { title: 'INICIO', navigation: 'Home' },
    {
      title: 'NOSOTROS',
      navigation: 'Company'
    },
    {
      title: 'TIENDA',
      navigation: 'Store'
    },
    {
      title: 'CONTACTANOS',
      navigation: 'Contact'
    }
  ];

  return (
    <>
      <View style={styles.container}>
        <Pressable
          style={styles.containerLogo}
          onPress={() => navigation.navigate('Home')}
        >
          <Image source={require('assets/icon.png')} style={styles.imageLogo} />
          <Text variant="bodyTitle">AGROINC</Text>
        </Pressable>
        <Row style={styles.containerRight}>
          {screen !== 'big' ? (
            <InputSearch />
          ) : (
            <Row style={styles.topMenu}>
              {linksMenu.map((e, i) => (
                <Hoverable key={i}>
                  {(hover: boolean) => (
                    <Link
                      variant="bodyBold"
                      underline={hover}
                      textStyle={[
                        styles.textsTopMenu,
                        {
                          fontSize: hover ? 20 : 16
                        }
                      ]}
                      text={e.title}
                      onPress={() => navigation.navigate(e.navigation)}
                    />
                  )}
                </Hoverable>
              ))}
            </Row>
          )}
          {screen === 'big' ? (
            authentication.user ? (
              <Hoverable
                onHoverIn={() => {
                  setShowAccountOptions(true);
                }}
              >
                {/* ---------Si existe usuario muestro el nombre--------- */}
                <Pressable
                  style={({ pressed }) => [
                    {
                      flexDirection: 'row',
                      alignItems: 'center',
                      opacity: pressed ? 0.5 : 1,
                      marginRight: 24
                    }
                  ]}
                  onPress={() => {
                    setShowAccountOptions(!showAccountOptions);
                  }}
                >
                  <Icon
                    name="user-circle"
                    color={theme.colors.primary}
                    size={24}
                  />
                  <Text style={{ marginLeft: 4, marginRight: 4 }}>
                    {authentication.user.name}
                  </Text>
                  <Icon name="chevron-down" color={theme.colors.primary} />
                </Pressable>
              </Hoverable>
            ) : (
              <Row style={{ marginRight: 24 }}>
                {/* ---------Si no existe usuario muestro botones de login/signup--------- */}
                <Button
                  title="Iniciar Sesión"
                  type="tertiary"
                  onPress={() => {
                    dispatch({
                      type: 'ALERT',
                      payload: {
                        config: { permanent: true, variant: undefined },
                        open: true,
                        content: <Login navigation={navigation} />
                      }
                    });
                  }}
                />
                <Button
                  title="Regístrate"
                  type="primary"
                  onPress={() => {
                    dispatch({
                      type: 'ALERT',
                      payload: {
                        config: { permanent: true, variant: undefined },
                        open: true,
                        content: (
                          <View style={{ width: 600 }}>
                            <Register navigation={navigation} />
                          </View>
                        )
                      }
                    });
                  }}
                />
              </Row>
            )
          ) : null}

          {/* ---------Icono del carrito--------- */}
          <Icon name="shopping-cart" color={theme.colors.primary} size={24} />
        </Row>
      </View>

      {/* ---------MENU DE OPCIONES FLOTANTE (MI CUENTA)--------- */}
      <View
        style={{
          position: 'relative',
          zIndex: 1,
          display: showAccountOptions ? 'flex' : 'none'
        }}
      >
        <Hoverable
          onHoverIn={() => {
            setShowAccountOptions(true);
          }}
          onHoverOut={() => setShowAccountOptions(false)}
        >
          <View
            style={{
              position: 'absolute',
              width: 200,
              right: 50,
              paddingVertical: 8,
              borderWidth: 1,
              borderRadius: 4,
              borderColor: theme.colors.primary,
              zIndex: 1,
              backgroundColor: theme.colors.background,
              top: -20
            }}
          >
            <Link
              text="Mi cuenta"
              underline={false}
              presseableStyle={{ paddingLeft: 16, paddingVertical: 8 }}
              onPress={() => {
                navigation?.navigate('Account');
              }}
            />
            <Link
              text="Mis compras"
              underline={false}
              presseableStyle={{ paddingLeft: 16, paddingVertical: 8 }}
            />
            <Link
              text="Cerrar sesión"
              underline={false}
              presseableStyle={{ paddingLeft: 16, paddingVertical: 8 }}
              onPress={() => {
                dispatch({ type: 'LOADING', payload: true });
                webLogout.mutate();
                setShowAccountOptions(false);
              }}
            />
          </View>
        </Hoverable>
      </View>
    </>
  );
};

export default NavBar;
