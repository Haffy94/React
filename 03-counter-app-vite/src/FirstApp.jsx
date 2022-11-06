import PropTypes from 'prop-types';

export const FirstApp = ({title, subTitle }) => {
  return (
    <>
        <h1> {title} </h1>
        <h1> {subTitle} </h1>
        <div>Lucas</div>
        <div>y Sofi</div>

    </>
  )
}


FirstApp.propType = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
} 