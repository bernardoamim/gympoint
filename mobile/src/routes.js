import React from 'react';
import PropTypes from 'prop-types';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HeaderLogo from '~/components/HeaderLogo';

import SignIn from '~/pages/SignIn';
import Checkins from '~/pages/Checkins';
import HelpOrders from '~pages/Orders/HelpOrders';
import ViewOrder from '~pages/Orders/ViewOrder';
import NewOrder from '~/pages/Orders/NewOrder';

// Props validation for the tabBarIcons
const CheckinsTabBarIcon = ({ tintColor }) => (
  <Icon name="edit-location" size={20} color={tintColor} />
);

const OrdersTabBarIcon = ({ tintColor }) => (
  <Icon name="live-help" size={20} color={tintColor} />
);

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        SignIn,
        App: createBottomTabNavigator(
          {
            Home: createStackNavigator(
              {
                Checkins,
              },
              {
                navigationOptions: {
                  tabBarLabel: 'Check-ins',
                  tabBarIcon: CheckinsTabBarIcon,
                },
                headerLayoutPreset: 'center',
                headerBackTitleVisible: false,
                defaultNavigationOptions: {
                  headerTintColor: '#000',
                  headerTitle: () => <HeaderLogo />,
                },
              }
            ),
            Orders: {
              screen: createStackNavigator(
                {
                  HelpOrders,
                  ViewOrder,
                  NewOrder,
                },
                {
                  navigationOptions: {
                    tabBarLabel: 'Pedir ajuda',
                    tabBarIcon: OrdersTabBarIcon,
                  },
                  headerBackTitleVisible: false,
                  defaultNavigationOptions: {
                    headerTintColor: '#000',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerBackImage: (
                      <Icon name="chevron-left" size={24} color="#000" />
                    ),
                    headerTitle: () => <HeaderLogo />,
                  },
                }
              ),
            },
          },
          {
            resetOnBlur: true,
            headerLayoutPreset: 'center',
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#EE4E62',
              inactiveTintColor: '#999999',
              style: {
                backgroundColor: '#fff',
              },
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'SignIn',
      }
    )
  );

CheckinsTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

OrdersTabBarIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
