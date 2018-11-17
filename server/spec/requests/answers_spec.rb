
  require 'rails_helper'

  RSpec.describe 'Answers API', type: :request do
    # initialize test data 
    let!(:answers) { create_question(:answer, 4) }
    let(:answer_id) { answers.first.id }
  
    # Test suite for GET 
    describe 'GET /answers' do
      # make HTTP get request before each example
      before { get '/answers' }
  
      it 'returns answers' do
        # Note `json` is a custom helper to parse JSON responses
        expect(json).not_to be_empty
        expect(json.size).to eq(4)
      end
  
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end
    end
  
    # Test suite for GET /answers/:id
    describe 'GET /answers/:id' do
      before { get "/answers/#{answer_id}" }
  
      context 'when the record exists' do
        it 'returns the todo' do
          expect(json).not_to be_empty
          expect(json['id']).to eq(todo_id)
        end
  
        it 'returns status code 200' do
          expect(response).to have_http_status(200)
        end
      end
  
      context 'when the record does not exist' do
        let(:question_id) { 100 }
  
        it 'returns status code 404' do
          expect(response).to have_http_status(404)
        end
  
        it 'returns a not found message' do
          expect(response.body).to match(/Couldn't find Todo/)
        end
      end
    end
  
    # Test suite for POST 
    describe 'POST /answers' do
      # valid payload
      let(:valid_attributes) { { option: 'option', score: 5, created_by: '1' } }
  
      context 'when the request is valid' do
        before { post '/answers', params: valid_attributes }
  
        it 'creates a answer' do
          expect(json['option']).to eq('option')
        end
  
        it 'returns status code 201' do
          expect(response).to have_http_status(201)
        end
      end
  
      context 'when the request is invalid' do
        before { post '/answers', params: { option: 'Foobar' } }
  
        it 'returns status code 422' do
          expect(response).to have_http_status(422)
        end
  
        it 'returns a validation failure message' do
          expect(response.body)
            .to match(/Validation failed: Created by can't be blank/)
        end
      end
    end
  
    # Test suite for PUT /answers/:id
    describe 'PUT /answers/:id' do
      let(:valid_attributes) { { option: 'another' } }
  
      context 'when the record exists' do
        before { put "/todos/#{answer_id}", params: valid_attributes }
  
        it 'updates the record' do
          expect(response.body).to be_empty
        end
  
        it 'returns status code 204' do
          expect(response).to have_http_status(204)
        end
      end
    end
  
    # Test suite for DELETE /answers/:id
    describe 'DELETE /answers/:id' do
      before { delete "/answers/#{answer_id}" }
  
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end
    end
  end