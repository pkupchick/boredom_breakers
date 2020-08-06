class Api::RegistrationsController < ApplicationController
    
    def tickets
    @user = User.find_by(id: params[:user][:id])
        if @user
            events = []
            tickets = @user.registrations
            tickets.each do |ticket|
                events << Event.find_by(id: ticket.event_id)
            end
            render :json => { tickets: events }
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def create
        @ticket = Registration.create!(ticket_params)
        render :show
    end

    private
    
    def ticket_params
        params.require(:registration).permit(:user_id, :event_id)
    end
end
