require 'rails_helper'

RSpec.describe Question, type: :model do
  #ensure relationship with answers table
  it {should have_many(:answer).dependent(:destroy)}
  #ensure question column is there before saving
  it { should validate_presence_of(:question)}
end



