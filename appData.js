/*
Structure for individual content items:
{
  title: "String", // Title of the knowledge point
  description: "String", // Explanatory text
  imageURL: "String", // Optional URL for an accompanying image
  interactiveQuiz: { // Optional interactive quiz
    question: "String", // Question text
    options: [
      { text: "String", isCorrect: Boolean }, // Option 1
      { text: "String", isCorrect: Boolean }, // Option 2
      // ... more options
    ],
    explanation: "String" // Explanation for the correct answer
  }
}
*/
const appData = {
  introduction: [
    {
      title: "歡迎來到我們的學習模組",
      description: "本模組旨在介紹核心概念，並透過互動式範例和測驗來增強理解。",
      imageURL: "http://example.com/intro_image.png",
      interactiveQuiz: null
    }
  ],
  keyTerms: [
    {
      title: "關鍵術語：第一項",
      description: "這是第一個關鍵術語的詳細解釋。",
      imageURL: "",
      interactiveQuiz: null
    },
    {
      title: "關鍵術語：第二項",
      description: "這是第二個關鍵術語的詳細解釋，附帶一個測驗。",
      imageURL: "http://example.com/keyterm_image.png",
      interactiveQuiz: {
        question: "關於第二個關鍵術語，以下哪個陳述是正確的？",
        options: [
          { text: "陳述A (錯誤)", isCorrect: false },
          { text: "陳述B (正確)", isCorrect: true },
          { text: "陳述C (錯誤)", isCorrect: false }
        ],
        explanation: "陳述B是正確的，因為它準確地描述了該術語的核心特性。"
      }
    }
  ],
  principleComparison: [
    {
      title: "原則比較：A vs B",
      description: "這裡我們比較原則A和原則B的主要異同點。",
      imageURL: "http://example.com/comparison_image.png",
      interactiveQuiz: null
    }
  ],
  applicationExamples: [
    {
      title: "應用範例：真實世界場景",
      description: "一個關於如何在真實世界中應用這些概念的範例。",
      imageURL: "",
      interactiveQuiz: {
        question: "此應用範例主要展示了哪個概念？",
        options: [
          { text: "概念X", isCorrect: false },
          { text: "概念Y", isCorrect: false },
          { text: "概念Z (正確答案)", isCorrect: true }
        ],
        explanation: "概念Z是正確答案，因為範例中的情況直接體現了其應用。"
      }
    }
  ],
  quiz: [
    {
      title: "綜合測驗：第一部分",
      description: "這個測驗涵蓋了模組介紹和關鍵術語的內容。",
      imageURL: "",
      interactiveQuiz: {
        question: "模組的主要目標是什麼？",
        options: [
          { text: "目標1 (不完全)", isCorrect: false },
          { text: "目標2 (正確)", isCorrect: true },
          { text: "目標3 (無關)", isCorrect: false }
        ],
        explanation: "目標2最能概括模組的核心宗旨。"
      }
    },
    {
      title: "綜合測驗：第二部分",
      description: "這個測驗專注於原則比較和應用範例。",
      imageURL: "http://example.com/quiz_image.png",
      interactiveQuiz: {
        question: "在原則比較中，原則A和原則B的主要區別是什麼？",
        options: [
          { text: "區別1 (次要)", isCorrect: false },
          { text: "區別2 (主要)", isCorrect: true },
          { text: "區別3 (錯誤)", isCorrect: false }
        ],
        explanation: "區別2指出了兩者之間最根本的不同。"
      }
    }
  ]
};
