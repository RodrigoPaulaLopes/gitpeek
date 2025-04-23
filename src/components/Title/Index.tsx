import { useEffect, useState } from "react";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  const [title, setTitle] = useState<[string, string]>(['', '']);

  useEffect(() => {
    const [t1 = '', t2 = ''] = text.split(" ");
    setTitle([t1, t2]);
  }, [text]);

  return (
    <h1 className="text-80">
      {title[0]} <span className="font-bold">{title[1]}</span>
    </h1>
  );
};

export default Title;
