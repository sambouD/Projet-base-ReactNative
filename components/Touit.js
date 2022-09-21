import { View, Text, StyleSheet } from 'react-native';

const Touit = (props) => {

    return(
        <View style={styles.container}>
            <Text>{props.pseudo}</Text>
            <Text>{props.message}</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderColor: "blue"
    }
});

export default Touit;