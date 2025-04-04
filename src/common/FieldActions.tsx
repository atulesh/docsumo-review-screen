import Button from './button/Button';

const FieldActions = () => {
  return (
    <div className="p-3 border-t bg-white dark:bg-zinc-900 flex justify-between items-center">
      <Button onClick={() => {}} variant="secondary">
        Select All
      </Button>
      <Button onClick={() => {}} disabled>
        Confirm
      </Button>
    </div>
  );
};

export default FieldActions;
