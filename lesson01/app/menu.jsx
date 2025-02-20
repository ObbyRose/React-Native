import { StyleSheet, Appearance, Platform, SafeAreaView, ScrollView, View, Text, Image } from "react-native";

import { Colors } from "@/constants/Colors";
import { ScrollView } from "react-native-gesture-handler";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();

    const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

    const styles = createStyles(theme, colorScheme);

    const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

    return (
        <Container> 
            <Flatlist data={[]} renderItem={({ item }) => (
                
            )} ></Flatlist>
        </Container>
    )
}

function createStyles( theme, colorScheme) {
    return StyleSheet.create({

    });
}