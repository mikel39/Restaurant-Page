const home = () => {
  const div = document.createElement("div");

  div.id = "home-container";
  div.innerHTML = ` <h1>Real Restaurant</h1>
      <div>
        <p>
          At this restaurant, great food is just the beginning. Whether it's a
          date night, family gathering, or a relaxed meal with friends, we make
          every visit special with delicious dishes and a welcoming vibe.
        </p>
      </div>
      <div>
        <h2>Hours</h2>
        <p>Monday: 6am - 6pm</p>
        <p>Sunday: 8am - 8pm</p>
        <p>Tuesday: 6am - 6pm</p>
        <p>Wednesday: 6am - 6pm</p>
        <p>Thursday: 6am - 10pm</p>
        <p>Friday: 6am - 10pm</p>
        <p>Saturday: 8am - 10pm</p>
      </div>
      <div>
        <h2>Location</h2>
        <p>999 Cosmic Avenue, San Diego, CA 92101</p>
      </div>`;

  return div;
};

export { home };
