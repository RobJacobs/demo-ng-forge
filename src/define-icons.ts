import { IconRegistry } from '@tylertech/forge';
import {
  tylIconArrowBack,
  tylIconDashboard,
  tylIconPerson,
  tylIconListAlt,
  tylIconPets,
  tylIconChildFriendly,
  tylIconHome,
  tylIconMenu,
  tylIconSearch,
  tylIconCategory,
  tylIconFilterList,
  tylIconDelete,
  tylIconAdd,
  tylIconAddCircle,
  tylIconArrowDropDown,
  tylIconEdit,
  tylIconContentCopy,
  tylIconBolt,
  tylIconCheck,
  tylIconViewColumn,
  tylIconChevronLeft,
  tylIconChevronRight,
  tylIconClose,
  tylIconMap,
  tylIcon360,
  tylIconExpandLess,
  tylIconExpandMore,
  tylIconKeyboardArrowRight,
  tylIconKeyboardArrowLeft,
  tylIconDirections,
  tylIconStar,
  tylIconError,
  tylIconMoreVert,
  tylIconMoreHoriz,
  tylIconArticle,
  tylIconWbSunny,
  tylIconNightlightRound,
  tylIconTableRows,
  tylIconArrowDownward,
  tylIconArrowUpward,
  tylIconStorage,
  tylIconMasks,
  tylIconInsertInvitation,
  tylIconBarChart,
  tylIconAutoStories,
  tylIconPictureAsPdf,
  tylIconApps,
  tylIconZoomIn,
  tylIconZoomOut,
  tylIconFitScreen,
  tylIconAdjust
} from '@tylertech/tyler-icons/standard';

import {
  tylIconTylerTalkingTLogo
} from '@tylertech/tyler-icons/custom';

const standardIcons = [
  tylIconArrowBack,
  tylIconDashboard,
  tylIconPerson,
  tylIconListAlt,
  tylIconPets,
  tylIconChildFriendly,
  tylIconHome,
  tylIconMenu,
  tylIconSearch,
  tylIconCategory,
  tylIconFilterList,
  tylIconDelete,
  tylIconAdd,
  tylIconAddCircle,
  tylIconArrowDropDown,
  tylIconEdit,
  tylIconContentCopy,
  tylIconBolt,
  tylIconCheck,
  tylIconViewColumn,
  tylIconChevronLeft,
  tylIconChevronRight,
  tylIconClose,
  tylIconMap,
  tylIcon360,
  tylIconExpandLess,
  tylIconExpandMore,
  tylIconKeyboardArrowRight,
  tylIconKeyboardArrowLeft,
  tylIconDirections,
  tylIconStar,
  tylIconError,
  tylIconMoreVert,
  tylIconMoreHoriz,
  tylIconArticle,
  tylIconWbSunny,
  tylIconNightlightRound,
  tylIconTableRows,
  tylIconArrowDownward,
  tylIconArrowUpward,
  tylIconStorage,
  tylIconMasks,
  tylIconInsertInvitation,
  tylIconBarChart,
  tylIconAutoStories,
  tylIconPictureAsPdf,
  tylIconApps,
  tylIconZoomIn,
  tylIconZoomOut,
  tylIconFitScreen,
  tylIconAdjust
];

const customIcons = [
  tylIconTylerTalkingTLogo
];

export const defineIcons = () => {
  IconRegistry.define([...standardIcons, ...customIcons]);
};
