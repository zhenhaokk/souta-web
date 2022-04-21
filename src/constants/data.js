import images from './images';

const Sushi_Rolls = [
  {
    title: 'ABURI BEEF TATAKI ROLL',
    price: '$11.8',
    tags: 'SALAD | seaweed',
  },
  {
    title: 'SPICY CRISPY SALMON',
    price: '$10.8',
    tags: 'SALMON | tempura flake',
  },
  {
    title: 'TIGER ROLL',
    price: '$12.8',
    tags: 'AVOCADO |  Chicken',
  },
  {
    title: 'COOKED TUNA ROLL',
    price: '$8.8',
    tags: 'TUNA | CUCUMBER',
  },
  {
    title: 'SPIDER ROLL',
    price: '$10.8',
    tags: 'SHELL CRAB | FISH',
  },

  {
    title: 'SALMON ROLL',
    price: '$10.8',
    tags: 'SALMON | TUNA | CUCUMBER',
  },
  {
    title: 'TUNA ROLL',
    price: '$10.8',
    tags: 'TUNA | CUCUMBER',
  },
];

const cocktails = [
  {
    title: 'CHICKEN KATSU DON',
    price: '$12.8',
    tags: 'Deep fried chicken breast with donburi sauce | egg| onion | rice',
  },
  {
    title: "GARLIC BEEF DON	",
    price: '$14.8',
    tags: 'Stir fried beef | vegetables in garlic sauce with rice',
  },
  {
    title: 'TEMPURA DON',
    price: '$14.8',
    tags: 'Deep fried tempura prawns | mixed vegetables with special soy sauce on the side',
  },
  {
    title: 'SHOGAYAKI DON',
    price: '$13.8',
    tags: 'Stir fried pork belly | vegetables in homemade gochujang chilli paste',
  },
  {
    title: 'CRAB DON',
    price: '$13.8',
    tags: 'Deep fried crab | vegetables in soy sauce with rice',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { Sushi_Rolls, cocktails, awards };
