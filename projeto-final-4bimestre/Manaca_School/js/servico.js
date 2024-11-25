/*___________________________________SERVIÇO.HTML___________________________________*/
function submitQuiz() {
  const form = document.forms["quizForm"];
  let answers = [];

  //RESPONDEU TUDO?
  for (let i = 1; i <= 8; i++) {
    const answer = form[`q${i}`];
    if (!answer || !Array.from(answer).some((option) => option.checked)) {
      alert(`Por favor, responda todas as perguntas.`);
      return;
    }

    answers.push(Array.from(answer).find((option) => option.checked).value);
  }

  //AVALIAÇÃO DAS RESPOSTAS
  let course = "";
  if (answers.filter((ans) => ans === "AI").length >= 2) {
    course =
      "Curso de Inteligência Artificial - Aprenda as habilidades essenciais para dominar IA!";
  } else if (answers.filter((ans) => ans === "Metaverse").length >= 2) {
    course =
      "Curso de Realidade Virtual - Explore o futuro do Metaverso e crie experiências imersivas!";
  } else if (answers.filter((ans) => ans === "Business").length >= 2) {
    course = "Curso de Blockchain e Web3 - Domine as tecnologias do futuro!";
  } else {
    course = "Curso Geral - Um curso básico para quem quer começar a aprender!";
  }

  // RESULTADO
  document.getElementById("result").style.display = "block";
  document.getElementById("resultTitle").innerText = "Recomendação de Curso";
  document.getElementById("resultDescription").innerText = course;
}
