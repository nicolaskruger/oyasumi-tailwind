import { Container } from "./container";
import { Word, WordProps } from "./words";

const Text = () => {
  const words: WordProps[] = [
    {
      author: "Punpun",
      word: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id eos tempore doloremque quisquam pariatur fuga laboriosam. Adipisci quos inventore dolorem animi quibusdam amet quasi sint, impedit tempora quae ab.",
    },
    {
      author: "Aiko Tanako",
      word: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum id eos tempore doloremque quisquam pariatur fuga laboriosam. Adipisci quos inventore dolorem animi quibusdam amet quasi sint, impedit tempora quae ab.",
    },
  ];
  return (
    <Container>
      <div id="text" className="mt-4 pb-4">
        <h1 className="text-slate-950 text-center text-xl dark:text-slate-50 mb-6">
          Phrases:
        </h1>
        {words.map((props) => (
          <Word key={props.author} {...props} />
        ))}
      </div>
    </Container>
  );
};

export { Text };
