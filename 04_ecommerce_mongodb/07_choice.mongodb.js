db.choices.insertMany([
  {
    _id: UUID("66a1b2c3d4e5f6a7b8c9d0e1"),
    exam_id: UUID("668cb1e2e4b0f5a1e5e5e5e5"),
    keys: [
      {
        question_id: "q_001",
        correct_choice_id: "c_02",
        describe_correct: "PostgreSQL เป็น Relational Database (RDBMS)",
      },
      {
        question_id: "q_002",
        correct_choice_id: "c_06",
        describe_correct: "SELECT ใช้สำหรับดึงข้อมูลจากฐานข้อมูล",
      },
      {
        question_id: "q_003",
        correct_choice_id: "c_08",
        describe_correct:
          "ACID ย่อมาจาก Atomicity, Consistency, Isolation, Durability",
      },
      {
        question_id: "q_004",
        correct_choice_id: "c_12",
        describe_correct: "MongoDB เป็น NoSQL Database แบบ Document-oriented",
      },
    ],
  },
  {
    _id: UUID("66a1b2c3d4e5f6a7b8c9d0e2"),
    exam_id: UUID("668cb1e2e4b0f5a1e5e5e5e6"),
    keys: [
      {
        question_id: "q_005",
        correct_choice_id: "c_14",
        describe_correct: "อนุพันธ์ของ 3x^2 + 2x + 1 คือ 6x + 2",
      },
      {
        question_id: "q_006",
        correct_choice_id: "c_19",
        describe_correct: "∫(2x) dx = x^2 + C",
      },
      {
        question_id: "q_007",
        correct_choice_id: "c_24",
        describe_correct:
          "(x^2 - 1)/(x - 1) = x + 1 เมื่อ x≠1 ดังนั้นเมื่อ x→1 ได้ 2",
      },
    ],
  },
  {
    _id: UUID("66a1b2c3d4e5f6a7b8c9d0e3"),
    exam_id: UUID("668cb1e2e4b0f5a1e5e5e5e7"),
    keys: [
      {
        question_id: "q_008",
        correct_choice_id: "c_27",
        describe_correct: "She เป็นเอกพจน์ ใช้ goes",
      },
      {
        question_id: "q_009",
        correct_choice_id: "c_31",
        describe_correct: "ใช้ for กับระยะเวลา 3 years",
      },
      {
        question_id: "q_010",
        correct_choice_id: "c_35",
        describe_correct: "If I were you เป็น Subjunctive mood ที่ถูกต้อง",
      },
      {
        question_id: "q_011",
        correct_choice_id: "c_38",
        describe_correct: "The book เป็นเอกพจน์ ใช้ is",
      },
    ],
  },
]);
