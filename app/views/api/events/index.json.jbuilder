# @events.each do |event|
#   json.set! event.id do
#     json.partial! 'event', event: event
#   end
# end

json.array! @events do |event|
  json.extract! event, :id, :host_id, :title, :description, :event_start, :event_end, :event_start_time, :event_end_time, :price, :location, :category, :max_attendees
  json.photoUrl url_for(event.photo)
end