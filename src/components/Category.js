import './Category.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from './CategoryCard';
import { fetchData } from '../redux/covid/covid';

const Category = () => {
  const dispatch = useDispatch();
  const countryCases = useSelector((state) => state.categories.todayCases);
  const categoriesStatus = useSelector((state) => state.categories.status);
  const categories = useSelector((state) => state.categories.list);

  useEffect(() => {
    if (categoriesStatus === 'idle') {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div className="container">
      <div className="header flexColumn">
        <div className="infoContainer">
          <h2 className="lato">France</h2>
          <span className="lato">{countryCases}</span>
        </div>
      </div>
      <div className="byRegion lato">
        <span>STATS BY REGION</span>
      </div>
      <div className="cardsContainer">
        {categories.map((el) => (
          <Link key={el.id} to={`/details/${el.id}`} className="row">
            <Card id={el.id} city={el.name} activeCases={el.confirmedToday} />
          </Link>
        ))}
        <div className="empty" />
      </div>
    </div>
  );
};

export default Category;
