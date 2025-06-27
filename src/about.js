const contact = () => {
  const div = document.createElement("div");
  div.id = "contact-container";

  div.innerHTML = `<h1>Contact Us</h1>
      <address>
        <div>
          <h2>Phone</h2>
          <p>999-9999-9999</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>100%realemail.notfake@mail.com</p>
        </div>
        <div>
          <h2>Address</h2>
          <p>561 Mohammed Ports Suite 100</p>
        </div>
      </address>`;

  return div;
};

export { contact };
