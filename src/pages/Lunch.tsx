import React from 'react';
import MealTable from '../components/MealTable';

const lunchMeals = [
  {
    meal: 'Chickpea Salad',
    ingredients: '100g chickpeas, 1/2 red onion, 1 tomato, lemon juice, 1 tsp olive oil',
    calories: 'Approx 300 kcal, 12g protein'
  },
  {
    meal: 'Mackerel Sandwich',
    ingredients: '1 tin mackerel (100g), 2 slices wholemeal bread, handful of rocket',
    calories: 'Approx 370 kcal, 20g protein'
  },
  {
    meal: 'Huel Meal (Powder)',
    ingredients: '2 scoops (90g) mixed with water',
    calories: 'Approx 400 kcal, 29g protein'
  }
];

const Lunch: React.FC = () => {
  return (
    <>
      <h1>Lunch Ideas</h1>
      <MealTable meals={lunchMeals} />
    </>
  );
};

export default Lunch; 