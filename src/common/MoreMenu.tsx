import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FC } from 'react';
import { IoMdTrash } from 'react-icons/io';
import { MdMoreVert } from 'react-icons/md';

interface MoreMenuProps {
  onRemove: () => void;
}
const MoreMenu: FC<MoreMenuProps> = ({ onRemove }) => {
  return (
    <Menu>
      <MenuButton>
        <MdMoreVert />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-gray-600 p-1 text-sm/6 text-white shadow-lg transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button
            onClick={onRemove}
            className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
          >
            <IoMdTrash className="size-4" />
            Remove
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};

export default MoreMenu;
