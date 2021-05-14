import React from "react";
import { ScrollView, StatusBar } from "react-native";

import covidQuestions from "../data/covidQuestions";
import covidSymptoms from "../data/covidSymptomTracker"

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Covid19 Symptom Data Collection Servey"
      color="#777"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Covid19 Survey",
          questions: covidQuestions,
          color: "#0AAFF1"
        })
      }
    />
    <RowItem
      name="Long Covid19 Prediction Servey"
      color="#777"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Covid19 Survey",
          questions: covidSymptoms,
          color: "#0AAFF1"
        })
      }
    />
  </ScrollView>
);
