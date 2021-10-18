import React from 'react'
import { Box } from '@mui/material';
import Item from '../../Molecules/CollectionCard'
import Carousel from 'react-elastic-carousel'
import WheelchairType from '../../../assets/image/WheelchairType.jpg'
import TypographyComponent from '../../Atoms/TypographyComponent'
import { styled } from '@mui/material/styles';


const CarouselStyle = styled(Carousel)({
    marginTop:'30px',
    '& .rec.rec-arrow-left':{
        visibility: 'hidden'
    },
    '& .rec.rec-arrow-right':{
        visibility: 'hidden'
    },
    '& .rec.rec-pagination':{
        visibility: 'hidden'
    }
  });

const SliderDefault = ({textValue}) => {
    const items = [
        {
            wheelchair: WheelchairType,
            descriptionWheelchair: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            wheelchairAlt :'WheelchairType1'
        },
        {
            wheelchair: WheelchairType,
            descriptionWheelchair: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            wheelchairAlt :'WheelchairType2'
        },
        {
            wheelchair: WheelchairType,
            descriptionWheelchair:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            wheelchairAlt :'WheelchairType3'
        },
        {
            wheelchair: WheelchairType,
            descriptionWheelchair:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            wheelchairAlt :'WheelchairType4'
        },
        {
            wheelchair: WheelchairType,
            descriptionWheelchair:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            wheelchairAlt :'WheelchairType5'
        },
        {
            wheelchair: WheelchairType,
            descriptionWheelchair:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            wheelchairAlt :'WheelchairType6'
        },

        {
            wheelchair: WheelchairType,
            descriptionWheelchair:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            wheelchairAlt :'WheelchairType7'
        },
        {
            wheelchair: WheelchairType,
            descriptionWheelchair:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            wheelchairAlt :'WheelchairType8'
        },
     
     
    ];
	return (
        <>
            <Box
                sx={{
                    display:'flex',
                    justifyContent:'center'
               }}
            >
                <TypographyComponent variantValue={'h6'} textElement={textValue} sx={{
                     color:'#0063cc',
                     fontWeight:'bold',
                     fontSize:'20px',
                     textAlign:'center'
                }}/>
            </Box>
            <CarouselStyle itemsToShow={4} enableAutoPlay autoPlaySpeed={900}>
                {items.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </CarouselStyle>
        </>
	)
}

export default SliderDefault