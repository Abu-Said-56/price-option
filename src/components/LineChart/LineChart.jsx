import { LineChart as LChart, Line, XAxis, YAxis} from 'recharts';

const LineChart = () => {

    const mathMarksData = [
      {id: 1,    name: "John",        mathMarks: 85,   physicsMarks: 78,  chemistryMarks: 90},
      {id: 2,    name: "Emma",        mathMarks: 78,   physicsMarks: 85,  chemistryMarks: 92},
      {id: 3,    name: "Michael",     mathMarks: 92,   physicsMarks: 90,  chemistryMarks: 88},
      {id: 4,    name: "Sophia",      mathMarks: 88,   physicsMarks: 84,  chemistryMarks: 85},
      {id: 5,    name: "William",     mathMarks: 79,   physicsMarks: 75,  chemistryMarks: 80},
      {id: 6,    name: "Olivia",      mathMarks: 84,   physicsMarks: 82,  chemistryMarks: 78},
      {id: 7,    name: "James",       mathMarks: 90,   physicsMarks: 88,  chemistryMarks: 92},
      {id: 8,    name: "Ava",         mathMarks: 95,   physicsMarks: 93,  chemistryMarks: 94},
      {id: 9,    name: "Alexander",   mathMarks: 87,   physicsMarks: 89,  chemistryMarks: 86},
      {id: 10,   name: "Emily",       mathMarks: 82,   physicsMarks: 80,  chemistryMarks: 85}
      ];

    return (
        <div>
            <LChart width={800} height={500} data={mathMarksData}>
                <XAxis dataKey='id' />
                <YAxis></YAxis>
            <Line dataKey="mathMarks"></Line>
            <Line dataKey='physicsMarks' stroke='blue'></Line>
            <Line dataKey='chemistryMarks' stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;