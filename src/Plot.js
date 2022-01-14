import React from "react";

const Plot = () => {
  const styles = {
    container: {
      width: "75%",
      marginTop: "15px",
    },
    moveiGif: {
      float: "left",
      marginRight: "21px",
    },
  };

  return (
    <div style={styles.container}>
      <img
        src="https://i.gifer.com/TZQY.gif"
        alt="inception"
        height="300"
        width="250"
        style={styles.moveiGif}
      />
      Dom Cobb is a skilled thief, the absolute best in the dangerous art of
      extraction, stealing valuable secrets from deep within the subconscious
      during the dream state, when the mind is at its most vulnerable. Cobb's
      rare ability has made him a coveted player in this treacherous new world
      of corporate espionage, but it has also made him an international fugitive
      and cost him everything he has ever loved. Now, Cobb is being offered a
      chance at redemption. One last job could give him his life back but only
      if he can accomplish the impossible, inception. Instead of the perfect
      heist, Cobb and his team of specialists have to pull off the reverse:
      their task is not to steal an idea but to plant one. If they succeed, it
      could be a perfect crime. But no amount of careful planning or expertise
      can prepare the team for the dangerous enemy that seems to predict their
      every move. An enemy that only Cobb could have seen coming.
      <hr />
      —Warner Bros. Pictures
    </div>
  );
};

export default Plot;
