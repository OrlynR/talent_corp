import React from 'react'
import NavBar from '../../component/Organisms/NavBar'
import SliderOne from '../../component/Organisms/SliderOne'
import SliderDefault from '../../component/Organisms/SliderDefault'
import MasonryContainer from '../../component/Organisms/MasonryContainer'
import CenterCardGroup from '../../component/Organisms/CenterCardGroup'
import Footer from '../../component/Organisms/Footer'
import constants from '../../utils/constants'

const Main = () => {
	return (
		<>
        	<NavBar/>
			<SliderOne/>
			<SliderDefault textValue={constants.title.value1}/>
			<SliderDefault textValue={constants.title.value2}/>
			<MasonryContainer/>
			<SliderDefault textValue={constants.title.value3}/>
			<CenterCardGroup/>
			<SliderDefault textValue={constants.title.value4}/>	
			<Footer/>
		</>
	)
}

export default Main