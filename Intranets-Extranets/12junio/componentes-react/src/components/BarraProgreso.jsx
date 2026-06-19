import { Progress } from "reactstrap";

export default function BarraProgreso({ skill, color, value }) {
    return (
        <>
            <h4>Skill</h4>
            <Progress
                color={color}
                value={value}
            />
        </>
    )
}