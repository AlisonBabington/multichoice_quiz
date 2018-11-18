import axios from 'axios';

export function setQuestionData(questions) {
    return {
        type: 'QUESTIONS_LOADED',
        questions
    }
}

export function currentQuestionChosen(question) {
    console.log('hi', question)
    return {
        type: 'CURRENT_QUESTION',
        question
    }
}

export function questionsFetchData() {
    return function(dispatch) {
      return axios.get("/api/questions")
        .then(({ data }) =>  dispatch(setQuestionData(data)))
        .catch((error) => {
           console.log(error)
        });
  }

}







