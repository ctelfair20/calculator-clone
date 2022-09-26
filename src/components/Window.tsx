import '../index.css';

// tells the component what its props should be
interface WindowProps {
  display: string[]
}

const Window = ({ display }: WindowProps) => {
  return (
    <div className="window">
      {display}
    </div>
  );
}

export default Window;