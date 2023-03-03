import React from 'react';
import {AnswerObject} from "./Quiz";

type Props = {
    question: string,
    answers: string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void,
    userAnswer: AnswerObject | undefined,
    questionNb: number,
    totalQuestion: number
}

const QuestionCard: React.FC<Props> = ({question, answers, callback, userAnswer, questionNb, totalQuestion}) => {
    return (
        <div>
            <p>Question: {questionNb} / {totalQuestion}</p>
            <p className="my-5" dangerouslySetInnerHTML={{__html: question}}/>
            <div>
                {answers.map(answer => (
                    <div key={answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback} className="bg-amber-100 hover:bg-amber-200 transition text-black rounded-lg my-2 py-2 px-4">
                            <span dangerouslySetInnerHTML={{__html: answer}}/>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionCard;