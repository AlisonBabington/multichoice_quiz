#create data to test request routes

FactoryBot.define do
    factory :question do
      question { Faker::Lorem.word }
      created_at { Faker::Number.number(10) }
    end
  end