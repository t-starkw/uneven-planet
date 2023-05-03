import React from 'react';
import { View, Text } from 'react-native';
import { HStack } from "@react-native-material/core";
import { ThemeConsumer, ListItem, Icon, Avatar, Button } from '@rneui/themed';





export default function HomeScreen({ navigation }) {
    return (

        <>
            <ThemeConsumer>
                {({ theme }) => (
                    <View>
                        <Text style={{ fontSize: 40, fontWeight: 'bold' }}>Your Groups:</Text>
                        <ListItem topDivider bottomDivider>
                            <Icon name="inbox" type="material-community" color="grey" />
                            <ListItem.Content>
                                <ListItem.Title>Group 1</ListItem.Title>
                                <HStack m={4} spacing={6} >
                                    <ListItem.Subtitle>Members:</ListItem.Subtitle>
                                    <View>
                                        <Avatar
                                            size={32}
                                            rounded
                                            title="AB"
                                            containerStyle={{ backgroundColor: "blue" }}
                                        />
                                    </View>
                                    <View>
                                        <Avatar
                                            size={32}
                                            rounded
                                            title="CD"
                                            containerStyle={{ backgroundColor: "purple" }}
                                        />
                                    </View>
                                    <View>
                                        <Avatar
                                            size={32}
                                            rounded
                                            title="EF"
                                            containerStyle={{ backgroundColor: "pink" }}
                                        />
                                    </View>
                                    <View>
                                        <Avatar
                                            size={32}
                                            rounded
                                            title="GH"
                                            containerStyle={{ backgroundColor: "green" }}
                                        />
                                    </View>
                                </HStack>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        <ListItem bottomDivider>
                            <Icon name="trash-can-outline" type="material-community" color="grey" />
                            <ListItem.Content>
                                <ListItem.Title>Group 2</ListItem.Title>
                                <HStack m={4} spacing={6} >
                                    <ListItem.Subtitle>Members:</ListItem.Subtitle>
                                    <View>
                                        <Avatar
                                            size={32}
                                            rounded
                                            title="AB"
                                            containerStyle={{ backgroundColor: "blue" }}
                                        />
                                    </View>
                                    <View>
                                        <Avatar
                                            size={32}
                                            rounded
                                            title="CD"
                                            containerStyle={{ backgroundColor: "purple" }}
                                        />
                                    </View>
                                    <View>
                                        <Avatar
                                            size={32}
                                            rounded
                                            title="EF"
                                            containerStyle={{ backgroundColor: "pink" }}
                                        />
                                    </View>
                                    <View>
                                        <Avatar
                                            size={32}
                                            rounded
                                            title="GH"
                                            containerStyle={{ backgroundColor: "green" }}
                                        />
                                    </View>
                                </HStack>
                            </ListItem.Content>
                            <ListItem.Chevron />
                        </ListItem>
                        <Button type="solid" color={theme.colors.secondaryDark}>
                           
                            <Icon name="add-circle" color="white" size={50} />
                        </Button>
                    </View>
                )}
            </ThemeConsumer>
        </>
    );
}