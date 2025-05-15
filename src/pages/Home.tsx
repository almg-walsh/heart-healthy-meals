import React from 'react';
import styled from 'styled-components';

interface FoodItem {
  rank: number;
  food: string;
  protein: string;
  benefits: string;
  price: string;
  notes: string;
}

const foods: FoodItem[] = [
  { rank: 1, food: 'Lentils', protein: '9g', benefits: 'Fibre-rich, lowers cholesterol', price: '0.60–1.20', notes: 'Buy dried for value' },
  { rank: 2, food: 'Mackerel (tinned)', protein: '18–20g', benefits: 'Omega-3, anti-inflammatory', price: '0.80–1.50', notes: 'Great value in tins' },
  { rank: 3, food: 'Chickpeas', protein: '7–9g', benefits: 'Potassium, regulates pressure', price: '0.40–1.00', notes: 'Good in stews, salads' },
  { rank: 4, food: 'Eggs', protein: '12.5g', benefits: 'HDL cholesterol, nutrients', price: '1.20–2.00', notes: 'Free range recommended' },
  { rank: 5, food: 'Oats', protein: '11–13g', benefits: 'Beta-glucan fibre', price: '0.70–1.50', notes: 'Porridge or overnight oats' },
  { rank: 6, food: 'Tofu', protein: '8–12g', benefits: 'Improves vascular function', price: '1.50–2.00', notes: 'Use firm tofu' },
  { rank: 7, food: 'Sardines (tinned)', protein: '20–25g', benefits: 'Omega-3, calcium', price: '0.70–1.40', notes: 'In tomato/brine' },
  { rank: 8, food: 'Greek yoghurt', protein: '10g+', benefits: 'Calcium, potassium', price: '0.85–1.50', notes: 'Choose plain, low-fat' },
  { rank: 9, food: 'Chicken thigh', protein: '24g', benefits: 'Iron, B vitamins', price: '2.50–3.50/kg', notes: 'Better value than breast' },
  { rank: 10, food: 'Frozen veg mix', protein: '1–3g', benefits: 'Fibre, antioxidants', price: '1.00–1.50/kg', notes: 'Steam or stir-fry' }
];

const TableContainer = styled.div`
  width: 100%;
  margin: 1rem 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Home: React.FC = () => {
  return (
    <>
      <h1>Top Heart-Healthy, High-Protein Foods (UK)</h1>
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Food</th>
              <th>Protein (per 100g)</th>
              <th>Heart Health Benefits</th>
              <th>Price (£)</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {foods.map((food) => (
              <tr key={food.rank}>
                <td data-label="Rank">{food.rank}</td>
                <td data-label="Food">{food.food}</td>
                <td data-label="Protein">{food.protein}</td>
                <td data-label="Benefits">{food.benefits}</td>
                <td data-label="Price">{food.price}</td>
                <td data-label="Notes">{food.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default Home; 