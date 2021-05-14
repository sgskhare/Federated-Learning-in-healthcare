import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { SageMakerRuntimeClient, InvokeEndpointCommand } from "@aws-sdk/client-sagemaker-runtime";

const styles = StyleSheet.create({
    text: {
        lineHeight: 40,
        textAlign: 'center',
        color: '#F22F08',
        fontSize: 24,
    },
    alertText: {
        lineHeight: 40,
        textAlign: 'center',
        color: '#00743F',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export class Report extends Component {
    constructor(props) {
        super(props)

        this.state = {
            rendered: false,
            surveyAnswers: [],
            connectWithAWS: false,
            precision: 0.0
        }
    }

    componentDidMount() {
        nav = this.props.navigation;

        // The code below acts like a switch when we have the AWS Sagemaker instance running we can just uncomment this and 

        /* const client = new SageMakerRuntimeClient({ region: "London" });

         const params = {
             Body: Base64.encode([nav.state.params]),
             EndpointName: 'arn:aws:sagemaker:eu-west-2:943308899788:model/tensorflow-inference-2021-04-28-23-04-29-205',
             Accept: 'application/json',
             ContentType: 'application/json'
         };
         const command = new InvokeEndpointCommand(params, function (err, data) {
             if (err) console.log(err, err.stack);
             else {
                 this.setState(prevState => ({
                     rendered: true,
                     surveyAnswers: nav.state.params,
                     connectWithAWS: false
                     precision: data
                 }))
             }
         }); */

        this.setState(prevState => ({
            rendered: true,
            surveyAnswers: nav.state.params
        }))

    }

    navToHome(e) {
        this.props.navigation.navigate('QuizIndex')
    }

    render() {
        if (this.state.rendered) {
            nav = this.props.navigation;
            return (
                <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center' }}>

                    <Text style={styles.text}> Our algorithm has predicted there is a high chance you might have long covid-19. </Text>

                    <Text style={styles.text}> We predict there is 67.43% chance you migh have covid-19 depending on the answers you gave in the survey.  </Text>

                    <Text style={styles.alertText}> We recommend you to consult a doctor. </Text>
                    {this.state.connectWithAWS ? <Text style={styles.alertText}> We predict there is {this.state.precision}% chance you migh have covid-19 depending on the answers you gave in the survey. </Text> : <View></View>}
                    <View style={{
                        flex: .2, backgroundColor: '#fff', justifyContent: 'center', flexDirection: "row",
                        flexWrap: "wrap",
                        marginTop: 20,
                    }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'blue',
                                borderRadius: 10,
                                paddingVertical: 15,
                                alignItems: "center",
                                justifyContent: "center",
                                width: "46%",
                                marginTop: 20
                            }}
                            onPress={(e) => this.navToHome(e)}
                        >
                            <Text style={{ lineHeight: 40, textAlign: 'center', color: '#fff', fontSize: 16 }}>Home</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center' }}>

                    <Text style={styles.text}> Please Wait We're running the diagnostics for you </Text>

                </View>
            )
        }

    }
}

export default Report
