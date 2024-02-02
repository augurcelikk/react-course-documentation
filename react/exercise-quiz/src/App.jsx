
import { useState } from 'react';
import './App.css'

function App() {
  const [userAnswer, setUserAnswer] = useState("");
  const [status, setStatus] = useState("typing"); //typing, submitting, success, error
  /*
  const [isSubmitting, setIsSubmitting] = useState("");
  const [isTyping, setIsTyping] = useState("");
  const [isError, setIsError] = useState("");
  const [isSuccess, setIsSucces] = useState("");
  */

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await checkAnswer(userAnswer);

      setStatus("success");
      //console.log(res);

    } catch (err) {
      //console.log(err);
      setStatus("error");
    }
    /*
    checkAnswer(userAnswer)
      .then((message) => { console.log(message) })
      .catch((err) => { console.log(err) });
      */
  }

  function handleUserAnswerChange(e) {
    setUserAnswer(e.target.value);
  }

  if (status === "success") {
    return <p>Tebrikler, kazandınız</p>
  }

  return (
    <div>
      <h1>Quiz</h1>
      <p>Türkiye'nin başkenti hangi şehirdir?</p>
      <form onSubmit={handleSubmit}>
        <textarea value={userAnswer} name="userAnswer" id="userAnswer" onChange={handleUserAnswerChange}></textarea>
        <button type="submit" disabled={userAnswer.length < 4 || status === "submitting" ? true : false}>Gönder</button>
        {status === "error" && <p>Yanlış cevap tekrar deneyiniz</p>}
      </form>

      {status === "submitting" && <p>Cavabınız kontrol ediliyor...</p>}
    </div>

  )
}


function checkAnswer(userAnswer) {

  return new Promise((resolve, reject) => {

    let isUserRight = userAnswer.toLowerCase() === "ankara";
    setTimeout(() => {

      if (isUserRight) {
        resolve("Tebrikler");
      } else {
        reject(new Error("Yanlış cevap. Tekrar deneyiniz"));
      }



    }, 3000);

  });
}

export default App
