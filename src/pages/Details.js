import PropTypes from 'prop-types';
import { FaArrowCircleRight } from 'react-icons/fa';
import './Details.css';

const Details = ({
  id,
  name,
  cases,
  deaths,
  newDeaths,
  newCases,
  intensive,
  hospitalised,
}) => (
  <div id={id}>
    <div className="itemHeader detailFlex">
      <h4 className="lato">{name}</h4>
      <span className="lato">{`${cases} Active `}</span>
    </div>
    <div className="regionInfo">
      <span className="lato">REGION CASES INFO</span>
    </div>
    <div className="regionsContainer">
      <div className="regionRow detailFlex">
        <span className="latoBold">Total Deaths</span>
        <div className="numbersInfo detailFlex">
          <span className="latoRegular">{deaths}</span>
          <FaArrowCircleRight />
        </div>
      </div>
      <div className="regionRow detailFlex">
        <span className="latoBold">New Deaths</span>
        <div className="numbersInfo detailFlex">
          <span className="latoRegular">{newDeaths}</span>
          <FaArrowCircleRight />
        </div>
      </div>
      <div className="regionRow detailFlex">
        <span className="latoBold">New Cases</span>
        <div className="numbersInfo detailFlex">
          <span className="latoRegular">{newCases}</span>
          <FaArrowCircleRight />
        </div>
      </div>
      <div className="regionRow detailFlex">
        <span className="latoBold">Intesive Care</span>
        <div className="numbersInfo detailFlex">
          <span className="latoRegular">{intensive}</span>
          <FaArrowCircleRight />
        </div>
      </div>
      <div className="regionRow detailFlex">
        <span className="latoBold">Hospitalised</span>
        <div className="numbersInfo detailFlex">
          <span className="latoRegular">{hospitalised}</span>
          <FaArrowCircleRight />
        </div>
      </div>
    </div>
  </div>
);

Details.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cases: PropTypes.number.isRequired,
  deaths: PropTypes.number.isRequired,
  newDeaths: PropTypes.number.isRequired,
  newCases: PropTypes.number.isRequired,
  intensive: PropTypes.number.isRequired,
  hospitalised: PropTypes.number.isRequired,
};

export default Details;
