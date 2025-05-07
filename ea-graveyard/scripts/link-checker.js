
import studioData from '../src/studios.json' with { type: 'json' };
import { table } from 'table';

const badLinks = [];
const linkArray = [];

for (const studio of studioData) {
  const res = await fetch(studio.link, {
    method: 'GET',
    referrer: 'https://somesingman.github.io/ea-graveyard',
  });

  if (!res.ok) {
    badLinks.push([res.status, studio.name]);
  } else {
    linkArray.push([res.status, studio.name]);
  }
}

if (badLinks.length) {
  const tableConfig = {
    columns: [
      { width: 3 },
      { width: 50 }
    ]
  }

  console.log(table(badLinks, tableConfig));
  console.log('\x1b[31m Bad links found. Please find another news source or use an archived version of the links for these studios. \x1b[0m');
  process.exit(1);
} else {
  console.log('\x1b[32m All links are good \x1b[0m\x1b[33m👍\x1b[0m');
}