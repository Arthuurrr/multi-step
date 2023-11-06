import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./Thank.css";

const Thank = ({ data }) => {
  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
  };

  return (
    <div className="thank-container">
      <h2>Falta Pouco...</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para sua próxima compra
      </p>
      <p>Para continuar sua avaliação clique no botão de Enviar abaixo</p>
      <h3>Aqui está o resumo da sua avaliação {data.name}</h3>
      <p className="review-data">
        Satisfação com o produto: <span>{emojiData[data.review]}</span>
      </p>
      <p className="review-data">Comentário: <span>{data.comment}</span></p> 
    </div>
  );
};

export default Thank;
