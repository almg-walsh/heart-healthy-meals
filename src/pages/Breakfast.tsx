import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MealTable from '../components/MealTable';

interface Meal {
  name: string;
  ingredients: string[];
  calories: string;
}

const breakfastMeals: Meal[] = [
  {
    name: "Greek Yogurt Parfait",
    ingredients: [
      "40g oats",
      "100g Greek yoghurt",
      "50g berries",
      "1 tsp flaxseed"
    ],
    calories: "320 kcal, 18g protein"
  },
  {
    name: "Avocado Toast with Eggs",
    ingredients: [
      "2 eggs",
      "1 slice wholemeal toast",
      "handful of spinach"
    ],
    calories: "290 kcal, 16g protein"
  },
  {
    name: "Huel Protein Shake",
    ingredients: [
      "1 scoop Huel powder (29g)",
      "300ml water"
    ],
    calories: "105 kcal, 20g protein"
  }
];

const Breakfast: React.FC = () => {
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
      <h1>Breakfast Ideas</h1>
      <MealTable 
        meals={breakfastMeals} 
        selectedMeal={selectedMeal}
        onMealSelect={setSelectedMeal}
      />
    </div>
  );
};

export default Breakfast; 