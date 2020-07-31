class Api::EventsController < ApplicationController

    def index
        @events = Event.all
    end

    def show
        @event = Event.find(params[:id])
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
        params.require(:event).permit(:host_id, :title, :description,
        :price, :location, :category, :max_attendees)
    end
end
