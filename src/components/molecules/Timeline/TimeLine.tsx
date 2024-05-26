import React from 'react';
import { Chrono } from 'react-chrono';

const TimeLine = () => {
    const items = [{
        title: "Saturday, 16.00",
        cardTitle: "CheckPoint №1",
        url: "https://летсхак.хакатоны.рус/personal/solution/3843287867/2853900371",
        cardSubtitle:"!!!!!!!!!!!!!!!!!!!Meeting!!!!!!!!!!!!!!!!!!!!!",
        media: {
            type: "IMAGE",
            source: {
                url: "https://www.checkpoint.fi/wp-content/uploads/2020/09/CheckPoint_logo_RGB_2018.png"
            }
        }
    },
        {
            title: "Sunday, 18.00",
            cardTitle: "CheckPoint №2",
            url: "https://летсхак.хакатоны.рус/personal/solution/3843287867/3503037774",
            cardSubtitle:"!!!!!!!!!!!!!!!!!!!Meeting!!!!!!!!!!!!!!!!!!!!!",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://www.checkpoint.fi/wp-content/uploads/2020/09/CheckPoint_logo_RGB_2018.png"
                }
            }
        },
        {
            title: "Saturday, 14.00",
            cardTitle: "Final",
            url: "https://летсхак.хакатоны.рус/personal/solution/3843287867/2853931341",
            cardSubtitle:"!!!!!!!!!!!!!!!Demonstration Project!!!!!!!!!!!!!!",
            media: {
                type: "IMAGE",
                source: {
                    url: "https://kartinki.pics/uploads/posts/2022-03/thumbs/1646234847_38-kartinkin-net-p-proekt-kartinki-41.jpg"
                }
            }
        },];

    return (
        <div className='w-full'>
            <Chrono items={items}/>
        </div>
    );
};

export default TimeLine;