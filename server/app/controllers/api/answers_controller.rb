class Api::AnswersController < ApplicationController

     # GET 
     def index
        @answers = Answer.all
        json_response(@answers)
      end
    
      # POST 
      def create
        @answers = Answer.create!(answer_params)
        json_response(@answers, :created)
      end
    
      # GET /answers/:id
      def show
        @answer = Answer.find(params[:id])
        json_response(@answer)
      end
    
      # PUT /answers/:id
      def update
        @questions.update(answer_params)
        head :no_content
      end
    
      # DELETE /answers/:id
      def destroy
        @answer = Answer.find(params[:id])
        @answer.destroy
        head :no_content
      end

      private

      def answer_params
        params.permit(:option, :score)
      end

end
