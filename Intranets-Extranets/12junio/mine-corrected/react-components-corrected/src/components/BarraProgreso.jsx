import { Progress } from 'reactstrap';

export default function BarraProgreso({ skill, color, value }) {
  return (
    <div className="skill-item">
      <h4>{skill}</h4>
      <Progress color={color} value={value}>
        {value}%
      </Progress>
    </div>
  );
}

