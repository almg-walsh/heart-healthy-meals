import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface Meal {
  mealType: string;
  foodItem: string;
  protein: string;
  calories: string;
  healthBenefits: string;
}

interface DayPlan {
  day: string;
  meals: Meal[];
}

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  min-width: 600px;

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: #f8f9fa;
    font-weight: 600;
  }

  tr:hover {
    background-color: #f8f9fa;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 8px;
    }
  }
`;

const MealLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const mealPlans: DayPlan[] = [
  {
    day: "Day 1",
    meals: [
      {
        mealType: "Breakfast",
        foodItem: "Oats & Greek Yoghurt Bowl",
        protein: "18g",
        calories: "320",
        healthBenefits: "High in protein, calcium, and probiotics"
      },
      {
        mealType: "Lunch",
        foodItem: "Chickpea Salad",
        protein: "12g",
        calories: "300",
        healthBenefits: "Rich in fiber and protein"
      },
      {
        mealType: "Dinner",
        foodItem: "Lentil & Veg Stew",
        protein: "24g",
        calories: "400",
        healthBenefits: "High in protein and fiber"
      },
      {
        mealType: "Snack",
        foodItem: "Boiled Eggs",
        protein: "13g",
        calories: "160",
        healthBenefits: "Good source of protein"
      }
    ]
  },
  {
    day: "Day 2",
    meals: [
      {
        mealType: "Breakfast",
        foodItem: "Scrambled Eggs on Toast",
        protein: "16g",
        calories: "290",
        healthBenefits: "High in protein and fiber"
      },
      {
        mealType: "Lunch",
        foodItem: "Mackerel Sandwich",
        protein: "20g",
        calories: "370",
        healthBenefits: "Rich in omega-3s and protein"
      },
      {
        mealType: "Dinner",
        foodItem: "Grilled Chicken & Broccoli",
        protein: "35g",
        calories: "430",
        healthBenefits: "High in protein and vitamins"
      },
      {
        mealType: "Snack",
        foodItem: "Greek Yoghurt with Walnuts",
        protein: "10g",
        calories: "190",
        healthBenefits: "High in protein and healthy fats"
      }
    ]
  }
];

const MealPlan: React.FC = () => {
  const navigate = useNavigate();

  const handleMealClick = (mealType: string, foodItem: string) => {
    // Convert meal type to lowercase for the route
    const route = `/${mealType.toLowerCase()}`;
    // Navigate to the appropriate page
    navigate(route, { state: { selectedMeal: foodItem } });
  };

  return (
    <div>
      <h1>Heart-Healthy Meal Plans</h1>
      {mealPlans.map((dayPlan, index) => (
        <div key={index}>
          <h2>{dayPlan.day}</h2>
          <TableContainer>
            <Table>
              <thead>
                <tr>
                  <th>Meal Type</th>
                  <th>Food Item</th>
                  <th>Protein</th>
                  <th>Calories</th>
                  <th>Health Benefits</th>
                </tr>
              </thead>
              <tbody>
                {dayPlan.meals.map((meal, mealIndex) => (
                  <tr key={mealIndex}>
                    <td>{meal.mealType}</td>
                    <td>
                      <MealLink
                        onClick={() => handleMealClick(meal.mealType, meal.foodItem)}
                      >
                        {meal.foodItem}
                      </MealLink>
                    </td>
                    <td>{meal.protein}</td>
                    <td>{meal.calories}</td>
                    <td>{meal.healthBenefits}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );
};

export default MealPlan; 