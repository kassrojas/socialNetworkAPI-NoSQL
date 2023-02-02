const fruitNames = [
    'pineapple',
    'apple',
    'pear',
    'cherry',
    'lemon',
    'lime',
    'orange',
    'raspberry',
    'blueberry',
    'papaya',
    'mango',
    'cantelope',
    'honeydew',
    'kiwi',
    'starfruit',
    'arugula',
    'radish',
    'guava',
    'garlic',
    'lettuce',
    'grape',
    'grapefruit',
    'fig',
    'avocado',
    'banana',
    'broccoli',
    'carrot',
];

const adjective = [
    'best',
    'calm',
    'confused',
    'dark',
    'defeated',
    'frail',
    'handsome',
    'hungry',
    'ill',
    'itchy',
    'lazy',
    'puzzled',
    'odd',
    'prickly',
    'smiling',
    'super',
    'thankful',
    'thoughtful',
    'zealous',
    'worrisome',
    'witty',
    'ugly',
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// build a random username
const randomName = () => {
    return `${getRandomArrItem(adjective)}_${getRandomArrItem(fruitNames)}`;
};

module.exports = { randomName };