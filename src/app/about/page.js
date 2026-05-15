async function takeTime() {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

const About = async () => {
  await takeTime();

  throw new Error("This is manual error");
  return (
    <div>
      <h1>This is about page</h1>
    </div>
  );
};

export default About;
