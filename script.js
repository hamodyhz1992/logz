const questions = [
  {
    question: "ما هو أكبر كوكب في المجموعة الشمسية؟",
    options: ["الأرض", "المريخ", "المشتري", "زحل"],
    answer: "المشتري"
  },
  {
    question: "ما هي عاصمة مصر؟",
    options: ["الرياض", "القاهرة", "دمشق", "بيروت"],
    answer: "القاهرة"
  },
  {
    question: "ما هو أصغر حيوان ثديي في العالم؟",
    options: ["الفأر", "الخفاش", "الزرافة", "الحوت"],
    answer: "الخفاش"
  },
  {
    question: "من هو مؤسس شركة مايكروسوفت؟",
    options: ["بيل غيتس", "ستيف جوبز", "إلون ماسك", "مارك زوكربيرغ"],
    answer: "بيل غيتس"
  },
  {
    question: "ما هو أطول نهر في العالم؟",
    options: ["نهر النيل", "نهر الأمازون", "نهر اليانغتسي", "نهر الميسيسيبي"],
    answer: "نهر النيل"
  },
  {
    question: "ما هي اللغة الرسمية في اليابان؟",
    options: ["الإنجليزية", "الفرنسية", "اليابانية", "الكورية"],
    answer: "اليابانية"
  },
  {
    question: "كم عدد القارات في العالم؟",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "من هو أول إنسان سافر إلى الفضاء؟",
    options: ["نيل أرمسترونغ", "يوجين سيرنان", "يوري غاغارين", "باز ألدرين"],
    answer: "يوري غاغارين"
  },
  {
    question: "ما هو أسرع حيوان بري في العالم؟",
    options: ["النمر", "الفهد", "الأسد", "الذئب"],
    answer: "الفهد"
  },
  {
    question: "من هو شاعر العرب الأكبر؟",
    options: ["أحمد شوقي", "نزار قباني", "المتنبي", "كامل الشناوي"],
    answer: "المتنبي"
  },
  {
    question: "ما هو اسم أطول جبل في العالم؟",
    options: ["جبل إيفرست", "جبل كليمنجارو", "جبل فوجي", "جبل ماترهورن"],
    answer: "جبل إيفرست"
  },
  {
    question: "ما هو الحيوان الذي يستطيع تغيير لونه؟",
    options: ["الطاووس", "السلحفاة", "الاختناق", "الحرباء"],
    answer: "الحرباء"
  },
  {
    question: "ما هو اسم أطول نفق بحري في العالم؟",
    options: ["نفق القناة الإنجليزية", "نفق سياتل", "نفق سيبو", "نفق سانت كولومبيا"],
    answer: "نفق القناة الإنجليزية"
  },
  {
    question: "ما هي أكبر مدينة في العالم من حيث عدد السكان؟",
    options: ["نيويورك", "طوكيو", "مومباي", "شنغهاي"],
    answer: "طوكيو"
  },
  {
    question: "ما هو أعمق محيط في العالم؟",
    options: ["المحيط الأطلسي", "المحيط الهادئ", "المحيط الهندي", "المحيط المتجمد الشمالي"],
    answer: "المحيط الهادئ"
  },
  {
    question: "في أي عام وقعت حادثة 11 سبتمبر في الولايات المتحدة؟",
    options: ["2001", "1999", "2000", "2005"],
    answer: "2001"
  },
  {
    question: "ما هي أسرع طائرة في العالم؟",
    options: ["طائرة كونكورد", "طائرة بوينغ 747", "طائرة SR-71 بلاكبيرد", "طائرة إيرباص A380"],
    answer: "طائرة SR-71 بلاكبيرد"
  },
  {
    question: "ما هو اسم كوكب الأرض في النظام الشمسي؟",
    options: ["المريخ", "الأرض", "زحل", "المشتري"],
    answer: "الأرض"
  }
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const questionData = questions[currentQuestionIndex];
  document.getElementById('question').innerText = questionData.question;

  const optionsContainer = document.getElementById('options');
  optionsContainer.innerHTML = '';

  questionData.options.forEach(option => {
    const optionButton = document.createElement('div');
    optionButton.classList.add('option');
    optionButton.innerText = option;
    optionButton.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(optionButton);
  });
}

function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentQuestionIndex].answer;
  const resultContainer = document.getElementById('result');

  if (selectedOption === correctAnswer) {
    resultContainer.innerText = "إجابة صحيحة!";
    resultContainer.style.color = 'green';
  } else {
    resultContainer.innerText = "إجابة خاطئة! حاول مرة أخرى.";
    resultContainer.style.color = 'red';
  }

  document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    document.getElementById('result').innerText = '';
    document.getElementById('next-btn').disabled = true;
  } else {
    document.getElementById('result').innerText = 'لقد انتهيت من جميع الأسئلة!';
    document.getElementById('next-btn').disabled = true;
  }
}

document.getElementById('next-btn').onclick = nextQuestion;

loadQuestion();
