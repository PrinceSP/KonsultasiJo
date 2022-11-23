import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {IconBack} from '../../../assets'

const Header = ({title, onPress}) => {
  return (

    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.back}>
          <IconBack/>
        </View>
      </TouchableOpacity>
      <View style={{alignItems:'center', marginRight:35}} >
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({

  container: {
    backgroundColor:'white',
    paddingVertical: 16,
    // marginBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',

  },
  back: {
    paddingVertical: 10,
    //paddingHorizontal: 10,
  },
  text: {
    fontSize: 30,
    color: '#000',
  },

  // container: {
  //   paddingLeft: 20,
  //   paddingVertical: 40,
  //   backgroundColor: '#06659A',
  // },
  // text: {
  //   fontSize: 36,
  //   color: 'white',
  // },
  // back: {
  //   width: 100,
  //   height: 100,
  // },
});

// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
// import {IconBack} from '../../../assets';
// import {Gap} from '../../atoms';

// const Header = ({title, onBack}) => {
//   return (
//     <View style={styles.container}>
//       {onBack && (
//         <TouchableOpacity onPress={onBack}>
//           <View style={styles.back}>
//             <IconBack />
//           </View>
//         </TouchableOpacity>
//       )}
//       <Gap width={26} />
//       <Text style={styles.text}>{title}</Text>
//     </View>
//   );
// };

// export default Header;

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     paddingLeft: 24,
//     paddingVertical: 38,
//     marginBottom: 24,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   back: {
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//   },
//   text: {
//     fontSize: 36,
//   },
// });

// 1
// import React from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// const Header = ({title}) => {
//     return (
//     <View style={styles.container}>
//         <Text style={styles.text}>{title}</Text>
//     </View>
//     );
// };

// export default Header;

// const styles = StyleSheet.create({
//     container: {
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 20,
//         color: '#024529',
//         fontWeight: 'bold',
//     },
// });
