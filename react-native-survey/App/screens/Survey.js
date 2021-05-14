import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { CustomButton, CustomButtonContainer } from "../components/CustomButton";
import { CustomAlert } from "../components/CustomAlert";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#282726",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  }
});

class Survey extends React.Component {
  state = {
    totalCount: this.props.navigation.getParam("questions", []).length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    surveryAnswerArray: []
  };

  recordInput = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.answerCorrect = true;
          nextState.surveryAnswerArray = [...state.surveryAnswerArray, 1];
        } else {
          nextState.answerCorrect = false;
          nextState.surveryAnswerArray = [...state.surveryAnswerArray, 0];
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount && state.totalCount == 8) {
        return this.props.navigation.popToTop();
      }
      if (nextIndex >= state.totalCount && state.totalCount == 10) {
        return this.props.navigation.navigate("Report", this.state.surveryAnswerArray);
      }

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  render() {
    const questions = this.props.navigation.getParam("questions", []);
    const question = questions[this.state.activeQuestionIndex];

    return (
      <View
        style={[
          styles.container
        ]}
      >
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={styles.safearea}>
          <View>
            <Text style={styles.text}>{question.question}</Text>

            <CustomButtonContainer>
              {question.answers.map(answer => (
                <CustomButton
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.recordInput(answer.correct)}
                />
              ))}
            </CustomButtonContainer>
          </View>

          <Text style={styles.text}>
            {`${this.state.activeQuestionIndex + 1}/${this.state.totalCount}`}
          </Text>
        </SafeAreaView>
        <CustomAlert
          correct={true}
          visible={this.state.answered}
        />
      </View>
    );
  }
}

export default Survey;
