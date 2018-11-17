FactoryBot.define do
    factory :answer do
      option { Faker::StarWars.character }
      score { Faker::Number.number(1)}
      todo_id nil
    end
  end