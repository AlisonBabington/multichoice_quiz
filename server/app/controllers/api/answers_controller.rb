class Api::AnswersController < ApplicationController

     # GET 
     def all
        @answers = Answer.all
        json_response(@answers)
      end
    
      # POST 
      def create
        @answers = Answer.create!(:answers)
        json_response(@answers, :created)
      end
    
      # GET /answers/:id
      def show
        @answer = Answer.find(params[:id])
        json_response(@answer)
      end
    
      # PUT /answers/:id
      def update
        @questions.update(:answer)
        head :no_content
      end
    
      # DELETE /answers/:id
      def destroy
        @answer = Answer.find(params[:id])
        @answer.destroy
        head :no_content
      end

end
