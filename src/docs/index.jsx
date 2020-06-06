import React from "react";
import { render } from "react-dom";
import Quiz from "../../lib/Quiz";
import {quiz} from './quiz';

function CustomCom(params) {
  console.log(params);
  return <div>Test</div>
}

function App() {
  const displayCustom = (params) => {
    return <CustomCom params={params} />
  };

  return (
    <div>
      <Quiz
        quiz={quiz}
        shuffle={true}
        showInstantFeedback={true}
        continueTillCorrect={true}
        displayCustomComponent={displayCustom}
      />
    </div>
  );
}

render(<App />, document.getElementById("app"));
