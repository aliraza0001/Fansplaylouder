const ExerciseImage1 = require('../assets/images/exercise.png');
const ExerciseImage2 = require('../assets/images/exercise2.png');
const ArrowImage =  require('../assets/images/arrow.png');
const arilogo = require('../assets/images/teamlogo/ari.png')


const productImage = require('../assets/images/products/shirt.png')



export const tagNames = [
    {
      id: 0,
      name: 'Arizona Cardinals',
      imageUrl: arilogo,
   
    },
    {
      id: 1,
      name: 'Baltimore Ravens',
      imageUrl: arilogo,
   
    },
    {
      id: 2,
      name: 'Atlanta Falcons',
      imageUrl: arilogo,
   
    },
    {
      id: 3,
      name: 'Carolina Panthers',
      imageUrl: arilogo,
  
    },
    {
      id: 4,
      name: 'Chicago Bears',
      imageUrl: arilogo,

    },
    {
      id: 5,
      name: 'Cincinnati Bengals',
      imageUrl: arilogo,

    },
    {
      id: 6,
      name: 'Cleveland Browns',
      imageUrl: arilogo,

    },
  ];


  export const genders = [
        {
      id:0,
      name: 'Male',
    },
    {
      id:1,
      name: 'Female',
    },
    {
      id:2,
      name: 'Other',
    },
  ];

  export const ageGroup = [
    {
      id: 0,
      name: 'Under 26',
    },
    {
      id: 1,
      name: '26 - 35'
    },
    {
      id: 2,
      name: '36 - 45'
    },
    {
      id: 3,
      name: '46 - 55'
    },
  ]

export const exerciseListing =[
  {
    id: 0,
    name: 'Comfort if you feel sad',
    imageUrl: ExerciseImage1,
    iconUrl: ArrowImage,
  },
  {
    id: 1,
    name: 'Comfort if you feel sad',
    imageUrl: ExerciseImage2,
    iconUrl: ArrowImage,
  },
];

export const rosterList =[{
  id:0,
  title: ' Avacado',
  imageUrl:arilogo,
  dob: '1889-9329',
  heightAvatar: `6" 4"`,
  weightAvatar: '210lb',
  age: '24'
},
{
  id:1,
  title: ' Avacado',
  imageUrl:arilogo,
  dob: '1889-9329',
  heightAvatar: `6" 4"`,
  weightAvatar: '210lb',
  age: '24'
},
{
  id:2,
  title: ' Avacado',
  imageUrl:arilogo,
  dob: '1889-9329',
  heightAvatar: `6" 4"`,
  weightAvatar: '210lb',
  age: '24'
}
];


export const Products=[
  {
    id:0,
  productImg: productImage,
  productNick: 'A.cardinals',
  productName: 'Shirt',
  productPrice: '$111',
  productCta: 'Add'
}]