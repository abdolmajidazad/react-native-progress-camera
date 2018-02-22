import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {CircularProgress, AnimatedCircularProgress} from 'react-native-circular-progress';

const MAX_POINTS = 100;

export default class Example extends React.Component {
    state = {
        isMoving: false,
        pointsDelta: 0,
        points: 0,
        number: 0,
        timer: null,
        name: 'majid'
    };

    addOne = this.addOne.bind(this);
    stopTimer = this.stopTimer.bind(this);
    addOne() {
        if (100 < this.state.number+1) {
            return;
        } else {
            if (this.state.number === 0) {
                this.refs.circularProgress.performLinearAnimation(100, 10000);
            }
            this.timer = setTimeout(this.addOne, 100);
            if(this.state.points<10){
                this.setState({number: this.state.number + 1, points : this.state.number + 1});
            }else{
                this.setState({points : 0});
            }
        }
    }
    stopTimer() {
        this.setState({number : 0});
        this.refs.circularProgress.performLinearAnimation(this.state.number, 1);
        alert(this.state.number);
        clearTimeout(this.timer);
    }

    render() {
        return (
            <View
                style={styles.container}>
                <Text style={styles.pointsDeltaActiveNew}>{this.state.name}</Text>
                <Text style={styles.pointsDeltaActiveNew}>{this.state.number}</Text>
                <AnimatedCircularProgress
                    size={100}
                    width={5}
                    fill={this.state.number}
                    ref='circularProgress'
                    tintColor="#AF0706"
                    rotation={0}
                    backgroundColor="#3d5875"
                >
                    {
                        () => (
                            <TouchableOpacity style={styles.points} onPressIn={this.addOne} onPressOut={this.stopTimer}>
                                <View style={styles.pointsDeltaActive}></View>
                            </TouchableOpacity>
                        )
                    }

                </AnimatedCircularProgress>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    points: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 5,
        left: 5,
        width: 80,
        height: 80,
        textAlign: 'center',
        color: '#7591af',
        fontSize: 50,
        fontWeight: "100"
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#152d44',
        padding: 50
    },
    pointsDelta: {
        color: '#4c6479',
        fontSize: 50,
        fontWeight: "100"
    },
    pointsDeltaActive: {

        width: 80,
        height: 80,
        borderRadius: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: "#fff",

    },

    pointsDeltaActiveNew: {
        color: "#fff"
    }
});