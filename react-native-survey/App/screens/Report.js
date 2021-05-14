import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { SagemakerEdgeClient, GetDeviceRegistrationCommand } from "@aws-sdk/client-sagemaker-edge";

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
            rendered: false
        }
    }

    componentDidMount() {
        this.setState(prevState => ({
            rendered: true
        }))
    }

    navToHome(e) {
        this.props.navigation.navigate('QuizIndex')
    }

    render() {
        if (this.state.rendered) {
            // nav = this.props.navigation;
            // console.log(nav.state.params)
        }
        return (
            <View style={{ flex: 2, backgroundColor: '#fff', justifyContent: 'center' }}>

                <Text style={styles.text}> Our algorithm has predicted there is a high chance you might have long covid-19. </Text>

                <Text style={styles.text}> We predict there is 67.43% chance you migh have covid-19 depending on the answers you gave in the survey.  </Text>

                <Text style={styles.alertText}> We recommend you to consult a doctor. </Text>
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
}

export default Report
