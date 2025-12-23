import type { SVGProps } from 'react';

export function LinkedInLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-label="LinkedIn"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="currentColor"
        d="M19 3H5a2 2 0 0 0-2 2v14c0 1.103.897 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-9.5 14H7v-7h2.5zm-1.25-8.218a1.282 1.282 0 1 1 0-2.564 1.282 1.282 0 0 1 0 2.564M19 17h-2.5v-3.675c0-1.316-.5-2.032-1.54-2.032-.95 0-1.444.64-1.444 2.032V17H11v-7h2.516v.978S14.11 9 15.6 9C17.088 9 19 9.933 19 12.81z"
      />
    </svg>
  );
}
