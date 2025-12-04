export default function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Wecome to the React Quiz</h2>
      <h3> {numQuestions} questions to test your react knowledge.</h3>
      <button className="btn btn-ui"> Let's start</button>
    </div>
  );
}
