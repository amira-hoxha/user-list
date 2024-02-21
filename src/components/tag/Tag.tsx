interface TagProps {
  description: string;
}

const Tag = (props: TagProps) => {
  return (
    <div className="bg-gray-700 mt-3 text-skin-grey px-2 py-1 mr-2 text-xs rounded-2xl text-center flex">
      {props.description}
    </div>
  );
};

export default Tag;
