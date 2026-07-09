// db.createCollection("exams");

db.exams.insertMany([
  {
    _id: UUID("668cb1e2e4b0f5a1e5e5e5e5"),
    title: "สอบมิดเทอม วิชาคอมพิวเตอร์เบื้องต้น",
    description: "ข้อสอบวัดความรู้พื้นฐานเกี่ยวกับระบบฐานข้อมูลและ SQL",
    time_limit: 60,
    total_score: 20,
    questions: [
      {
        question_id: "q_001",
        question_text: "PostgreSQL จัดเป็นฐานข้อมูลประเภทใด?",
        score: 1,
        choices: [
          {
            choice_id: "c_01",
            choice_text: "NoSQL Database",
            is_correct: false,
          },
          {
            choice_id: "c_02",
            choice_text: "Relational Database (RDBMS)",
            is_correct: true,
          },
          {
            choice_id: "c_03",
            choice_text: "Graph Database",
            is_correct: false,
          },
        ],
      },
      {
        question_id: "q_002",
        question_text: "คำสั่ง SQL ใดใช้สำหรับดึงข้อมูลจากฐานข้อมูล?",
        score: 1,
        choices: [
          { choice_id: "c_04", choice_text: "INSERT", is_correct: false },
          { choice_id: "c_05", choice_text: "UPDATE", is_correct: false },
          { choice_id: "c_06", choice_text: "SELECT", is_correct: true },
          { choice_id: "c_07", choice_text: "DELETE", is_correct: false },
        ],
      },
      {
        question_id: "q_003",
        question_text: "ข้อใดคือความหมายของ ACID ในฐานข้อมูล?",
        score: 2,
        choices: [
          {
            choice_id: "c_08",
            choice_text: "Atomicity, Consistency, Isolation, Durability",
            is_correct: true,
          },
          {
            choice_id: "c_09",
            choice_text: "Automation, Control, Integration, Data",
            is_correct: false,
          },
          {
            choice_id: "c_10",
            choice_text: "Access, Compute, Input, Display",
            is_correct: false,
          },
        ],
      },
      {
        question_id: "q_004",
        question_text: "MongoDB จัดเป็นฐานข้อมูลประเภทใด?",
        score: 1,
        choices: [
          {
            choice_id: "c_11",
            choice_text: "Relational Database",
            is_correct: false,
          },
          {
            choice_id: "c_12",
            choice_text: "NoSQL Database",
            is_correct: true,
          },
          {
            choice_id: "c_13",
            choice_text: "Object Database",
            is_correct: false,
          },
        ],
      },
    ],
  },
  {
    _id: UUID("668cb1e2e4b0f5a1e5e5e5e6"),
    title: "ข้อสอบวิชาคณิตศาสตร์ เรื่องแคลคูลัส",
    description: "แบบทดสอบความรู้เรื่องแคลคูลัสเบื้องต้น",
    time_limit: 90,
    total_score: 30,
    questions: [
      {
        question_id: "q_005",
        question_text: "อนุพันธ์ของ f(x) = 3x^2 + 2x + 1 คือข้อใด?",
        score: 2,
        choices: [
          { choice_id: "c_14", choice_text: "6x + 2", is_correct: true },
          { choice_id: "c_15", choice_text: "3x + 2", is_correct: false },
          { choice_id: "c_16", choice_text: "6x + 1", is_correct: false },
          { choice_id: "c_17", choice_text: "3x^2 + 2", is_correct: false },
        ],
      },
      {
        question_id: "q_006",
        question_text: "∫(2x) dx เท่ากับข้อใด?",
        score: 2,
        choices: [
          { choice_id: "c_18", choice_text: "x^2 + C", is_correct: false },
          { choice_id: "c_19", choice_text: "x^2 + C", is_correct: true },
          { choice_id: "c_20", choice_text: "2x^2 + C", is_correct: false },
          { choice_id: "c_21", choice_text: "2x + C", is_correct: false },
        ],
      },
      {
        question_id: "q_007",
        question_text: "ลิมิตของ (x^2 - 1)/(x - 1) เมื่อ x→1 เท่ากับเท่าใด?",
        score: 3,
        choices: [
          { choice_id: "c_22", choice_text: "0", is_correct: false },
          { choice_id: "c_23", choice_text: "1", is_correct: false },
          { choice_id: "c_24", choice_text: "2", is_correct: true },
          { choice_id: "c_25", choice_text: "หาค่าไม่ได้", is_correct: false },
        ],
      },
    ],
  },
  {
    _id: UUID("668cb1e2e4b0f5a1e5e5e5e7"),
    title: "ข้อสอบวิชาภาษาอังกฤษ เรื่อง Grammar",
    description: "แบบทดสอบไวยากรณ์ภาษาอังกฤษระดับกลาง",
    time_limit: 45,
    total_score: 15,
    questions: [
      {
        question_id: "q_008",
        question_text: "She ___ to school every day.",
        score: 1,
        choices: [
          { choice_id: "c_26", choice_text: "go", is_correct: false },
          { choice_id: "c_27", choice_text: "goes", is_correct: true },
          { choice_id: "c_28", choice_text: "going", is_correct: false },
          { choice_id: "c_29", choice_text: "gone", is_correct: false },
        ],
      },
      {
        question_id: "q_009",
        question_text: "He has been studying English ___ 3 years.",
        score: 1,
        choices: [
          { choice_id: "c_30", choice_text: "since", is_correct: false },
          { choice_id: "c_31", choice_text: "for", is_correct: true },
          { choice_id: "c_32", choice_text: "during", is_correct: false },
          { choice_id: "c_33", choice_text: "from", is_correct: false },
        ],
      },
      {
        question_id: "q_010",
        question_text: "Which sentence is correct?",
        score: 2,
        choices: [
          {
            choice_id: "c_34",
            choice_text: "If I was you, I would go.",
            is_correct: false,
          },
          {
            choice_id: "c_35",
            choice_text: "If I were you, I would go.",
            is_correct: true,
          },
          {
            choice_id: "c_36",
            choice_text: "If I am you, I would go.",
            is_correct: false,
          },
          {
            choice_id: "c_37",
            choice_text: "If I be you, I would go.",
            is_correct: false,
          },
        ],
      },
      {
        question_id: "q_011",
        question_text: "The book ___ on the table.",
        score: 1,
        choices: [
          { choice_id: "c_38", choice_text: "is", is_correct: true },
          { choice_id: "c_39", choice_text: "are", is_correct: false },
          { choice_id: "c_40", choice_text: "am", is_correct: false },
          { choice_id: "c_41", choice_text: "be", is_correct: false },
        ],
      },
    ],
  },
]);
