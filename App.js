import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ShowsResult from "./src/screens/ShowsResult";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultScreen: ShowsResult,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Boqivoy Foods",
    },
  }
);

export default createAppContainer(navigator);
