import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Search from "./src/screens/Search";

const navigator = createStackNavigator(
  {
    Search: Search,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions:{
      title: 'Yelp Search',
    },
  });

export default createAppContainer(navigator);