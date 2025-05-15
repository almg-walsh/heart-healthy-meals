import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MealTable from '../components/MealTable';

interface Meal {
  name: string;
  ingredients: string[];
  calories: string;
}

const dinnerMeals: Meal[] = [
  {
    name: "Baked Salmon with Vegetables",
    ingredients: [
      "100g lentils",
      "carrots",
      "onions",
      "tinned tomatoes",
      "garlic"
    ],
    calories: "400 kcal, 24g protein"
  },
  {
    name: "Lentil and Vegetable Stew",
    ingredients: [
      "120g chicken thigh",
      "1 cup steamed broccoli",
      "100g quinoa"
    ],
    calories: "430 kcal, 35g protein"
  },
  {
    name: "Turkey and Quinoa Stuffed Peppers",
    ingredients: [
      "80g wholewheat pasta",
      "1 tin sardines",
      "handful of spinach"
    ],
    calories: "420 kcal, 30g protein"
  }
];

const Dinner: React.FC = () => {
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
      <h1>Dinner Ideas</h1>
      <MealTable 
        meals={dinnerMeals} 
        selectedMeal={selectedMeal}
        onMealSelect={setSelectedMeal}
      />
    </div>
  );
};

export default Dinner; 