import React, {useState,useRef,useEffect} from "react"
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native"
import MapView, { Callout, Circle, Marker, PROVIDER_GOOGLE } from "react-native-maps"
import Geocoder from 'react-native-geocoding';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapFinder = ({index})=>{
	// console.log(index);
	const [ region, setRegion ] = useState({
		latitude: 1.4459986785784036,
		longitude: 125.18399810400312,
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	})
  const [desc,setDetails] = useState(null)

  const datas = {region,desc}
	const queryRef = useRef(null)

	// console.log(regions);
  const mapRef = useRef(region)

	const goToCurrentRegion=()=>{
		mapRef.current.animateToRegion(region,300)
	}

  const clearing=()=>{
    queryRef.current?.clear()
  }

  useEffect(()=>{
		Geocoder.init("AIzaSyB-lpOPCdsdF7SluzBjETaOIfT-ZDgX2ZA",{language : "en"}); // use a valid API key
	  Geocoder.from(region)
		.then(res => {
      const addressComponent = res.results[0].formatted_address;
      const address = addressComponent.split(',').splice(1,5).join(',')
			setDetails(address);
      // console.log('data from address: '+address);
		})
		.catch(error => console.warn(error));
		// console.log(datas);
  },[desc])

  useEffect(()=>{
    return ()=> console.log('clean up');
  },[])

	return (
		<View style={style.mapContainer}>
			<MapView
				ref={map=>mapRef.current=map}
				style={style.map}
        initialRegion={region}
				provider={PROVIDER_GOOGLE}
				onPress={goToCurrentRegion}
				userLocationUpdateInterval={700}
			>
			{region && <Marker coordinate={region}
			title="I'm Here"
			description={desc}/>}
			{
				index !== null ? index?.map((item,index)=>(
					<Marker coordinate={item} key={index}
						title="I'm Here"
						description={desc}
						/>
				))
				: null
			}
			</MapView>
			<View style={style.placesContainer}>
				<GooglePlacesAutocomplete
					ref={queryRef}
					placeholder={desc?desc:"Search your location here...."}
					returnKeyType={'search'}
					autoFocus={true}
					listViewDisplayed='auto'
					fetchDetails={true}
					renderDescription={row=>row.description}
					GooglePlacesSearchQuery={{
						rankby: "distance"
					}}
					GooglePlacesDetailsQuery={{
						fields:['formatted_address','geometry']
					}}
					enablePoweredByContainer={false}
					onPress={(data, details = null) => {
						// 'details' is provided when fetchDetails = true
						// update the region by its latitude and longitude
						setRegion({...region,
							latitude: details.geometry.location.lat,
							longitude: details.geometry.location.lng,
						})
						setDetails(data?.description)
						// getGeometrics(datas)
						// console.log(details.geometry.location);
						// console.log('data from query: '+data?.description);
					}}
					renderRightButton={() => (
            (desc!=null ?
                 <TouchableOpacity onPress={clearing}>
                           <Text style={{color:"#000"}}>x</Text>
								 </TouchableOpacity>
               :
                null )	)}
					query={{
						key: "AIzaSyB-lpOPCdsdF7SluzBjETaOIfT-ZDgX2ZA",
						language: "en",
						components: "country:id",
						types: "establishment",
						radius: 3000,
						location: `${region.latitude}, ${region.longitude}`
					}}
					textInputProps={{
						placeholderTextColor: '#899',
						InputComp: TextInput
					}}
					styles={{
						listView:style.listView,
						textInputContainer: {
							alignItems:'center',
							justifyContent:'space-between'
						},
						textInput:{color:'#000',borderColor:"#888",borderWidth:1},
						description:{
							fontWeight:'bold',
							color:'#000',
						}
					}}
				/>
			</View>
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
		top:80
	},
	listView:{minHeight:50,color:'#000'}
})

export default MapFinder
