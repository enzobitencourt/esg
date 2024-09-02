import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Icon } from 'react-native-elements';

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Accordion = ({ title, children, tipo }) => {
    const [expanded, setExpanded] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
        Animated.timing(animation, {
            toValue: expanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const maxHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 100], // Adjust this value as needed
    });

    return (
        <View style={styles.accordionContainer}>
            <TouchableOpacity onPress={toggleExpand} style={styles.header}>
                <View style={styles.div}>
                    <Icon name={tipo === 'entenda' ? 'question' : 'calculator'} reverse color='#BFE0E0' reverseColor='black' type='antdesign' size={20} />
                    <Text style={styles.headerText}>{title}</Text>
                </View>
                <Icon name={expanded ? 'up' : 'down'} type='antdesign' size={20} />
            </TouchableOpacity>
            <Animated.View style={[styles.content, { height: maxHeight }]}>
                {children}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    accordionContainer: {
        width: '100%',
    },
    header: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 16,
        fontWeight: '500',
    },
    content: {
        overflow: 'hidden',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    div:{
        display: 'flex',
        flexDirection: 'row',
        gap: '5%',
        alignItems:'center'
    }
});

export default Accordion;
