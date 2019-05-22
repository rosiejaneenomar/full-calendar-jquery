
$(function(){
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      defaultDate: new Date(),
      navLinks: true,
      selectable: true,
      selectMirror: true,
      select: (arg) => {
        var title = prompt('Event Title:');
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay
          })
        }
        calendar.unselect()
      },
      editable: true,
      eventLimit: true,
      events: 
      [
        {
          title: 'Test Event',
          start: '2019-05-01'
        },
        {
          title: 'Long Event',
          start: '2019-05-07',
          end: '2019-05-10'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2019-05-09T16:00:00'
        },
        {
          groupId: 999,
          title: 'Repeating Event',
          start: '2019-05-16T16:00:00'
        },
        {
          title: 'Test Event',
          start: '2019-05-11',
          end: '2019-05-13'
        },
        {
          title: 'Test Event',
          start: '2019-05-12T10:30:00',
          end: '2019-05-12T12:30:00'
        },
        {
          title: 'Test Event',
          start: '2019-05-12T12:00:00'
        },
        {
          title: 'Test Event',
          start: '2019-05-12T14:30:00'
        },
        {
          title: 'Test Event',
          start: '2019-05-12T17:30:00'
        },
        {
          title: 'Test Event',
          start: '2019-05-12T20:00:00'
        },
        {
          title: 'Test Event',
          start: '2019-05-13T07:00:00'
        },
        {
          title: 'Click for Google',
          url: 'http://google.com/',
          start: '2019-05-28'
        }
      ]
    });
    calendar.render();
  });
