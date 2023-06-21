import { Container } from "./container";

const MyHome = () => {
  return (
    <Container>
      <div
        className="flex flex-col items-center space-y-4 md:flex-row space-x-4"
        id="home"
      >
        <div>
          <p className="text-4xl text-slate-950 dark:text-slate-50">
            Lorem ipsum dolor sit{" "}
            <span className="text-red-600">amet consectetur</span> adipisicing
            elit.
          </p>
          <p className="text-slate-950 dark:text-slate-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            illo eligendi quisquam quia dolorum reprehenderit fugiat aliquam
            neque necessitatibus! Quia voluptatibus distinctio aut, debitis
            optio ipsam non vel. Alias, maxime?
          </p>
        </div>
        <img className="w-96 lg:w-[600px]" src="/baner.jpg" alt="banner" />
      </div>
    </Container>
  );
};

export { MyHome };
