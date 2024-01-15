type PropsType = {
  countries: any;
  removeCountry: Function;
};
const Countries = (props: PropsType) => {
  const { countries, removeCountry } = props;
  return (
    <section>
      {countries.map((country: any, index: any) => {
        const { area, capital, region, population } = country;
        const { common: name } = country.name;
        const { png: image } = country.flags;
        const { official: id } = country.name;

        return (
          <article key={index}>
            <div>
              <img src={image} alt={name} />
            </div>
            <h2>{name}</h2>
            <div className='info'>
              <h3>{area}</h3>
              <p>{capital}</p>
              <p>{region}</p>
              <p>{population}</p>
            </div>
            <button onClick={() => removeCountry(id)}>remove</button>
          </article>
        );
      })}
    </section>
  );
};

export default Countries;
