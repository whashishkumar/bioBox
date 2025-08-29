'use client';
import './style.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathArray = pathname.split('/').filter(Boolean);

  // Filter out segments you don't want to display, "type"
  const filteredPathArray = pathArray.filter((segment) => segment !== 'type');

  const formatLabel = (segment) =>
    segment.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <nav aria-label="breadcrumb" className="py-4 text-sm text-gray-600">
      <ol className="flex gap-2">
        <li>
          <Link href="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>

        {filteredPathArray.map((segment, index) => {
          // Recalculate href without the filtered segments
          const href =
            '/' + pathArray.slice(0, pathArray.indexOf(segment) + 1).join('/');

          const isLast = index === filteredPathArray.length - 1;

          return (
            <li key={href} className="flex gap-2 items-center">
              <span>/</span>
              {isLast ? (
                <span className="font-semibold">{formatLabel(segment)}</span>
              ) : (
                <Link href={href} className="text-blue-600 hover:underline">
                  {formatLabel(segment)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
