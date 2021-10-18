import * as React from 'react';
import Box from '@mui/material/Box';
import FooterComponents from '../../../component/Molecules/FooterComponents'
import constants from '../../../utils/constants'
import NewLetter from '../../Molecules/NewLetter'
import Logo from '../../../assets/image/logos.png'


const Footer = () => {
    const items = [
        {
            textValue: constants.footer.link1,
        },
        {
            textValue: constants.footer.link2,
        },
        {
            textValue: constants.footer.link3,
        }
    ];
    const items2 = [
        {
            textValue: constants.footer.link4,
        },
        {
            textValue: constants.footer.link5,
        },
        {
            textValue: constants.footer.link6,
        },
        {
            textValue: constants.footer.link7,
        },
        {
            textValue: constants.footer.link8,
        },
        {
            textValue: constants.footer.link9,
        },
        {
            textValue: constants.footer.link10,
        }   
    ];

    const items3 = [
        {
            textValue: constants.footer.link11,
        },
        {
            textValue: constants.footer.link12,
        },
        {
            textValue: constants.footer.link13,
        },
        {
            textValue: constants.footer.link14,
        },
        {
            textValue: constants.footer.link15,
        },
        {
            textValue: constants.footer.link16,
        }   
    ];
    const items4 = [
        {
            textValue: <NewLetter/>,
        },
        {
            textValue: constants.footer.link17,
        },
        {
            textValue: constants.footer.link18,
        },
        {
            textValue: <img src={Logo} alt='logos' width='200px'/>,
        },
    ]
	return (
        <Box component="div" sx={{background:'black',display:'flex', justifyContent:'space-between', alignItems:'flex-start', padding:'3% 7%'}}>
            <FooterComponents
            titleFooterSection={
                constants.footer.title1
            }
            items={items}
            />
             <FooterComponents
            titleFooterSection={
                constants.footer.title2
            }
            items={items2}
            />
             <FooterComponents
            titleFooterSection={
                constants.footer.title3
            }
            items={items3}
            />
             <FooterComponents
            titleFooterSection={
                constants.footer.title4
            }
            items={items4}
            />
        </Box>
	)
}

export default Footer