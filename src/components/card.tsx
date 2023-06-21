export type CardProps = {
  name: string;
  url: string;
};

const Card = ({ name, url }: CardProps) => {
  return (
    <div className="border-2 border-slate-950 flex flex-col justify-center items-center space-y-10 w-fit py-5 px-10 rounded-sm dark:border-slate-50">
      <img
        className="object-cover w-36 h-36 rounded-full"
        src={url}
        alt={name}
      />
      <p className="text-slate-950 dark:text-slate-50">{name}</p>
    </div>
  );
};

export { Card };
