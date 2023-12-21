const Badge = ({ colorClass, badge }) => (
  <span
    className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${colorClass}`}
  >
    {badge}
  </span>
);

export const GrayBadge = ({ badge }) => (
  <Badge colorClass="bg-gray-50 text-gray-600 ring-gray-500/10" badge={badge} />
);

export const RedBadge = ({ badge }) => (
  <Badge colorClass="bg-red-50 text-red-700 ring-red-600/10" badge={badge} />
);

export const YellowBadge = ({ badge }) => (
  <Badge
    colorClass="bg-yellow-50 text-yellow-800 ring-yellow-600/20"
    badge={badge}
  />
);

export const GreenBadge = ({ badge }) => (
  <Badge
    colorClass="bg-green-50 text-green-700 ring-green-600/20"
    badge={badge}
  />
);

export const BlueBadge = ({ badge }) => (
  <Badge colorClass="bg-blue-50 text-blue-700 ring-blue-700/10" badge={badge} />
);

export const IndigoBadge = ({ badge }) => (
  <Badge
    colorClass="bg-indigo-50 text-indigo-700 ring-indigo-700/10"
    badge={badge}
  />
);

export const PurpleBadge = ({ badge }) => (
  <Badge
    colorClass="bg-purple-50 text-purple-700 ring-purple-700/10"
    badge={badge}
  />
);

export const PinkBadge = ({ badge }) => (
  <Badge colorClass="bg-pink-50 text-pink-700 ring-pink-700/10" badge={badge} />
);
