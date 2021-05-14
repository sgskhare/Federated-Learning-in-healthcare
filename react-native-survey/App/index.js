import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import QuizIndex from "./screens/QuizIndex";
import Quiz from "./screens/Quiz";
import Report from "./screens/Report";

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Covid-19 Symptom Servey Application "
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
    })
  },
  Report: {
    screen: Report,
    navigationOptions: {
      headerTitle: "Report"
    }
  }
});

export default createAppContainer(MainStack);
