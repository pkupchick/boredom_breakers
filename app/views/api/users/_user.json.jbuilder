json.user do
  json.extract! user, :id, :email, :name
  json.purchased_event_ids user.registrations.map { |ticket| ticket.event.id }
end

json.events do
  # debugger
  user.all_events.each do |event|
    json.set! event.id do 
      json.extract! event, :id, :host_id, :title, :event_start, :event_start_time
    end
  end
end