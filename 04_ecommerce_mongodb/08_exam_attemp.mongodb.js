// db.createCollection("exam_attemp");

db.exam_attemp.insertMany([
  {
    _id: UUID("668cb1f5e4b0f5a1f6f6f6f6"),
    user_id: UUID("9af85972-5909-4720-9cca-46190b5a5ff8"),
    exam_id: UUID("668cb1e2e4b0f5a1e5e5e5e5"),
    start_date: ISODate("2026-07-09T10:00:00Z"),
    end_date: ISODate("2026-07-09T10:45:00Z"),
    total_earned_score: 18,
    user_answers: [
      {
        question_id: "q_001",
        selected_choice_id: "c_02",
        describe_correct: true,
      },
      {
        question_id: "q_002",
        selected_choice_id: "c_06",
        describe_correct: true,
      },
      {
        question_id: "q_003",
        selected_choice_id: "c_08",
        describe_correct: true,
      },
      {
        question_id: "q_004",
        selected_choice_id: "c_12",
        describe_correct: true,
      },
    ],
  },
  {
    _id: UUID("668cb1f5e4b0f5a1f6f6f6f7"),
    user_id: UUID("668cb1a2e4b0f5a1a1a1a1a2"),
    exam_id: UUID("668cb1e2e4b0f5a1e5e5e5e6"),
    start_date: ISODate("2026-07-09T14:00:00Z"),
    end_date: ISODate("2026-07-09T15:20:00Z"),
    total_earned_score: 25,
    user_answers: [
      {
        question_id: "q_005",
        selected_choice_id: "c_14",
        describe_correct: true,
      },
      {
        question_id: "q_006",
        selected_choice_id: "c_19",
        describe_correct: true,
      },
      {
        question_id: "q_007",
        selected_choice_id: "c_24",
        describe_correct: true,
      },
    ],
  },
]);
