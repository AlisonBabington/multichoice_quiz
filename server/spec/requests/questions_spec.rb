require 'rails_helper'

RSpec.describe 'Questions API', type: :request do
  # initialize test data 
  let!(:questions) { create_list(:question, 4) }
  let(:question_id) { questions.first.id }

  # Test suite for GET 
  describe 'GET /api/questions' do
    # make HTTP get request before each example
    before { get '/api/questions' }

    it 'returns questions' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(4)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

  # Test suite for GET /questions/:id
  describe 'GET /api/questions/:id' do
    before { get "/api/questions/#{question_id}" }

    context 'when the record exists' do
      it 'returns the todo' do
        expect(json).not_to be_empty
        expect(json['id']).to eq(question_id)
      end

      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end

  end

  # Test suite for POST 
  describe 'POST /api/questions' do
    # valid payload
    let(:valid_attributes) { { question: 'question'} }

    context 'when the request is valid' do
      before { post '/api/questions', params: valid_attributes }

      it 'creates a answer' do
        expect(json['question']).to eq('question')
      end

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

  end

  # Test suite for PUT /questions/:id
  describe 'PUT /api/questions/:id' do
    let(:valid_attributes) { { question: 'another' } }

    context 'when the record exists' do
      before { put "/api/questions/#{question_id}", params: valid_attributes }

      it 'updates the record' do
        expect(response.body).to be_empty
      end

      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end

  # Test suite for DELETE /questions/:id
  describe 'DELETE /api/questions/:id' do
    before { delete "/api/questions/#{question_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end