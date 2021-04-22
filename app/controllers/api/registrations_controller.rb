class Api::RegistrationsController < ApplicationController
    
    # def tickets
    # @user = User.find_by(id: params[:user][:id])
    #     if @user
    #         events = []
    #         tickets = @user.registrations
    #         tickets.each do |ticket|
    #             events << Event.find_by(id: ticket.event_id)
    #         end
    #         render :json => { tickets: events }
    #     else
    #         render json: @user.errors.full_messages, status: 401
    #     end
    # end

    def index
        @tickets = User.find_by_id(params[:user_id]).registrations
        if @tickets.length > 0
            events = @tickets.map { |ticket| ticket.event }
            render json: { tickets: events }
        else
            render json: ["No tickets"]
        end
    end

    def show
      @ticket = Registration.find(params[:id])
    end

    def create
        ticket = {
          user_id: params[:user_id],
          event_id: params[:event_id],
          event_title: params[:event_title]
        }
        @ticket = Registration.new(ticket)
        if @ticket.save!
          render :show
        else
          render @ticket.errors.full_messages, status: 401
        end
    end

    private
    
    def ticket_params
        params.require(:registration).permit(:user_id, :event_id)
    end
end
