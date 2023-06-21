export type WordProps = {
  word: string;
  author: string;
};

const Quote = () => {
  return <span className="text-red-700 dark:text-red-600">&quot;</span>;
};

const Word = ({ word, author }: WordProps) => {
  return (
    <div className="flex flex-col max-w-max">
      <p className="text-slate-950 text-2xl italic dark:text-slate-200">
        <Quote />
        {word}
        <Quote />
      </p>
      <p className="text-slate-950 self-end dark:text-slate-50">{author}</p>
    </div>
  );
};

export { Word };
