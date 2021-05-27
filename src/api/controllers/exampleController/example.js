const example = (req, res, next) => {
  res.send(`
    <div style="
      display: flex;
      flex-direction: column;
      height: 80vh;
      text-align: center;
      font-family: sans-serif;
    "
    >
      <h1 style="
        color: green;
      "
      >Express and Node Server</h1>
      <h3>
        The best folder structure and project setup for your next node api with express.
      </h3>
      <p>
        The structure is meant for a larger application and a highly scalable 
        application, but you can modify it to suit you application.
      </p>
    </div>
  `)
};

module.exports = example;
