import React from 'react';

import Button from '@components/Button/Button';
import janaFryzelkovaImage from './jana-fryzelkova.jpeg';
import sandraOrtFeyglovaImage from './sandra-ort-feyglova.jpeg';
import hanaKuznikovaImage from './hana-kuznikova.jpeg';
import radkaPlankovaImage from './radka-plankova.jpeg';
import ondrejSlisImage from './ondrej-slis.jpeg';
import dagmarAskovaImage from './dagmar-askova.jpeg';
import ondrejTrhonImage from './ondrej-trhon.jpeg';
import veronikaMatejckovaImage from './veronika-matejckova.jpeg';
import marekTejcImage from './marek-tejc.jpeg';
import vojtechHojnyImage from './vojtech-hojny.jpeg';
import ivetaJelenovaImage from './iveta-jelenova.jpeg';

import { Wrapper, Person, Image } from './styled';

interface Person {
  photo: string;
  name: string;
  role: string;
  email: string;
}

const data: Person[] = [
  {
    photo: janaFryzelkovaImage,
    name: 'Jana Fryzelková',
    role: 'předsedkyně',
    email: 'jana@zacniucit.cz',
  },
  {
    photo: sandraOrtFeyglovaImage,
    name: 'Sandra Ort Feyglová',
    role: 'místopředsedkyně',
    email: 'sandra@zacniucit.cz',
  },
  {
    photo: hanaKuznikovaImage,
    name: 'Hana Kuzníková',
    role: 'koordinátorka učitelských aktivit',
    email: 'hana@zacniucit.cz',
  },
  {
    photo: radkaPlankovaImage,
    name: 'Radka Planková',
    role: 'koordinátorka Dne pro školu',
    email: 'radka@denproskolu.cz',
  },
  {
    photo: ondrejSlisImage,
    name: 'Ondřej Sliš',
    role: 'média a PR',
    email: 'ondrej.slis@zacniucit.cz',
  },
  {
    photo: dagmarAskovaImage,
    name: 'Dagmar Ašková',
    role: 'produkční',
    email: 'dagmar@zacniucit.cz',
  },
  {
    photo: ivetaJelenovaImage,
    name: 'Iveta Jelenová',
    role: 'pedagogické kvalifikace',
    email: 'iveta@zacniucit.cz',
  },
  // These persons are commented on purpose as they might be put back on the page.
  // {
  //   photo: ondrejTrhonImage,
  //   name: 'Ondřej Trhoň',
  //   role: 'multimediální obsah',
  //   email: 'ondrej@vyluka.org',
  // },
  // {
  //   photo: veronikaMatejckovaImage,
  //   name: 'Veronika Matějčková',
  //   role: 'copywriting',
  //   email: 'veronika@vyluka.org',
  // },
  // {
  //   photo: marekTejcImage,
  //   name: 'Marek Tejc',
  //   role: 'technická podpora',
  //   email: 'marek@vyluka.org',
  // },
  // {
  //   photo: vojtechHojnyImage,
  //   name: 'Vojtěch Hojný',
  //   role: 'správa webu Začni učit',
  //   email: 'vojta@vyluka.org',
  // },
];

const People: React.FC = () => (
  <Wrapper>
    {data.map(({ photo, name, role, email }) => (
      <Person key={name}>
        <Image src={photo} width={88} height={88} alt={name} />
        <div>
          <strong>{name}</strong>
          <div>{role}</div>
          <Button href={`mailto:${email}`}>{email}</Button>
        </div>
      </Person>
    ))}
  </Wrapper>
);

export default People;
