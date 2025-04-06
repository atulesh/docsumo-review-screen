import { ReviewField } from '@/feature/review/types';
import { getInitials } from '@/utils/utils';
import { FC } from 'react';
import Badge from './Badge';
import Checkbox from './Checkbox';
import { useDispatch, useSelector } from 'react-redux';
import {
  hoverField,
  removeField,
  selectHoveredId,
  selectSelectedIds,
  toggleSelection,
} from '@/app/slice/reviewSlice';
import MoreMenu from './MoreMenu';

interface FieldCardProps {
  field: ReviewField;
}
const FieldCard: FC<FieldCardProps> = ({ field }) => {
  const dispatch = useDispatch();
  const selectedIds = useSelector(selectSelectedIds);
  const hoveredId = useSelector(selectHoveredId);

  const initials = getInitials(field.title);
  const content = field.content;

  const isSelected = selectedIds.includes(field.id);
  const isHovered = hoveredId === field.id;

  const hoveredClass =
    isHovered && !isSelected
      ? 'bg-blue-100 dark:bg-blue-800'
      : 'border-transparent';

  return (
    <div
      onMouseEnter={() => dispatch(hoverField(field.id))}
      onMouseLeave={() => dispatch(hoverField(null))}
      className={`rounded-lg p-3 flex justify-between items-start gap-2 transition border bg-zinc-100 dark:bg-zinc-700 ${hoveredClass}`}
    >
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
        <MoreMenu onRemove={() => dispatch(removeField(field.id))} />
      </div>
    </div>
  );
};

export default FieldCard;
