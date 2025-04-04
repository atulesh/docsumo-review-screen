import { TabEnum } from '@/feature/constants';

interface TabProps {
  activeTab: TabEnum;
  onChange: (tab: TabEnum) => void;
}

const Tab = ({ activeTab, onChange }: TabProps) => {
  return (
    <div className="flex gap-6 border-b border-zinc-800 mt-8">
      {Object.values(TabEnum).map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`relative pb-1 text-sm font-medium transition-colors ${
            activeTab === tab
              ? 'text-blue-500 after:content-[""] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-blue-500'
              : 'text-gray-400 hover:text-blue-400'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;
