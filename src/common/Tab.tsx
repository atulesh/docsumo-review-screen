import { TabEnum } from '@/feature/constants';

interface TabProps {
  activeTab: TabEnum;
  onChange: (tab: TabEnum) => void;
}

const Tab = ({ activeTab, onChange }: TabProps) => {
  return (
    <div className="mt-2 flex gap-2">
      {Object.values(TabEnum).map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`px-3 py-1 text-sm rounded ${
            activeTab === tab
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
