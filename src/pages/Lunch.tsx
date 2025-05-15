import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MealTable from '../components/MealTable';

interface Meal {
  name: string;
  ingredients: string[];
  calories: string;
}

const lunchMeals: Meal[] = [
  {
    name: "Chickpea Salad",
    ingredients: [
      "100g chickpeas",
      "1/2 red onion",
      "1 tomato",
      "lemon juice",
      "1 tsp olive oil"
    ],
    calories: "300 kcal, 12g protein"
  },
  {
    name: "Mackerel Sandwich",
    ingredients: [
      "1 tin mackerel (100g)",
      "2 slices wholemeal bread",
      "handful of rocket"
    ],
    calories: "370 kcal, 20g protein"
  },
  {
    name: "Huel Meal (Powder)",
    ingredients: [
      "2 scoops (90g) mixed with water"
    ],
    calories: "400 kcal, 29g protein"
  }
];

const Lunch: React.FC = () => {
  const location = useLocation();
  const [selectedMeal, setSelectedMeal] = useState<string | null>(null);

  useEffect(() => {
    // Get the selected meal from navigation state
    const state = location.state as { selectedMeal?: string } | null;
    if (state?.selectedMeal) {
      setSelectedMeal(state.selectedMeal);
      // Scroll to the selected meal
      const element = document.getElementById(state.selectedMeal);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <h1>Lunch Ideas</h1>
      <MealTable 
        meals={lunchMeals} 
        selectedMeal={selectedMeal}
        onMealSelect={setSelectedMeal}
      />
    </div>
  );
};

export default Lunch; 