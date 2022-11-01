//import liraries
import moment from 'moment-timezone';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const TimeDelivery = ({ sender, item }) => {
  // console.log(moment().tz("Asia/Makassar").format());
    return (
        <View
            style={[styles.mainView, {
                justifyContent: 'flex-end',
            }]}
        >
            <Text style={{
                fontFamily: 'Poppins-Regular',
                fontSize: 10,
                color: sender ? "#fff" : "#9a9a9a"
            }}>
                {moment(item.sendTime).format('LLL')}
            </Text>

                <Icon
                    name = {"checkmark-done"}
                    type = "Ionicons"
                    style={{color: item.seen ? "#000" : "#fff" , fontSize: 15, marginLeft: 5}}
                />

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 2
    }
});

//make this component available to the app
export default TimeDelivery;
