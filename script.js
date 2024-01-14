async function load() {
  // First, fetch events from the Google Apps Script API
  const response = await fetch('https://script.google.com/macros/s/AKfycbwZQnZiyq_zv3bmqjKETYdCmXo1-UXHcJAA1UmFvc5jrBhP4E7ybk4ra9Vs5toL4B9qEw/exec');

  const events = await response.json();

  const eventsContainer = document.getElementById('events-container');
  eventsContainer.innerHTML = '';

  // Loop through events and place them on page
  for (let event of events) {
    // if column name has space, you can use
    // event['Image URL']
    eventsContainer.innerHTML += `
      <div class="card w-72 bg-base-100 shadow-xl">
        <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
        <div class="card-body">
          <h2 class="card-title">${event.Name}</h2>
          <p>${event.Location}<br/>@ ${event.Date}</p>
          <div class="card-actions justify-end">
            <a class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</a>
          </div>
        </div>
      </div>
    `
  }

  //   eventsContainer.innerHTML =  events.map((event) => `
  //       <div class="card w-72 bg-base-100 shadow-xl">
  //         <figure><img src="${event.Image}" alt="${event.Name}" /></figure>
  //         <div class="card-body">
  //           <h2 class="card-title">${event.Name}</h2>
  //           <p>${event.Location}<br/>@ ${event.Date}</p>
  //           <div class="card-actions justify-end">
  //             <button class="btn btn-primary" href="${event.Link}" target="_blank">RSVP</button>
  //           </div>
  //         </div>
  //       </div>
  //     `).join()

}

load();
