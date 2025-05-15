import React from 'react';
import styled from 'styled-components';

interface Meal {
  name: string;
  ingredients: string[];
  calories: string;
}

interface MealTableProps {
  meals: Meal[];
  selectedMeal: string | null;
  onMealSelect: (mealName: string) => void;
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

const MealRow = styled.tr<{ isSelected: boolean }>`
  background-color: ${props => props.isSelected ? '#e3f2fd' : 'transparent'};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.isSelected ? '#bbdefb' : '#f8f9fa'};
  }
`;

const MealName = styled.td`
  color: #007bff;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const IngredientsList = styled.ul`
  margin: 0;
  padding-left: 20px;
  list-style-type: disc;
`;

const MealTable: React.FC<MealTableProps> = ({ meals, selectedMeal, onMealSelect }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Ingredients</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal) => (
            <MealRow 
              key={meal.name} 
              id={meal.name}
              isSelected={selectedMeal === meal.name}
            >
              <MealName onClick={() => onMealSelect(meal.name)}>
                {meal.name}
              </MealName>
              <td>
                <IngredientsList>
                  {meal.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </IngredientsList>
              </td>
              <td>{meal.calories}</td>
            </MealRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default MealTable; 