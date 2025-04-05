import { ReviewField } from '@/feature/review/types';
import { getInitials } from '@/utils/utils';
import { FC } from 'react';
import Badge from './Badge';
import Checkbox from './Checkbox';
import IconButton from './button/IconButton';
import { MdMoreVert } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedIds, toggleSelection } from '@/app/slice/reviewSlice';

interface FieldCardProps {
  field: ReviewField;
}
const FieldCard: FC<FieldCardProps> = ({ field }) => {
  const dispatch = useDispatch();
  const selectedIds = useSelector(selectSelectedIds);

  const initials = getInitials(field.title);
  const content = field.content;

  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm p-3 flex justify-between items-start gap-2">
      <div className="flex items-start gap-3">
        <Badge label={initials} confidence={field.content.confidence} />
        <div>
          <p className="font-medium text-sm text-gray-800 dark:text-gray-100">
            {field.title}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
            {content.value}
          </p>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <Checkbox
          checked={selectedIds.includes(field.id)}
          onChange={() => dispatch(toggleSelection(field.id))}
          id={field.id}
        />
        <IconButton icon={<MdMoreVert />} title="More" onClick={() => {}} />
      </div>
    </div>
  );
};

export default FieldCard;
