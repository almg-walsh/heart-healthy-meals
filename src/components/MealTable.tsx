import React from 'react';
import styled from 'styled-components';

interface Meal {
  meal: string;
  ingredients: string;
  calories: string;
}

interface MealTableProps {
  meals: Meal[];
}

const TableContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0;
  font-size: 0.9rem;
`;

const MealTable: React.FC<MealTableProps> = ({ meals }) => {
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Ingredients</th>
            <th>Calories & Protein</th>
          </tr>
        </thead>
        <tbody>
          {meals.map((meal, index) => (
            <tr key={index}>
              <td data-label="Meal">{meal.meal}</td>
              <td data-label="Ingredients">{meal.ingredients}</td>
              <td data-label="Calories & Protein">{meal.calories}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default MealTable; 