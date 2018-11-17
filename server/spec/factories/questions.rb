#create data to test request routes

FactoryBot.define do
    factory :question do
      question { Faker::Lorem.word }
      created_at { Faker::Number.number(digits = 10) }
    end
  end