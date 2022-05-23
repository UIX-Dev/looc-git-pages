import { IHomeContents, IHomeIntro } from 'Components/Module/API/Interface/Home.interface'

import introCharacter from 'Assets/Images/main-character.png'
import introVideo from 'Assets/Images/2021-img.png'

import main_01 from 'Assets/Images/tz-img-1.png'
import worker_01 from 'Assets/Images/character-info-1.png'
import worker_01_work_01 from 'Assets/Images/tz-img-2.png'
import worker_01_work_02 from 'Assets/Images/tz-img-3.png'
import worker_01_work_03 from 'Assets/Images/tz-img-4.png'

import main_02 from 'Assets/Images/chase-img-1.png'
import worker_02 from 'Assets/Images/character-info-2.png'
import worker_02_work_01 from 'Assets/Images/chase-img-2.png'
import worker_02_work_02 from 'Assets/Images/chase-img-3.png'
import worker_02_work_03 from 'Assets/Images/chase-img-4.png'

import main_03 from 'Assets/Images/haenee-img-1.png'
import worker_03 from 'Assets/Images/character-info-3.png'
// import worker_03_work_01 
// import worker_03_work_02
// import worker_03_work_03

import main_04 from 'Assets/Images/ysh-img-1.png'
import worker_04 from 'Assets/Images/character-info-4.png'
// import worker_04_work_01
// import worker_04_work_02
// import worker_04_work_03

import main_05 from 'Assets/Images/kelly-img-1.png'
import worker_05 from 'Assets/Images/character-info-5.png'
// import worker_05_work_01
// import worker_05_work_02
// import worker_05_work_03
export const HomeIntroContents: IHomeIntro =
{
    image: introCharacter,
    video: introVideo
}



export const HomeContents: IHomeContents[] = [
    {
        main: main_01,
        worker: worker_01,
        work: [
            worker_01_work_01,
            worker_01_work_02,
            worker_01_work_03
        ],
        title: [
            "Artificial City",
            "DR.BRAIN",
            "Digi-LOCA"
        ],
        description: [
            "TZ is the owner of Loocreative. It contains a description of TZ...",
            "Loocreative. It contains a description of TZ and a description ",
            "the owner of Loocreative. It contains a description of TZ and..."
        ]
    },
    {
        main: main_02,
        worker: worker_02,
        work: [
            worker_02_work_01,
            worker_02_work_02,
            worker_02_work_03
        ],
        title: [
            "Laneige Water Bank",
            "Samsung CES",
            "Must It"
        ],
        description: [
            "TZ is the owner of Loocreative. It contains a description of TZ and",
            "TZ is the owner of Loocreative. It contains a description of TZ and a",
            "TZ is the owner of Loocreative. It contains a description of TZ and a"
        ]
    },
    {
        main: main_03,
        worker: worker_03,
        work: [
            worker_01_work_01,
            worker_01_work_02,
            worker_01_work_03
        ],
        title: [
            "Artificial City",
            "DR.BRAIN",
            "Digi-LOCA"
        ],
        description: [
            "TZ is the owner of Loocreative. It contains a description of TZ...",
            "Loocreative. It contains a description of TZ and a description ",
            "the owner of Loocreative. It contains a description of TZ and..."
        ]
    },
    {
        main: main_04,
        worker: worker_04,
        work: [
            worker_01_work_01,
            worker_01_work_02,
            worker_01_work_03
        ],
        title: [
            "Artificial City",
            "DR.BRAIN",
            "Digi-LOCA"
        ],
        description: [
            "TZ is the owner of Loocreative. It contains a description of TZ...",
            "Loocreative. It contains a description of TZ and a description ",
            "the owner of Loocreative. It contains a description of TZ and..."
        ]
    },
    {
        main: main_05,
        worker: worker_05,
        work: [
            worker_01_work_01,
            worker_01_work_02,
            worker_01_work_03
        ],
        title: [
            "Artificial City",
            "DR.BRAIN",
            "Digi-LOCA"
        ],
        description: [
            "TZ is the owner of Loocreative. It contains a description of TZ...",
            "Loocreative. It contains a description of TZ and a description ",
            "the owner of Loocreative. It contains a description of TZ and..."
        ]
    }
]

