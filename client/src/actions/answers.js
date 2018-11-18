import axios from 'axios';

export function setAnswersData(answers) {
    return {
        type: 'ANSWERS_LOADED',
        answers
    }
}

export function answersFetchData() {
    return function(dispatch) {
      return axios.get("/api/answers")
        .then(({ data }) =>  dispatch(setAnswersData(data)))
        .catch((error) => {
           console.log(error)
        });
  }

}