/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//Import a library to help create a component
import React from 'react';
import { View } from 'react-native';
import { Header } from './src/components/Header';
import { AlbumList } from './src/components/AlbumList';

//Creating component
export const App = () => ( 
  < View style={{ flex: 1 }} >
    < Header headerText={'Taylor Swift'} />
    < AlbumList />
  </ View>
);

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>Welcome to React Native!</Text>
//         <Text style={styles.instructions}>To get started, edit App.js</Text>
//         <Text style={styles.instructions}>{instructions}</Text>
//         <ProgressBarAndroid />
//         <ProgressBarAndroid styleAttr="Horizontal" />
//         <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
//         <ProgressBarAndroid
//           styleAttr="Horizontal"
//           indeterminate={false}
//           progress={0.5}
//         />

//         </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
