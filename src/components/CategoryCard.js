/* eslint-disable */
import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';
import virus from './virus.png';
import './CategoryCard.css';

const Card = ({ id, city, activeCases }) => (
  <div className="cardo cardFlex" id={id}>
    <div className="arrowContainer cardFlex">
      <FaArrowCircleRight className="cardArrow" />
    </div>
    <div className="info cardFlex">
      <img className="virusImg" src={virus} alt="virus" />
      <h4 className="name lato">{city}</h4>
      <span className="number lato">{`${activeCases} Active`}</span>
    </div>
  </div>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  activeCases: PropTypes.number.isRequired,
};

export default Card;
