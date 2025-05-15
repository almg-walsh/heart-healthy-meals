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
        foodItem: "Greek Yogurt Parfait",
        protein: "20g",
        calories: "350",
        healthBenefits: "High in protein, calcium, and probiotics"
      },
      {
        mealType: "Lunch",
        foodItem: "Mediterranean Quinoa Bowl",
        protein: "25g",
        calories: "450",
        healthBenefits: "Rich in fiber, protein, and healthy fats"
      },
      {
        mealType: "Dinner",
        foodItem: "Baked Salmon with Vegetables",
        protein: "35g",
        calories: "550",
        healthBenefits: "High in omega-3s, protein, and antioxidants"
      },
      {
        mealType: "Snack",
        foodItem: "Almond and Berry Mix",
        protein: "8g",
        calories: "200",
        healthBenefits: "Good source of healthy fats and antioxidants"
      }
    ]
  },
  {
    day: "Day 2",
    meals: [
      {
        mealType: "Breakfast",
        foodItem: "Avocado Toast with Eggs",
        protein: "18g",
        calories: "400",
        healthBenefits: "High in healthy fats and protein"
      },
      {
        mealType: "Lunch",
        foodItem: "Grilled Chicken Salad",
        protein: "30g",
        calories: "400",
        healthBenefits: "High in protein and fiber"
      },
      {
        mealType: "Dinner",
        foodItem: "Lentil and Vegetable Stew",
        protein: "22g",
        calories: "450",
        healthBenefits: "Rich in fiber, protein, and minerals"
      },
      {
        mealType: "Snack",
        foodItem: "Greek Yogurt with Honey",
        protein: "15g",
        calories: "180",
        healthBenefits: "High in protein and probiotics"
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