json.extract! @event, :id, :host_id, :title, :description, :event_start, :event_end, :event_start_time, :event_end_time, :price, :location, :category, :max_attendees

if (@event.photo.attached?)
  json.image_url url_for(@event.photo)
end
