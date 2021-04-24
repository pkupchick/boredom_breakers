class Api::EventsController < ApplicationController

    def index
        if params[:filter]
            filter = params[:filter]
            if filter[:searchParams]
                search_params = "%#{filter[:searchParams]}%"
                @events = Event.select("*").where("UPPER(title) LIKE UPPER(?) OR UPPER(description) LIKE UPPER(?)", search_params, search_params)
            end
        else
            @events = Event.all
        end
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
        render json: @event
    end

    private

    def event_params
        params.require(:event).permit(:host_id, :title, :description, :photo, :event_start, :event_end,
        :event_start_time, :event_end_time, :price, :location, :category, :max_attendees)
    end
end
