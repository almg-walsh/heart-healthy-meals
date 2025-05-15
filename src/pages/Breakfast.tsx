import React from 'react';
import MealTable from '../components/MealTable';

const breakfastMeals = [
  {
    meal: 'Oats & Greek Yoghurt Bowl',
    ingredients: '40g oats, 100g Greek yoghurt, 50g berries, 1 tsp flaxseed',
    calories: 'Approx 320 kcal, 18g protein'
  },
  {
    meal: 'Scrambled Eggs on Toast',
    ingredients: '2 eggs, 1 slice wholemeal toast, handful of spinach',
    calories: 'Approx 290 kcal, 16g protein'
  },
  {
    meal: 'Huel Protein Shake',
    ingredients: '1 scoop Huel powder (29g) + 300ml water',
    calories: 'Approx 105 kcal, 20g protein'
  }
];

const Breakfast: React.FC = () => {
  return (
    <>
      <h1>Breakfast Ideas</h1>
      <MealTable meals={breakfastMeals} />
    </>
  );
};

export default Breakfast; 