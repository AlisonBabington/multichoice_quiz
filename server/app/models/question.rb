class Question < ApplicationRecord
    has_many :answer, dependent: :destroy
    validates_presence_of :question
end
