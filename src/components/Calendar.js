import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './Calendar.css';

const Calendar = () => {
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const API_KEY = 'AIzaSyAEmKQ72ReMZSZoT7TX1J7QJSj1SgnfErk';
    const CALENDAR_ID = 'c_a0b9891430a9649a5b905c98876473b5267539144b47752db6016148bb68efa8@group.calendar.google.com';

    // Fetch events directly using the public calendar URL
    fetch(`https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${API_KEY}&timeMin=${new Date().toISOString()}&maxResults=10&singleEvents=true&orderBy=startTime`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch calendar events');
        }
        return response.json();
      })
      .then(data => {
        if (data.items && data.items.length > 0) {
          const formattedEvents = data.items.map(event => ({
            title: event.summary,
            start: event.start.dateTime || event.start.date,
            end: event.end.dateTime || event.end.date,
            description: event.description || '',
            location: event.location || ''
          }));
          setEvents(formattedEvents);
          setUpcomingEvents(formattedEvents.slice(0, 3));
        } else {
          console.log('No upcoming events found.');
        }
      })
      .catch(error => {
        console.error('Error fetching events:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return (
      <div className="calendar-error">
        <p>Unable to load calendar events. Please try again later.</p>
        <p className="error-details">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="calendar-section">
      <div className="calendar-container">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          height="auto"
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
          }}
          editable={false}
          selectable={false}
          selectMirror={false}
          dayMaxEvents={true}
        />
      </div>
      <div className="upcoming-events">
        <h3>Upcoming Events</h3>
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event, index) => (
            <div key={index} className="event-bubble">
              <h4>{event.title}</h4>
              {event.description && (
                <p className="event-description">{event.description}</p>
              )}
              <p className="event-date">
                {new Date(event.start).toLocaleDateString('en-US', {
                  weekday: 'short',
                  month: 'short',
                  day: 'numeric'
                })}
              </p>
              <p className="event-time">
                {new Date(event.start).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit'
                })}
              </p>
              {event.location && <p className="event-location">{event.location}</p>}
            </div>
          ))
        ) : (
          <p className="no-events">No upcoming events</p>
        )}
      </div>
    </div>
  );
};

export default Calendar; 