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
end
