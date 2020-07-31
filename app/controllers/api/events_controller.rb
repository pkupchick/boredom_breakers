class Api::EventsController < ApplicationController

    def index
        @events = Event.all
    end

    private

    def event_params
        params.require(:event).permit(:host_id, :title, :description,
        :price, :location, :category, :max_attendees)
    end
end
