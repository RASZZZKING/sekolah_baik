import React, { FunctionComponent, useEffect, useState } from "react";

interface GridAnswersProps {
  data: {
    answer: string;
    is_true_option: boolean;
  }[];
  funct: () => void;
  idx: number;
  review: boolean;
  isAgain: boolean;
  isFinish: boolean;
}

const GridAnswers: FunctionComponent<GridAnswersProps> = ({
  data,
  funct,
  idx,
  review,
  isFinish,
  isAgain,
}) => {
  const [currentAnswer, setCurrentAnswer] = useState<number>(-1);
  const [val, setVal] = useState<string>("");
  useEffect(()=>{
      if (isAgain) {
        setVal("");
      }
  },[isAgain])
  const handleChange = (i: number, answer: boolean) => {
    if (review) return;
    setVal(`pilihan--${idx}-${i}`);
    setCurrentAnswer(i);
    if (answer === true) {
      funct();
    }
  };
  useEffect(() => {
    setCurrentAnswer(-1);
  }, [isAgain]);
  return (
    <div className="my-6 px-6 flex flex-col gap-4">
      {data.flatMap((cb, i) => (
        <label
          key={i}
          htmlFor={`option-${idx}-${i}`}
          className={`p-4 form-control flex-row gap-3 shadow-lg rounded-xl border border-blue-950 transform ${
            !review
              ? currentAnswer === i
                ? "bg-blue-950 text-base-100"
                : "text-blue-950"
              : review && cb.is_true_option
              ? "bg-success bg-opacity-40 border-2 border-success"
              : "bg-error bg-opacity-40 border-2 border-error"
          }
          ${cb.is_true_option && isFinish ? !review ? "input-disabled" : "" : isFinish && "input-disabled"}
          `}
        >
          <input
            checked={val === `pilihan--${idx}-${i}`}
            type="radio"
            disabled={isFinish}
            onChange={() => handleChange(i, cb.is_true_option)}
            name={`radio-${idx}`}
            value={`pilihan--${idx}-${i}`}
            id={`option-${idx}-${i}`}
            className={`${
              isFinish ? "input-disabled" : cb.is_true_option?  review ?"" : "" : ""
            } radio bg-cyan-50 radio-primary`}
          />
          <label
            className="text-sm label p-0 m-0"
            htmlFor={`option-${idx}-${i}`}
          >
            {cb.answer}
          </label>
        </label>
      ))}
    </div>
  );
};

export default GridAnswers;
