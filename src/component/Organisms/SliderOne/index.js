import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from '../../Molecules/CardWithTitle'
import SliderOne1 from '../../../assets/image/sliderImage_one_1.jpg'
import SliderOne2 from '../../../assets/image/sliderImage_one_2.jpg'
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

const SliderOne = () => {
    const items = [
        {
            imageValue: SliderOne1,
            textValue: 'Seguridad en el baño',
            imageValueAlt :'SliderOne1'
        },
        {
            imageValue: SliderOne2,
            textValue: 'Tapabocas',
            imageValueAlt :'SliderOne2'
        },
        {
            imageValue: SliderOne1,
            textValue: 'Silla de ruedas',
            imageValueAlt :'SliderOne1'
        },
        {
            imageValue: SliderOne2,
            textValue: 'Ayuda para la marcha',
            imageValueAlt :'SliderOne2'
        },
        {
            imageValue: SliderOne1,
            textValue: 'Silla de ruedas',
            imageValueAlt :'SliderOne1'
        },
        {
            imageValue: SliderOne2,
            textValue: 'Ayuda para la marcha',
            imageValueAlt :'SliderOne2'
        },

        {
            imageValue: SliderOne1,
            textValue: 'Silla de ruedas',
            imageValueAlt :'SliderOne1'
        },
        {
            imageValue: SliderOne2,
            textValue: 'Ayuda para la marcha',
            imageValueAlt :'SliderOne2'
        },
     
     
    ];
	return (
            <CarouselStyle itemsToShow={5} enableAutoPlay autoPlaySpeed={900}>
                {items.map((item, i) => (
                    <Item key={i} {...item} />
                ))}
            </CarouselStyle>
	)
}

export default SliderOne