import React from 'react'
import { StyleSheet, Text, TextInput,  View, FlatList,Dimensions,Platform,PermissionsAndroid } from 'react-native'
import { Download } from '../../../assets';
import RNFetchBlob from "rn-fetch-blob";

const PHukumCard = ({item}) => {
  const windowWidth = Dimensions.get('window').width;
  console.log(item.file);
  // const fileUrl = 'https://firebasestorage.googleapis.com/v0/b/konsultasijo-d274e.appspot.com/o/files%2Ftesting-react-native-apps-ebook-by-codemagic.pdf?alt=media&token=f1cd9977-0ed5-49d7-8240-3d33f6bfa7a7';
  //
  // const checkPermission = async () => {
  //
  //   // Function to check the platform
  //   // If Platform is Android then check for permissions.
  //
  //   if (Platform.OS === 'ios') {
  //     downloadFile();
  //   } else {
  //     try {
  //       const granted = await PermissionsAndroid.request(
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         {
  //           title: 'Storage Permission Required',
  //           message:
  //             'Application needs access to your storage to download File',
  //         }
  //       );
  //       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //         // Start downloading
  //         downloadFile();
  //         console.log('Storage Permission Granted.');
  //       } else {
  //         // If permission denied then show alert
  //         Alert.alert('Error','Storage Permission Not Granted');
  //       }
  //     } catch (err) {
  //       // To handle permission related exception
  //       console.log("++++"+err);
  //     }
  //   }
  // };
  //
  // const downloadFile = () => {
  //
  //   // Get today's date to add the time suffix in filename
  //   let date = new Date();
  //   // File URL which we want to download
  //   let FILE_URL = fileUrl;
  //   // Function to get extention of the file url
  //   let file_ext = getFileExtention(FILE_URL);
  //
  //   file_ext = '.' + file_ext[0];
  //
  //   // config: To get response by passing the downloading related options
  //   // fs: Root directory path to download
  //   const { config, fs } = RNFetchBlob;
  //   let RootDir = fs.dirs.PictureDir;
  //   let options = {
  //     fileCache: true,
  //     addAndroidDownloads: {
  //       path:
  //         RootDir+
  //         '/file_' +
  //         Math.floor(date.getTime() + date.getSeconds() / 2) +
  //         file_ext,
  //       description: 'downloading file...',
  //       notification: true,
  //       // useDownloadManager works with Android only
  //       useDownloadManager: true,
  //     },
  //   };
  //   config(options)
  //     .fetch('GET', FILE_URL)
  //     .then(res => {
  //       // Alert after successful downloading
  //       console.log('res -> ', JSON.stringify(res));
  //       alert('File Downloaded Successfully.');
  //     });
  // };
  //
  // const getFileExtention = fileUrl => {
  //   // To get the file extension
  //   return /[.]/.exec(fileUrl) ?
  //            /[^.]+$/.exec(fileUrl) : undefined;
  // };

  return (
    <View style={{paddingVertical:16,paddingHorizontal:10,height: 100,width:windowWidth/1.1,backgroundColor: 'rgba(249, 220, 220, 0.95)',elevation:10,borderRadius: 10,marginBottom:20,flexDirection:'row',justifyContent:'space-between'}}>
      <View>
        <Text style={{color:"#000",fontFamily:'Poppins-SemiBold'}}>{`${item.jenis} Nomor${item.nomor} Tahun${item.tahun}`}</Text>
        <Text style={{color:"#000",fontFamily:'Poppins-Regular'}}>{item.judul}</Text>
      </View>
      <Download height={30} width={30} onPress={()=>alert(true)}/>
    </View>
  )
}

export default PHukumCard
