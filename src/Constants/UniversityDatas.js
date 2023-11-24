import IconButton from '../components/UI/IconButton'

export const UniversityDatas = [
  {
    id: 1,
    name: 'Sydney University',
    image: require('../assest/sydney.png'),
    country: 'Australia',
    state: 'New South Wales',
    city: 'Sydney',
    advisorCount: '19 Advisor ',
    backImg: require('../assest/SydneyUimg.jpeg'),
    heartImg: require('../assest/heartimg.png'),
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />,

  },
  {
    id: 2,
    name: 'Macquarie University',
    image: require('../assest/macquarie.png'),
    country: 'France',
    state: 'Grand Est',
    city: 'Chaumont',
    advisorCount: '31 Advisor ',
    backImg: require('../assest/macquarieUniImg.jpeg'),
    heartImg: require('../assest/heartimg.png'),
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />,

  },
  {
    id: 3,
    name: 'NSW University',
    image: require('../assest/sydney.png'),
    country: 'France',
    state: 'Brittany',
    city: 'Redon',
    advisorCount: '4 Advisor ',
    backImg: require('../assest/nswUnivImg.jpeg'),
    heartImg: require('../assest/heartimg.png'),
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />,

  },
  {
    id: 4,
    name: 'Western University',
    image: require('../assest/macquarie.png'),
    country: 'Australia',
    state: 'Victoia',
    city: 'Melbourne',
    advisorCount: '0 Advisor ',
    backImg: require('../assest/WestUiMG.jpeg'),
    heartImg: require('../assest/heartimg.png'),
    heartIcon: <IconButton icon={'heart-outline'} size={30} color={'red'} />,

  }
]