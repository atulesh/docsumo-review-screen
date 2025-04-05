import { FC } from 'react';
import { ZoomLevel } from '@/feature/constants';

interface ZoomControlsProps {
  activeZoom: ZoomLevel;
  onChange: (level: ZoomLevel) => void;
}

/**
 * ZoomControls component
 * Dropdown for selecting zoom levels (fit, 75%, 100%, etc.)
 */
const ZoomControls: FC<ZoomControlsProps> = ({ activeZoom, onChange }) => {
  return (
    <div className="absolute top-3 right-3 bg-white dark:bg-zinc-800 dark:text-cyan-400 border px-2 py-1 rounded text-sm z-50 shadow-md">
      <select
        className="bg-transparent outline-none"
        value={activeZoom}
        onChange={(e) => onChange(e.target.value as ZoomLevel)}
      >
        {Object.values(ZoomLevel).map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ZoomControls;
