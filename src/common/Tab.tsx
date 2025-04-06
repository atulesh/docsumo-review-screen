import { FC } from 'react';
import { Tab as TabItem, TabGroup, TabList } from '@headlessui/react';
import { TabEnum } from '@/feature/constants';

interface TabProps {
  activeTab: TabEnum;
  onChange: (tab: TabEnum) => void;
}

const tabs: TabEnum[] = [TabEnum.REGULAR_FIELDS, TabEnum.COLUMN_FIELDS];

const Tab: FC<TabProps> = ({ activeTab, onChange }) => {
  const selectedIndex = tabs.indexOf(activeTab);

  return (
    <TabGroup selectedIndex={selectedIndex} onChange={(i) => onChange(tabs[i])}>
      <TabList className="flex gap-4">
        {tabs.map((tab) => (
          <TabItem
            key={tab}
            className={({ selected }) =>
              `pb-1 text-sm font-medium outline-none ${
                selected
                  ? 'text-blue-500 border-b-2 border-blue-500'
                  : 'text-zinc-400 hover:text-blue-400'
              }`
            }
          >
            {tab}
          </TabItem>
        ))}
      </TabList>
    </TabGroup>
  );
};

export default Tab;
