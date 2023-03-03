import React, {useState} from 'react';
import {Difficulty, fetchQuizQuestions, QuestionsState} from "./API";
import QuestionCard from "./QuestionCard";

/*const initialValue = {
    loading: false,
    question: [],
    number: 0,
    userAnswer: [],
    score: 0,
    gameOver: true

}*/
export type AnswerObject = {
    question: string,
    answer: string,
    correct: boolean,
    correctAnswer: string
}

// function quizReducer(state: any, action: any) {}

const TOTAL_QUESTION = 10

const Quiz = () => {
    const [loading, setLoading] = useState(false)
    const [questions, setQuestions] = useState<QuestionsState[]>([])
    const [number, setNumber] = useState(0)
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([])
    const [score, setScore] = useState(0)
    const [gameOver, setGameOver] = useState(true)

    // const [quizGame, dispatch] = useReducer(quizReducer, initialValue)

    console.log(questions)

    const startTrivia = async () => {
        setLoading(true)
        setGameOver(false)

        const newQuestion = await fetchQuizQuestions(TOTAL_QUESTION, Difficulty.EASY)

        setQuestions(newQuestion)
        setScore(0)
        setUserAnswer([])
        setNumber(0)
        setLoading(false)
    }
    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            const answer = e.currentTarget.value
            const correct = questions[number].correct_answer === answer
            if (correct) setScore(prevState => prevState + 1)
            const answerObject = {
                question: questions[number].question,
                answer, correct,
                correctAnswer: questions[number].correct_answer
            }
            setUserAnswer(prevState => [...prevState, answerObject])
        }
    }
    const nextQuestion = () => {
        const nextQuestion = number + 1
        if (nextQuestion === TOTAL_QUESTION) setGameOver(true)
        else setNumber(nextQuestion)
    }
    return (
        <div className="w-[100vw] h-[100vh] relative">
            <img src="https://source.unsplash.com/random" alt="random background image"
                 className="w-full h-full object-cover"/>
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-3 px-6 rounded-2xl backdrop-blur-xl text-white">
                <h1 className="text-3xl font-semibold text-center mb-5">React Quiz Game</h1>
                {gameOver || userAnswer.length === TOTAL_QUESTION ?
                    <button className="bg-amber-500 hover:bg-amber-600 transition text-white py-2 px-4 rounded-lg my-5"
                            onClick={startTrivia}>Start</button> : null}
                {loading ? <p>Loading Question...</p> : !gameOver ? <p>Score: {score}</p> : null}
                {!loading && !gameOver && (
                    <QuestionCard
                        questionNb={number + 1}
                        totalQuestion={TOTAL_QUESTION}
                        question={questions[number].question}
                        answers={questions[number].answers}
                        userAnswer={userAnswer ? userAnswer[number] : undefined}
                        callback={checkAnswer}
                    />)}
                {!loading && !gameOver && userAnswer.length === number + 1 && number != TOTAL_QUESTION - 1 ? (
                    <button className="bg-amber-500 hover:bg-amber-600 transition text-white py-2 px-4 rounded-lg my-5"
                            onClick={nextQuestion}>Next Question
                    </button>
                ) : null}
            </div>
        </div>
    );
};

export default Quiz;