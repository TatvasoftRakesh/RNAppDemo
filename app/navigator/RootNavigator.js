import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from '../redux/store'
import { createStackNavigator } from '@react-navigation/stack';
import SampleScreenContainer from '../container/SampleScreenContainer';

const Stack = createStackNavigator();

class RootNavigator extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="SampleScreenContainer"
                                component={SampleScreenContainer}
                                options={{ title: 'Choose Project' }}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </View>
            </Provider>
        );
    }
}

export default RootNavigator;
