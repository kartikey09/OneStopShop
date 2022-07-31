import mouse from './images/microsoftarc.png'
import speaker from './images/googlenest.png'
import monitor from './images/benq.png'
import InductionCooktop from './images/InductionCooktop.png'
import trimmer from './images/trimmer.png'
import weighingScale from './images/weighingScale.png'
import PS5 from './images/PS5.png'
import googlePixel from './images/googlePixel.png'
import ideaPad from './images/ideaPad.png'
import kentRO from './images/kentRO.png'
import thermometer from './images/thermometer.png'
import massager from './images/massager.png'
import gamingMouse from './images/gamingMouse.png'
import kettle from './images/kettle.png'
import steamIron from './images/steamIron.png'

const data = [
    {
        id : 1,
        description : 'MICROSOFT Surface Arc Mouse',
        image : mouse,
        MRP : 9000
    },
    {
        id : 2,
        description : 'Google Nest Mini (2nd Gen)',
        image : speaker,
        MRP : 5599
    },
    {
        id : 3,
        description : 'BenQ PD 27 inch 4K Ultra HD Monitor',
        image : monitor,
        MRP : 22399
    },
    {
        id : 4,
        description : "Prestige Atlas 3.0 Induction Cooktop",
        image : InductionCooktop,
        MRP : 3499
    },
    {
        id : 5,
        description: 'PHILIPS BT3231/15 Trimmer 60 min Runtime 20 Length Settings',
        image : trimmer,
        MRP : 1596
    },
    {id : 6,
    description : 'texla 1 gm TO 10 kg electronic kitchen scale(white) Weighing Scale',
    image : weighingScale,
    MRP : 216
    },
    {
        id : 7,
        description : 'Nova Plus Amaze NI 10 1100 W Dry Iron',
        image : steamIron,
        MRP : 549
    }, 
    {
        id : 8,
        description : 'Greenchef Kettle1.5L Electric Kettle  (1.5 L, Silver)',
        image : kettle,
        MRP : 849
    },
    {
        id : 9,
        description : 'Redgear A-15 Wired Optical Gaming Mouse  (USB 2.0, USB 3.0, Black)',
        image : gamingMouse,
        MRP : 389
    },
    {
        id : 10,
        description : 'DR PHYSIO (USA) 1021 Full Body Pains Relief Massager',
        image : massager,
        MRP : 1299
    },
    {
        id : 11,
        description : 'K-life DT-01 Digital Body Fever check Machine for Testing Kids Adults & Babies Temperature Thermometer  (White)',
        image : thermometer,
        MRP : 190
    },
    {
        id : 12,
        description : 'KENT Ace 8 L RO + UV + UF + TDS Water Purifier with Mineral ROTM Technology,In-tank UV Disinfection',
        image : kentRO,
        MRP : 13799
    },
    {
        id : 13,
        description : 'Lenovo IdeaPad 3 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) 82H801L7IN | 82H802FJIN | 82H802L3IN | 82H801LHIN Thin and Light Laptop ',
        image : ideaPad,
        MRP : 39490
    },
    {
        id : 14,
        description : 'Google Pixel 6a (Charcoal, 128 GB)  (6 GB RAM)',
        image : googlePixel,
        MRP : 43999
    }, 
    {
        id : 15,
        description : 'SONY PlayStation 5 Digital Edition (CFI-1108B01R) 825 GB with Astro\'s Playroom',
        image : PS5,
        MRP : 39990
    }
]

const exportData = ()=>{
    return data;
}

export default exportData;