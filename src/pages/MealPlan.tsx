import React from 'react';
import styled from 'styled-components';

interface DayPlan {
  day: number;
  meals: {
    meal: string;
    food: string;
    details: string;
  }[];
}

const mealPlans: DayPlan[] = [
  {
    day: 1,
    meals: [
      { meal: 'Breakfast', food: 'Huel Protein Shake', details: '105 kcal, 20g protein' },
      { meal: 'Snack', food: 'Boiled Eggs', details: '160 kcal, 13g protein' },
      { meal: 'Lunch', food: 'Chickpea Salad', details: '300 kcal, 12g protein' },
      { meal: 'Snack', food: 'Greek Yoghurt with Walnuts', details: '190 kcal, 10g protein' },
      { meal: 'Dinner', food: 'Grilled Chicken & Broccoli', details: '430 kcal, 35g protein' },
      { meal: 'Evening', food: 'Huel Meal Replacement', details: '400 kcal, 29g protein' }
    ]
  },
  {
    day: 2,
    meals: [
      { meal: 'Breakfast', food: 'Oats & Greek Yoghurt Bowl', details: '320 kcal, 18g protein' },
      { meal: 'Snack', food: 'Hummus & Carrot Sticks', details: '180 kcal, 5g protein' },
      { meal: 'Lunch', food: 'Mackerel Sandwich', details: '370 kcal, 20g protein' },
      { meal: 'Snack', food: 'Boiled Eggs', details: '160 kcal, 13g protein' },
      { meal: 'Dinner', food: 'Lentil & Veg Stew', details: '400 kcal, 24g protein' },
      { meal: 'Evening', food: 'Protein Shake', details: '105 kcal, 20g protein' }
    ]
  }
];

const TableContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const MealPlan: React.FC = () => {
  return (
    <>
      <h1>1758 kcal/day Heart-Healthy Meal Plans</h1>
      {mealPlans.map((dayPlan) => (
        <React.Fragment key={dayPlan.day}>
          <h2>Day {dayPlan.day}</h2>
          <TableContainer>
            <table>
              <thead>
                <tr>
                  <th>Meal</th>
                  <th>Food</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {dayPlan.meals.map((meal, index) => (
                  <tr key={index}>
                    <td data-label="Meal">{meal.meal}</td>
                    <td data-label="Food">{meal.food}</td>
                    <td data-label="Details">{meal.details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        </React.Fragment>
      ))}
    </>
  );
};

export default MealPlan; 