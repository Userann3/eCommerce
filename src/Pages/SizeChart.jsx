import React from 'react';

const SizeChart = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <table style={{
        borderCollapse: 'collapse', 
        width: '60%', 
        textAlign: 'center', 
        border: '1px solid black',
      }}>
        <thead>
          <tr>
            <th style={styles.cell}>Size</th>
            <th style={styles.cell}>Neck</th>
            <th style={styles.cell}>Chest</th>
            <th style={styles.cell}>Waist</th>
            <th style={styles.cell}>Sleeve</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td style={styles.cell}>{row.size}</td>
              <td style={styles.cell}>{row.neck}</td>
              <td style={styles.cell}>{row.chest}</td>
              <td style={styles.cell}>{row.waist}</td>
              <td style={styles.cell}>{row.sleeve}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  cell: {
    border: '1px solid black', // Add border to every cell
    padding: '8px', // Add padding for spacing
  },
};

const tableData = [
  { size: 'S', neck: '14–14½″', chest: '34–36″', waist: '28–30″', sleeve: '32–33″' },
  { size: 'M', neck: '15–15½″', chest: '38–40″', waist: '32–34″', sleeve: '33–34″' },
  { size: 'L', neck: '16–16½″', chest: '42–44″', waist: '36–38″', sleeve: '34–35″' },
  { size: 'XL', neck: '17–17½″', chest: '46–48″', waist: '40–42″', sleeve: '35–36″' },
  { size: '2XL', neck: '18–18½″', chest: '50–52″', waist: '44–46″', sleeve: '36–37″' },
  { size: '3XL', neck: '19–19½″', chest: '54–56″', waist: '48–50″', sleeve: '37–38″' },
  { size: '4XL', neck: '20½–21″', chest: '58–60″', waist: '53–55″', sleeve: '38–38½″' },
  { size: '5XL', neck: '22–22½″', chest: '62–64″', waist: '58–60″', sleeve: '38½–39″' },
];

export default SizeChart;
