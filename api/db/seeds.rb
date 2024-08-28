questions = [
  {
    question_id: "question_a",
    title: "Little interest or pleasure in doing things?"
  },
  {
    question_id: "question_b",
    title: "Feeling down, depressed, or hopeless?"
  },
  {
    question_id: "question_c",
    title: "Sleeping less than usual, but still have a lot of energy?"
  },
  {
    question_id: "question_d",
    title: "Starting lots more projects than usual or doing more risky things than usual?"
  },
  {
    question_id: "question_e",
    title: "Feeling nervous, anxious, frightened, worried, or on edge?"
  },
  {
    question_id: "question_f",
    title: "Feeling panic or being frightened?"
  },
  {
    question_id: "question_g",
    title: "Avoiding situations that make you feel anxious?"
  },
  {
    question_id: "question_h",
    title: "Drinking at least 4 drinks of any kind of alcohol in a single day?"
  }
]

answers = [
  {
    title: "Not at all",
    value: 0
  },
  {
    title: "Rare, less than a day or two",
    value: 1
  },
  {
    title: "Several days",
    value: 2
  },
  {
    title: "More than half the days",
    value: 3
  },
  {
    title: "Nearly every day",
    value: 4
  }
]

domains = [
  {
    name: "depression",
    minimum_score: 2,
    assessment: "PHQ-9"
  },
  {
    name: "mania",
    minimum_score: 2,
    assessment: "ASRM"
  },
  {
    name: "anxiety",
    minimum_score: 2,
    assessment: "PHQ-9"
  },
  {
    name: "substance_use",
    minimum_score: 1,
    assessment: "ASSIST"
  }
]

mappings = [
  {
    question_id: "question_a",
    domain: "depression"
  },
  {
    question_id: "question_b",
    domain: "depression"
  },
  {
    question_id: "question_c",
    domain: "mania"
  },
  {
    question_id: "question_d",
    domain: "mania"
  },
  {
    question_id: "question_e",
    domain: "anxiety"
  },
  {
    question_id: "question_f",
    domain: "anxiety"
  },
  {
    question_id: "question_g",
    domain: "anxiety"
  },
  {
    question_id: "question_h",
    domain: "substance_use"
  }
]

questions.each do |question|
  Question.create!(question)
end

answers.each do |answer|
  Answer.create!(answer)
end

domains.each do |domain|
  Domain.create!(domain)
end

mappings.each do |mapping|
  question = Question.find_by(question_id: mapping[:question_id])
  domain = Domain.find_by(name: mapping[:domain])
  DomainMapping.create!(question: question, domain: domain)
end
