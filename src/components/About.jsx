import React from "react";

const About = () => {
  const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac urna vitae nunc tincidunt vulputate. Nunc elementum arcu a massa finibus, sit amet tincidunt libero tincidunt. Nullam nec arcu nec nunc condimentum suscipit. Vivamus aliquet, quam ac hendrerit varius, eros justo facilisis libero, a cursus lorem ante ut eros. Vivamus at nunc vel sapien vestibulum bibendum. Sed id tincidunt libero, quis pellentesque felis. Vivamus id lacinia eros. Maecenas efficitur, tortor ac efficitur fringilla, quam ex hendrerit orci, a auctor tortor urna nec est. Nullam eget hendrerit orci. Sed eu rhoncus sem. Sed eu lacus sagittis, vestibulum augue et, varius leo. Sed vehicula risus id enim gravida tincidunt.`;

  return (
    <div style={{ color: "white", textAlign: "center" }}>
      <h1>About Us</h1>

      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #fff",
          padding: "20px",
          margin: "20px",
        }}
      >
        <img
          src="https://cdn.shopify.com/static/sample-images/shoes.jpeg"
          alt="About Us"
          style={{ maxWidth: "200px" }}
        />
        <p style={{ marginLeft: "20px" }}>
          {loremIpsum}
        </p>
      </div>
      
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #fff",
          padding: "20px",
          margin: "20px",
        }}
      >
        <img
          src="https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4"
          alt="About Us"
          style={{ maxWidth: "200px" }}
        />
        <p style={{ marginLeft: "20px" }}>
          {loremIpsum}
        </p>
      </div>
    </div>
  );
};

export default About;
