import { StyleSheet, StatusBar } from 'react-native';

export const CommonStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF',
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
        flex: 1,
        alignItems: 'left',
        marginLeft: 30,
        marginVertical: 10,
        backgroundColor: '#FFF',
    },
    title: {
        textAlign: 'left',
        marginVertical: 8,
        fontSize: 32,
        color: '#7D55C7',
        fontWeight: 'bold',
    },
    listContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'left',
        marginHorizontal: 10,
        marginVertical: 10,
        backgroundColor: '#FFF',
    },
    itemContainer: {
        width: '90%',
        height: 44,
        marginBottom: 10,
        backgroundColor: '#FFF',
        padding: 8,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#ece6ff',
        borderWidth: 1,
    },
    buttonContainer: {
        flexDirection: 'row', 
        justifyContent: 'flex-end',
        padding: 10,
    },
    itemButton: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 4,
        color: '#FFF',
    },
});