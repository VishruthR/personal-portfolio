interface PillProps {
  text: string;
}

const Pill = ({ text }: PillProps) => {
  return (
    <div className="flex justify-center items-center bg-teal bg-opacity-50 px-2 my-2 rounded-lg whitespace-nowrap">
      <p className="text-textTeal">{text}</p>
    </div>
  );
};

export default Pill;
