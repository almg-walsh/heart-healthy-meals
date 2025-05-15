import React from 'react';
import MealTable from '../components/MealTable';

const dinnerMeals = [
  {
    meal: 'Lentil & Veg Stew',
    ingredients: '100g lentils, carrots, onions, tinned tomatoes, garlic',
    calories: 'Approx 400 kcal, 24g protein'
  },
  {
    meal: 'Grilled Chicken & Broccoli',
    ingredients: '120g chicken thigh, 1 cup steamed broccoli, 100g quinoa',
    calories: 'Approx 430 kcal, 35g protein'
  },
  {
    meal: 'Sardine Pasta',
    ingredients: '80g wholewheat pasta, 1 tin sardines, handful of spinach',
    calories: 'Approx 420 kcal, 30g protein'
  }
];

const Dinner: React.FC = () => {
  return (
    <>
      <h1>Dinner Ideas</h1>
      <MealTable meals={dinnerMeals} />
    </>
  );
};

export default Dinner; 