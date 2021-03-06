import Link from 'next/link';

function Place({ admin, slug, label }) {
  return (
    <Link href="/[admin]/[slug]" as={`/${admin}/${slug}`}>
      <a className="list-group-item list-group-item-action">
        {label}
      </a>
    </Link>
  );
}

export default Place;
