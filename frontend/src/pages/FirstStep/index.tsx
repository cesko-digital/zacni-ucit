import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../components/Input';
import subjects from '../../constants/subjects';
import education from '../../constants/education';

export const FirstStep = () => {
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
      <h2>Který stupeň chcete učit?</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="components">Stupeň: </label>
        <select {...register('component')} name="components" id="components">
          <option value="firstLevel">1. stupeň ZŠ</option>
          <option value="secondLevel">2. stupeň ZŠ</option>
          <option value="highschool">SŠ</option>
        </select>
        <br />
        <br />
        <h2>Který předmět chcete učit?</h2>
        {subjects.map((item, idx) => (
          <Input key={idx} type="checkbox" label={item} name={item} />
        ))}
        <h2>Jaké máte vzdělání?</h2>
        {education.map((item, idx) => (
          <Input key={idx} type="checkbox" label={item} name={item} />
        ))}
        <h2>Doplňte studijní specializaci</h2>
        <label htmlFor="components">
          Ze kterého oboru máte Magisterské vzdělání?
        </label>
        <select {...register('component')} name="components" id="components">
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
        <br />
        <input type="submit" value="Výsledky" />
      </form>
    </main>
  );
};
