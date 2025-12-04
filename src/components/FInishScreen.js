export default function FinishScreen({ points, maxPossiblePoints }) {
  return (
    <div className="result">
      You scored {points} of {maxPossiblePoints}
      🙌;
    </div>
  );
}
