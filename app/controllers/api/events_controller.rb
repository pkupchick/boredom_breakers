class Api::EventsController < ApplicationController

    def index
        @events = Event.all
    end

    def show
        @event = Event.find(params[:id])
        render :show
    end

    def update
        @event = Event.find(params[:id])
        if @event.update!(event_params)
            render :show
        else
            render json: @event.errors.full_messages, status: 422
        end
    end

    def create
        @event = Event.create!(event_params)
        render :show
    end

    def destroy
        @event = Event.find(params[:id])
        @event.destroy
        render :index
    end

    private

    def event_params
        params.require(:event).permit(:host_id, :title, :description, :photo, :event_start, :event_end,
        :event_start_time, :event_end_time, :price, :location, :category, :max_attendees)
    end
end
