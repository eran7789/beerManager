import { Navigation } from 'react-native-navigation';

import store from './store'

import Login from './components/screens/login';
import Search from './components/screens/search';
import UserMain from './components/screens/user-main';
import Add from './components/screens/add';
import Admin from './components/screens/admin';

const navigatorStyle = {
	navBarTranslucent: true,
	drawUnderNavBar: false,
	navBarTextColor: 'white',
	navBarButtonColor: 'white',
	statusBarTextColorScheme: 'light',
	drawUnderTabBar: false
};

export const registerScreens = (store, Provider) => {
	Navigation.registerComponent('screens.Login', () => Login, store, Provider);
	Navigation.registerComponent('screens.Search', () => Search, store, Provider);
	Navigation.registerComponent('screens.UserMain', () => UserMain, store, Provider);
	Navigation.registerComponent('screens.Add', () => Add, store, Provider);
	Navigation.registerComponent('screens.Admin', () => Admin, store, Provider);
};

export const goToLogin = () => Navigation.startSingleScreenApp({
  screen: {
    screen: 'screens.Login',
    title: 'Login',
    navigatorStyle
  }
});

const tabs = [
  {
    screen: 'screens.Search',
    title: 'Find your beer',
    label: 'Search',
    icon: require('./assests/icons/search.png')
  },
  {
    screen: 'screens.UserMain',
    title: 'Find your beer',
    label: 'Explore',
    icon: require('./assests/icons/explore.png')
  },
  {
    screen: 'screens.UserMain',
    title: 'My favourites',
    label: 'Favourites',
    icon: require('./assests/icons/favourites.png')
  },
  {
    screen: 'screens.Add',
    title: 'Add new beer',
    label: 'Add',
    icon: require('./assests/icons/add.png')
  }
];

const adminTab = {
  screen: 'screens.Admin',
  title: 'Admin console',
  label: 'Admin',
  icon: require('./assests/icons/admin.png')
}

export const goToUserMain = () => Navigation.startTabBasedApp({
  tabs: store.getState().auth.isAdmin
    ? [...tabs, adminTab]
    : tabs
});