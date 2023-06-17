import React from "react";
import { Modal, Center, NativeBaseProvider, HStack, View, Avatar, Text, Image, ScrollView } from "native-base";

const NotificationModal = ({ isOpen, close }) => {


    return <>
        <Modal isOpen={true} onClose={close}>
            <Modal.Content width={350} maxWidth="400px" height={"full"} >

                <Modal.Header>Notification</Modal.Header>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <Modal.Body >

                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>


                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>


                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>


                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>
                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>


                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>


                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>


                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>


                        <HStack space={3} mt={5} justifyContent="space-between" backgroundColor="white" padding={3} borderRadius={10}  >
                            <View display={'flex'} flexDirection={'row'} justifyItems="center" >
                                <Image
                                    borderRadius={100}
                                    source={require("../../assets/icons/notification.png")}
                                    style={{
                                        width: 46,
                                        height: 46,
                                        borderRadius: 100,
                                    }}
                                    alt="logo"
                                />
                                <View marginLeft={3} >
                                    <Text bold fontSize="xl">USD is increase</Text>
                                    <Text fontSize="sm">Date: 12-02-20223</Text>
                                </View>
                            </View>

                        </HStack>


                    </Modal.Body>

                </ScrollView>

            </Modal.Content>
        </Modal>
    </>;
};

export default () => {
    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <NotificationModal />
            </Center>
        </NativeBaseProvider>
    );
};
