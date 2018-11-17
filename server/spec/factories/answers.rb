FactoryBot.define do
    factory :answer do
      option { Faker::StarWars.character }
      score { Faker::Number.number(digits = 1)}
      question_id 1
    end
  end