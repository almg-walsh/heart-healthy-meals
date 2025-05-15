import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MealTable from '../components/MealTable';

interface Meal {
  name: string;
  ingredients: string[];
  calories: string;
}

const snackMeals: Meal[] = [
  {
    name: "Boiled Eggs",
    ingredients: [
      "2 eggs"
    ],
    calories: "160 kcal, 13g protein"
  },
  {
    name: "Hummus & Carrot Sticks",
    ingredients: [
      "50g hummus",
      "100g carrots"
    ],
    calories: "180 kcal, 5g protein"
  },
  {
    name: "Greek Yoghurt with Walnuts",
    ingredients: [
      "100g yoghurt",
      "10g walnuts"
    ],
    calories: "190 kcal, 10g protein"
  }
];

const Snacks: React.FC = () => {
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
      <h1>Snack Ideas</h1>
      <MealTable 
        meals={snackMeals} 
        selectedMeal={selectedMeal}
        onMealSelect={setSelectedMeal}
      />
    </div>
  );
};

export default Snacks; 