class Api::QuestionsController < ApplicationController

    # GET 
    def all
      @questions = Question.all
      json_response(@questions)
    end
  
    # POST /questions
    def create
      @questions = Question.create!(:question_params)
      json_response(@questions, :created)
    end
  
    # GET /questions/:id
    def show
      @question = Question.find(params[:id])
      json_response(@question)
    end
  
    # PUT /questions/:id
    def update
      @question = Question.find(params[:id])
      @question.update(:question_params)
      head :no_content
    end
  
    # DELETE /questions/:id
    def destroy
      @question = Question.find(params[:id])
      @question.destroy
      head :no_content
    end
  
    private

    def question_params
        params.require(:question).permit(:question)
      end
end
