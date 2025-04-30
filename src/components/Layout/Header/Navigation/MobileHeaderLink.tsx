import { useState } from "react";
import Link from "next/link";
import { HeaderItem } from "../../../../types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  onClick: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, onClick }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setSubmenuOpen(!submenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (item.submenu) {
      handleToggle(e);
    } else {
      onClick(); // Close the mobile menu
      // Small delay to allow menu animation to complete
      setTimeout(() => {}, 150);
    }
  };

  if (!item.href) {
    console.warn(`Menu item "${item.label}" is missing href`);
    return null;
  }

  return (
    <div className="relative w-full">
      <Link
        href={item.href}
        onClick={handleLinkClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            handleLinkClick(e as any);
          }
        }}
        className={`flex items-center justify-between w-full py-3 px-4 text-gray-800 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors ${
          item.submenu ? "cursor-pointer" : ""
        }`}
        aria-expanded={item.submenu ? submenuOpen : undefined}
        aria-haspopup={item.submenu ? "true" : undefined}
      >
        <span>{item.label}</span>
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.25em"
            height="1.25em"
            viewBox="0 0 24 24"
            className={`transition-transform duration-200 ${
              submenuOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div className="pl-6 w-full bg-gray-50 dark:bg-gray-700">
          {item.submenu.map((subItem) => {
            if (!subItem.href) {
              console.warn(`Submenu item "${subItem.label}" is missing href`);
              return null;
            }
            return (
              <Link
                key={subItem.href}
                href={subItem.href}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick(); // Close the mobile menu
                }}
                className="block py-2.5 px-4 text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
              >
                {subItem.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MobileHeaderLink;