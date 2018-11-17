#create data to test request routes

FactoryBot.define do
    factory :question do
      question { Faker::Lorem.word }
      created_by { Faker::Number.number(10) }
    end
  end