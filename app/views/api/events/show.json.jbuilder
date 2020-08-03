json.extract! @event, :id, :host_id, :title, :description, :event_start, :event_end, :event_start_time, :event_end_time, :price, :location, :category, :max_attendees

if (@event.photo.attached?)
  json.photo @event.photo
  json.photoUrl url_for(@event.photo)
end
