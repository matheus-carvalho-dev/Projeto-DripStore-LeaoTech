import React from "react";
import Icon from "../../../../components/Icons/Icons";

const StarRating = ({ rating }) => {
  const stars = [0, 1, 2, 3, 4];

  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
      {stars.map((index) => {
        const starPosition = index + 1;
        let clipPercentage = 100;
        if (rating >= starPosition) {
          clipPercentage = 0;
        } else if (rating >= starPosition - 0.5) {
          clipPercentage = 50;
        }

        return (
          <div
            key={index}
            className="position-relative p-2"
          >
            <Icon
              name="star"
              color="#E2E3FF"
              size="16px"
              attributes={{
                style: {
                  position: "absolute",top:'-0px',right:'0px'
                },
              }}
            />
            <Icon
              name="star"
              color="#F6AA1C"
              size="16px"
              attributes={{
                style: {
                  position: "absolute",
                  top: 0,
                  left: 0,
                  clipPath: `inset(0 ${clipPercentage}% 0 0)`,
                },
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default StarRating;
