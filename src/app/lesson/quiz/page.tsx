"use client";
import GridAnswers from "@/components/lessonToday/GridAnswers";
import { dataQuiz, dataQuiz2 } from "@/models/data/FE/quiz";
import { X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { FunctionComponent, useEffect, useRef, useState } from "react";

interface pageProps {}

const Page: FunctionComponent<pageProps> = () => {
  const lengthQuestions = dataQuiz2.data.length;
  const [currentQuestions, setCurrentQuestions] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [slow, setSlow] = useState<boolean>(false);
  const [review, setRewiew] = useState<boolean>(false);
  const [isFinish, setIsFinish] = useState<boolean>(false);
  const [isAgain, setIsAgain] = useState<boolean>(false);
  const [timeState, setTimeState] = useState<number>(0);
  const [startCounting, setStartCounting] = useState<boolean>(true)
  const [allAnswers, setAllAnswers] = useState<boolean[]>(
    Array(lengthQuestions).fill(false)
  );

  let intervals: NodeJS.Timeout;
  useEffect(() => {
    if (startCounting === true) {
      intervals = setInterval(() => {
        setTimeState((prevTime) => prevTime + 1);
      }, 1000);
    } else if (startCounting === false && timeState !== 0) {
      clearInterval(intervals);
    }
    return () => clearInterval(intervals);
  }, [startCounting, timeState]);

  const handleAgain = () => {
    setAllAnswers(Array(lengthQuestions).fill(false));

    handleClosePopUp();
    setIsFinish(false);
    setCurrentQuestions(0);
    setShowResult(false);
    setRewiew(false);
    setIsAgain(true);
    setTimeState(0)
    setStartCounting(true)
    setTimeout(() => {
      setIsAgain(false);
    }, 250);
  };
  const handleSetAnswers = (index: number) => {
    setAllAnswers((oldData) => {
      const newData = [...oldData];
      newData[index] = true;
      return newData;
    });
  };
  const handleClosePopUp = () => {
    setSlow(true);
    setTimeout(() => {
      setShowResult(false);
    }, 300);
  };
  const currentScore = allAnswers.filter((answer) => answer === true).length;
  const handleYourScore = () => {
    setSlow(false);
    setShowResult(true);
    setIsFinish(true);
    setStartCounting(false)
  };
  const handleReview = () => {
    setRewiew(true);
  };
  return (
    <div className="bg-base-100 min-h-svh">
      <div className="py-6 px-6 grid grid-cols-3">
        <Link href={"/"}>
          <X size={24} weight="bold" />
        </Link>
        <p className="text-lg text-center font-semibold">English Test</p>
        <p
          onClick={handleYourScore}
          className="cursor-pointer text-primary text-lg font-semibold text-end"
        >
          {isFinish ? "Score" : "Finish"}
        </p>
      </div>
      <div className="-mt-[.55rem]">
        <progress
          className="progress progress-success  rounded-none"
          value={((currentQuestions + 1) / lengthQuestions) * 100}
          max="100"
        ></progress>
      </div>

      <div className="px-6 text-sm  font-semibold my-3 flex justify-between">
        <p className="text-primary opacity-60">
        QUESTIONS {currentQuestions + 1} OF {lengthQuestions}
        </p>
        <div className="btn btn-sm text-slate-600">{45 - Math.floor(timeState/60)}.{60 - (timeState % 60) < 10 && 0}{60 - timeState % 60}</div>
      </div>
      {/* PAGES */}

      {dataQuiz2.data.map((al, n) => {
        const handleTrueOption = () => {
          handleSetAnswers(n);
        };
        return (
          <div key={n} className={`${n !== currentQuestions && "hidden"}`}>
            {al.imageUrl ? (
              <img
                alt="image of questions"
                src={al.imageUrl}
                className={`w-full rounded-none  aspect-video`}
              ></img>
            ) : null}
            <div className="px-6 mt-6">
              <div className="text-sm whitespace-pre-line">
                {dataQuiz2.data[currentQuestions].questions}
              </div>
            </div>
            <GridAnswers
              data={al.answer_option}
              idx={n}
              funct={handleTrueOption}
              review={review}
              isAgain={isAgain}
              isFinish={isFinish}
            />
          </div>
        );
      })}

      {/* {JUST BUTTON} */}
      <div
        className={`px-6 pb-6 flex ${
          currentQuestions === 0
            ? "justify-end"
            : currentQuestions === lengthQuestions - 1
            ? "justify-start"
            : "justify-between"
        } gap-1.5`}
      >
        <div
          onClick={() => setCurrentQuestions(currentQuestions - 1)}
          className={`${
            currentQuestions === 0 && "hidden"
          } btn btn-md min-h-10 max-h-10 h-10`}
        >
          prev
        </div>
        <div
          onClick={() => setCurrentQuestions(currentQuestions + 1)}
          className={`${
            currentQuestions === lengthQuestions - 1 && "hidden"
          } btn btn-md min-h-10 max-h-10 h-10 btn-primary`}
        >
          next
        </div>
      </div>
      <PopResult
        handleReview={handleReview}
        funct={handleClosePopUp}
        slow={slow}
        show={showResult}
        score={Math.floor((currentScore / lengthQuestions) * 100)}
        true_answer={currentScore}
        many_aswer={lengthQuestions}
        false_answer={lengthQuestions - currentScore}
        review={review}
        handleAgain={handleAgain}
        timeL={timeState}
      />
    </div>
  );
};

export default Page;

interface PopResult {
  funct: () => void;
  show: boolean;
  slow: boolean;
  score: number;
  true_answer: number;
  false_answer: number;
  many_aswer: number;
  handleReview: () => void;
  review: boolean;
  handleAgain: () => void;
  timeL: number;
}
const PopResult: FunctionComponent<PopResult> = ({
  funct,
  show,
  slow,
  handleReview,
  score,
  true_answer,
  false_answer,
  many_aswer,
  review,
  handleAgain,
  timeL,
}) => {
  const popUpRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popUpRef.current && !popUpRef.current.contains(event.target as Node)) {
      funct();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);
  return (
    <div
      className={`${!show ? "hidden" : "fixed"} ${
        !slow ? "fadeIn3" : "fadeOut"
      } top-0 left-0 w-full min-h-svh flex items-center justify-center`}
    >
      <div
        ref={popUpRef}
        className="w-8/12 bg-slate-50 border-4 border-blue-400 rounded-2xl shadow p-8 flex flex-col"
      >
        <div className="flex justify-center">
          <div className="text-center text-xl font-bold px-4 py-2 bg-blue-700 text-white rounded-xl w-32">
            
            {Math.floor(timeL/60)}.{timeL % 60 < 10 && 0}{timeL % 60}
          </div>
        </div>
        <div className="py-10 flex justify-center">
          <div
            className={`${
              score >= 50 ? "text-blue-400" : "text-red-400"
            } radial-progress  text-opacity-40 absolute`}
            style={{ "--value": 100, "--size": "10rem" }}
            role="progressbar"
          ></div>
          <div
            className={`radial-progress ${
              score >= 50 ? "text-blue-600" : "text-red-600"
            } `}
            style={{ "--value": score, "--size": "10rem" }}
            role="progressbar"
          >
            <p className="font-bold text-4xl text-black text-center">{score}</p>
            <p className="font-semibold text-xl text-center">
              {true_answer}
              <span className="text-sm opacity-50">/{many_aswer}</span>
            </p>
          </div>
        </div>
        <div className="flex justify-around">
          <button onClick={handleAgain} className="btn">
            Try Again
          </button>
          <button
            onClick={handleReview}
            className="btn btn-primary bg-blue-600 hover:bg-blue-700"
          >
            {review ? "See more Quiz" : "Review"}
          </button>
        </div>
      </div>
    </div>
  );
};
