import { Card, CardProps } from "./card";
import { Container } from "./container";

const Characters = () => {
  const character: CardProps[] = [
    {
      name: "Sachi",
      url: "sachi.webp",
    },
    {
      name: "Onodera Punpun",
      url: "punpun.webp",
    },
    {
      name: "Aiko Tanaka",
      url: "aiko.webp",
    },
  ];

  return (
    <Container>
      <div
        id="brief"
        className="flex flex-col items-center justify-center space-y-6 mt-5"
      >
        <h1 className="text-slate-950 text-xl dark:text-slate-50">
          Characters:
        </h1>
        <div className="flex flex-col items-center justify-center space-y-6 lg:space-y-0 lg:space-x-5 lg:flex-row">
          {character.map((props) => (
            <Card key={props.name} {...props} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export { Characters };
