import React from 'react';
import MealTable from '../components/MealTable';

const snackMeals = [
  {
    meal: 'Boiled Eggs',
    ingredients: '2 eggs',
    calories: 'Approx 160 kcal, 13g protein'
  },
  {
    meal: 'Hummus & Carrot Sticks',
    ingredients: '50g hummus, 100g carrots',
    calories: 'Approx 180 kcal, 5g protein'
  },
  {
    meal: 'Greek Yoghurt with Walnuts',
    ingredients: '100g yoghurt + 10g walnuts',
    calories: 'Approx 190 kcal, 10g protein'
  }
];

const Snacks: React.FC = () => {
  return (
    <>
      <h1>Snack Ideas</h1>
      <MealTable meals={snackMeals} />
    </>
  );
};

export default Snacks; 