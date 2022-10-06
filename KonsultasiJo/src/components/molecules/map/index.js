import React, {useState,useRef,useEffect} from "react"
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native"
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps"

const MapFinder = ()=>{
	const [ region, setRegion ] = useState({
		latitude: 1.4459986785784036,
		longitude: 125.18399810400312,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	})
  const [desc,setDetails] = useState(null)
  
  const datas = {region,desc}
	// console.log(regions);
  const mapRef = useRef(region)

  // useEffect(()=>{
  //   getGeometrics(datas)
	// 	// console.log(datas);
  // },[desc])
  //
  // useEffect(()=>{
  //   return ()=> console.log('clean up');
  // },[])

	return (
		<View style={style.mapContainer}>
			<MapView
				ref={map=>mapRef.current=map}
				style={style.map}
        initialRegion={region}
				provider={PROVIDER_GOOGLE}
				userLocationUpdateInterval={700}
			>
				<Marker coordinate={region}
				title="I'm Here"
				description={desc}
				/>
			</MapView>
		</View>
	)
}

const style = StyleSheet.create({
	mapContainer:{flex:1,alignItems:'center',justifyContent:'center'},
  map: {
    ...StyleSheet.absoluteFill,
		// marginBottom:0
  },
	placesContainer: {
		position:'absolute',
		width: "90%",
		backgroundColor:"#fff",
		shadowColor:"#000",
		shadowOffset:{
			width:2,
			height:2
		},
		shadowOpacity:0.4,
		shadowRadius:4,
		elevation:4,
		padding:8,
		borderRadius:8,
		top:30
	},
	listView:{minHeight:50,color:'#000'}
})

export default MapFinder
