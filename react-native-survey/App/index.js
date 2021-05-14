import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SurveyIndex from "./screens/SurveyIndex";
import Survey from "./screens/Survey";
import Report from "./screens/Report";

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: SurveyIndex,
    navigationOptions: {
      headerTitle: "Covid-19 Symptom Servey Application "
    }
  },
  Quiz: {
    screen: Survey,
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
