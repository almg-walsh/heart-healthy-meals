import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0 1rem;
    background: #fffdf7;
    color: #333;
    max-width: 100%;
    overflow-x: hidden;
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
    margin: 1rem 0;

    @media (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  h2 {
    font-size: 1.2rem;
    margin: 1.5rem 0 0.5rem;

    @media (max-width: 480px) {
      font-size: 1.1rem;
    }
  }

  .table-container {
    width: 100%;
    margin: 1rem 0;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 0;
    font-size: 0.9rem;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 0.75rem;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }

  tr:nth-child(even) {
    background-color: #fafafa;
  }

  @media (max-width: 768px) {
    table, thead, tbody, th, td, tr {
      display: block;
    }
    
    thead tr {
      display: none;
    }
    
    tr {
      margin-bottom: 1rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: white;
    }
    
    td {
      display: flex;
      padding: 0.75rem;
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }
    
    td:last-child {
      border-bottom: none;
    }
    
    td:before {
      content: attr(data-label);
      position: absolute;
      left: 0.5rem;
      width: 45%;
      font-weight: bold;
      color: #666;
    }
  }
`; 