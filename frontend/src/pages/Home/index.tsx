import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import Image from 'next/image';
import bgImage from '../../../public/images/home-background.png';
import { HomeImageWrap } from './styled';
import subjects from '../../constants/subjects';
import education from '../../constants/education';

export const Home = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (e) => {
    alert(JSON.stringify(e));
    try {
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main>
      <HomeImageWrap>
        <Image src={bgImage} width={1000} height="auto" />
      </HomeImageWrap>
      <h2>Který stupeň chcete učit?</h2>
      <Input label="1.Stupeň ZŠ" name="firstDegree" type="radio" />
      <Input label="2.Stupeň ZŠ" name="secondDegree" type="radio" />
      <Input label="SŠ" name="highSchool" type="radio" />
      {/* <br />
        <h2>Který předmět chcete učit?</h2>
        {subjects.map((item, idx) => (
          <Input key={idx} type="checkbox" label={item} name={item} />
        ))}
        <h2>Jaké máte vzdělání?</h2>
        {education.map((item, idx) => (
          <Input key={idx} type="checkbox" label={item} name={item} />
        ))}
        <h2>Doplňte studijní specializaci</h2>
        <h3>Ze kterého oboru máte Magisterské vzdělání?</h3>
        <select
          {...register('magisterFrom')}
          name="magisterFrom"
          id="magisterFrom"
        >
          <option value="pedagogika">Pedagogika</option>
          <option value="specializace1">Specialicace 1</option>
          <option value="specializace2">Specialzace 2</option>
        </select>
        <br />
        <br />
        <h4>Pro jaký stupeň? Vyberte jede nebo více</h4>
        <Input type="checkbox" label="1. stupeň" name="level" />
        <Input type="checkbox" label="2. stupeň" name="level" />
        <Input type="checkbox" label="SŠ" name="level" />
        <br />
        <h4>Který předmět?</h4>
        <select {...register('subject')} name="subject" id="subject">
          <option value="vvp">Všeobecně vzdělávací předměty</option>
          <option value="specializace1">Předmět 1</option>
          <option value="specializace2">Předmět 2</option>
        </select>
        <br />
        <h3>
          Máte další relevantní zkušenosti pro učení {'===vybraný předmět==='}
        </h3>
        <select
          {...register('otherExperience')}
          name="otherExperience"
          id="otherExperience"
        >
          <option value="hv">
            Doplňující studium k rozšíření odborné kvalifikace pro obor učitel
            hudební výchovy pro 2. stupeň ZŠ, absolvováno na univerzitě
          </option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <br />
        {/* <div>
          <label htmlFor="redux">
            <input
              {...register('redux')}
              checked={withReduxChecked}
              onChange={(e) => {
                setWithReduxChecked(!withReduxChecked);
              }}
              type="checkbox"
              name="redux"
            />
            Connect to Redux
          </label>
        </div> */}
      {/* <br /> */}
      {/* <input type="submit" value="Výsledky" /> */}
    </main>
  );
};
